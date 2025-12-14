import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import ResumePage from '@/app/resume/page';
import { resumeData } from '@/data/resume';
import { ChakraProvider } from '@chakra-ui/react';

// Mock @react-pdf/renderer
jest.mock('@react-pdf/renderer', () => ({
  pdf: jest.fn(() => ({
    toBlob: jest.fn().mockResolvedValue(new Blob(['mock pdf'], { type: 'application/pdf' })),
  })),
  Document: jest.fn(({ children }) => children),
  Page: jest.fn(({ children }) => children),
  Text: jest.fn(({ children }) => children),
  View: jest.fn(({ children }) => children),
  StyleSheet: {
    create: jest.fn((styles) => styles),
  },
  Font: {
    register: jest.fn(),
  },
}));

// Wrapper component with ChakraProvider
const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return <ChakraProvider>{children}</ChakraProvider>;
};

describe('Resume Page', () => {
  beforeEach(() => {
    // Mock window.print
    window.print = jest.fn();

    // Mock URL.createObjectURL and URL.revokeObjectURL
    global.URL.createObjectURL = jest.fn(() => 'mock-url');
    global.URL.revokeObjectURL = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders resume page with all sections', () => {
    render(<ResumePage />, { wrapper: AllTheProviders });

    // Check for main heading
    expect(screen.getByRole('heading', { level: 1, name: resumeData.contactInfo.name })).toBeInTheDocument();

    // Check for section headings
    expect(screen.getByRole('heading', { name: /Technical Expertise/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Professional Experience/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Educational Qualification/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Additional Links/i })).toBeInTheDocument();
  });

  test('displays contact information correctly', () => {
    render(<ResumePage />, { wrapper: AllTheProviders });

    // Check for contact info
    expect(screen.getByText(resumeData.contactInfo.title)).toBeInTheDocument();
    expect(screen.getByText(resumeData.contactInfo.email)).toBeInTheDocument();
    expect(screen.getByText(resumeData.contactInfo.location)).toBeInTheDocument();

    if (resumeData.contactInfo.mobile) {
      expect(screen.getByText(resumeData.contactInfo.mobile)).toBeInTheDocument();
    }
  });

  test('displays technical expertise with all categories', () => {
    render(<ResumePage />, { wrapper: AllTheProviders });

    // Check that all technical expertise categories are displayed
    resumeData.technicalExpertise.forEach((expertise) => {
      const categoryRegex = new RegExp(expertise.category, 'i');
      expect(screen.getByText(categoryRegex)).toBeInTheDocument();
    });
  });

  test('displays professional experience with companies and roles', () => {
    render(<ResumePage />, { wrapper: AllTheProviders });

    // Check that at least the first few experiences are displayed
    const experiencesToCheck = resumeData.experience.slice(0, 3);
    experiencesToCheck.forEach((exp) => {
      // Use getAllByText to handle duplicate roles
      const roleElements = screen.getAllByText(exp.role);
      expect(roleElements.length).toBeGreaterThan(0);

      const companyElements = screen.getAllByText(exp.company);
      expect(companyElements.length).toBeGreaterThan(0);
    });
  });

  test('print button triggers window.print()', () => {
    render(<ResumePage />, { wrapper: AllTheProviders });

    const printButton = screen.getByRole('button', { name: /Print/i });
    fireEvent.click(printButton);

    expect(window.print).toHaveBeenCalledTimes(1);
  });

  test('download PDF button shows loading state and triggers PDF generation', async () => {
    const { pdf } = require('@react-pdf/renderer');

    render(<ResumePage />, { wrapper: AllTheProviders });

    const downloadButton = screen.getByRole('button', { name: /Download PDF/i });

    // Click the download button
    fireEvent.click(downloadButton);

    // Check for loading state
    await waitFor(() => {
      expect(screen.getByText(/Generating PDF/i)).toBeInTheDocument();
    });

    // Wait for PDF generation to complete
    await waitFor(() => {
      expect(pdf).toHaveBeenCalled();
    });

    // Check that URL.createObjectURL was called
    await waitFor(() => {
      expect(global.URL.createObjectURL).toHaveBeenCalled();
    });
  });
});

describe('Resume Data Structure', () => {
  test('resume data has all required fields', () => {
    expect(resumeData).toHaveProperty('contactInfo');
    expect(resumeData).toHaveProperty('technicalExpertise');
    expect(resumeData).toHaveProperty('experience');
    expect(resumeData).toHaveProperty('education');
  });

  test('contact info has required fields', () => {
    expect(resumeData.contactInfo).toHaveProperty('name');
    expect(resumeData.contactInfo).toHaveProperty('title');
    expect(resumeData.contactInfo).toHaveProperty('email');
    expect(resumeData.contactInfo).toHaveProperty('location');
    expect(resumeData.contactInfo).toHaveProperty('socialLinks');
  });

  test('technical expertise is not empty', () => {
    expect(resumeData.technicalExpertise.length).toBeGreaterThan(0);
  });

  test('experience is not empty and has required fields', () => {
    expect(resumeData.experience.length).toBeGreaterThan(0);

    resumeData.experience.forEach((exp) => {
      expect(exp).toHaveProperty('company');
      expect(exp).toHaveProperty('role');
      expect(exp).toHaveProperty('startDate');
      expect(exp).toHaveProperty('endDate');
      expect(exp).toHaveProperty('projects');
    });
  });

  test('education has required fields', () => {
    expect(resumeData.education).toHaveProperty('degree');
    expect(resumeData.education).toHaveProperty('field');
    expect(resumeData.education).toHaveProperty('institution');
    expect(resumeData.education).toHaveProperty('location');
  });
});
