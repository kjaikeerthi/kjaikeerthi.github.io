import React from 'react';
import { render, screen } from '@testing-library/react';
import { ChakraProvider } from '@chakra-ui/react';
import Footer from '@/components/Footer';
import { theme } from '@/styles/theme';

// Mock Next.js Link component
jest.mock('next/link', () => {
  return ({ children }: { children: React.ReactNode; href: string }) => {
    return <>{children}</>;
  };
});

describe('Footer Component', () => {
  const renderWithChakra = (component: React.ReactElement) => {
    return render(<ChakraProvider theme={theme}>{component}</ChakraProvider>);
  };

  it('should render copyright notice with current year', () => {
    renderWithChakra(<Footer />);
    const currentYear = new Date().getFullYear();
    const copyright = screen.getByText(new RegExp(`Copyright.*${currentYear}.*Jaikeerthi`));
    expect(copyright).toBeInTheDocument();
  });

  it('should render "Powered by" credits with Next.js and GitHub links', () => {
    renderWithChakra(<Footer />);

    const poweredByText = screen.getByText(/Powered by/i);
    const nextjsLink = screen.getByText('Next.js');
    const githubLink = screen.getByText('GitHub');

    expect(poweredByText).toBeInTheDocument();
    expect(nextjsLink).toBeInTheDocument();
    expect(githubLink).toBeInTheDocument();
  });

  it('should render social media links', () => {
    renderWithChakra(<Footer />);

    const githubLink = screen.getByLabelText('Visit GitHub profile');
    const linkedinLink = screen.getByLabelText('Visit LinkedIn profile');
    const twitterLink = screen.getByLabelText('Visit Twitter profile');

    expect(githubLink).toBeInTheDocument();
    expect(linkedinLink).toBeInTheDocument();
    expect(twitterLink).toBeInTheDocument();
  });
});
