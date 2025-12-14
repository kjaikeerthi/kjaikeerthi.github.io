import React from 'react';
import { render, screen } from '@testing-library/react';
import { ChakraProvider } from '@chakra-ui/react';
import MainLayout from '@/components/layouts/MainLayout';
import { theme } from '@/styles/theme';

// Mock Next.js navigation
jest.mock('next/navigation', () => ({
  usePathname: () => '/',
}));

// Mock Next.js Link component
jest.mock('next/link', () => {
  return ({ children }: { children: React.ReactNode; href: string }) => {
    return <>{children}</>;
  };
});

describe('MainLayout Component', () => {
  const renderWithChakra = (component: React.ReactElement) => {
    return render(<ChakraProvider theme={theme}>{component}</ChakraProvider>);
  };

  it('should render header, main content area, and footer', () => {
    renderWithChakra(
      <MainLayout>
        <div>Test Content</div>
      </MainLayout>
    );

    // Check for header (site title)
    const siteTitle = screen.getByText('Jai Keerthi');
    expect(siteTitle).toBeInTheDocument();

    // Check for main content
    const mainContent = screen.getByText('Test Content');
    expect(mainContent).toBeInTheDocument();

    // Check for footer (copyright)
    const currentYear = new Date().getFullYear();
    const copyright = screen.getByText(new RegExp(`Copyright.*${currentYear}`));
    expect(copyright).toBeInTheDocument();
  });

  it('should render children in the main content area', () => {
    renderWithChakra(
      <MainLayout>
        <h1>Page Title</h1>
        <p>Page content goes here</p>
      </MainLayout>
    );

    const pageTitle = screen.getByText('Page Title');
    const pageContent = screen.getByText('Page content goes here');

    expect(pageTitle).toBeInTheDocument();
    expect(pageContent).toBeInTheDocument();
  });

  it('should render navigation links in header', () => {
    renderWithChakra(
      <MainLayout>
        <div>Content</div>
      </MainLayout>
    );

    const homeLink = screen.getByText('Home');
    const blogLink = screen.getByText('Blog');
    const aboutLink = screen.getByText('About');
    const resumeLink = screen.getByText('Resume');

    expect(homeLink).toBeInTheDocument();
    expect(blogLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
    expect(resumeLink).toBeInTheDocument();
  });
});
