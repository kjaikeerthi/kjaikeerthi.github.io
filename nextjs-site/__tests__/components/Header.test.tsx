import React from 'react';
import { render, screen } from '@testing-library/react';
import { ChakraProvider } from '@chakra-ui/react';
import Header from '@/components/Header';
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

describe('Header Component', () => {
  const renderWithChakra = (component: React.ReactElement) => {
    return render(<ChakraProvider theme={theme}>{component}</ChakraProvider>);
  };

  it('should render the site title', () => {
    renderWithChakra(<Header />);
    const siteTitle = screen.getByText('Jai Keerthi');
    expect(siteTitle).toBeInTheDocument();
  });

  it('should render all navigation links', () => {
    renderWithChakra(<Header />);

    const homeLink = screen.getByText('Home');
    const blogLink = screen.getByText('Blog');
    const aboutLink = screen.getByText('About');
    const resumeLink = screen.getByText('Resume');

    expect(homeLink).toBeInTheDocument();
    expect(blogLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
    expect(resumeLink).toBeInTheDocument();
  });

  it('should render mobile menu button', () => {
    renderWithChakra(<Header />);
    const menuButton = screen.getByLabelText('Open navigation menu');
    expect(menuButton).toBeInTheDocument();
  });

  it('should render social media links', () => {
    renderWithChakra(<Header />);

    const githubLink = screen.getByLabelText('Visit GitHub profile');
    const linkedinLink = screen.getByLabelText('Visit LinkedIn profile');
    const twitterLink = screen.getByLabelText('Visit Twitter profile');

    expect(githubLink).toBeInTheDocument();
    expect(linkedinLink).toBeInTheDocument();
    expect(twitterLink).toBeInTheDocument();
  });
});
