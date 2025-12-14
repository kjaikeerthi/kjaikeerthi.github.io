import React from 'react';
import { render, screen } from '@testing-library/react';
import { ChakraProvider } from '@chakra-ui/react';
import SocialLinks from '@/components/SocialLinks';
import { theme } from '@/styles/theme';

describe('SocialLinks Component', () => {
  const renderWithChakra = (component: React.ReactElement) => {
    return render(<ChakraProvider theme={theme}>{component}</ChakraProvider>);
  };

  it('should render all social media links', () => {
    renderWithChakra(<SocialLinks />);

    const githubLink = screen.getByLabelText('Visit GitHub profile');
    const linkedinLink = screen.getByLabelText('Visit LinkedIn profile');
    const twitterLink = screen.getByLabelText('Visit Twitter profile');

    expect(githubLink).toBeInTheDocument();
    expect(linkedinLink).toBeInTheDocument();
    expect(twitterLink).toBeInTheDocument();
  });

  it('should have correct href attributes for external links', () => {
    renderWithChakra(<SocialLinks />);

    const githubLink = screen.getByLabelText('Visit GitHub profile');
    const linkedinLink = screen.getByLabelText('Visit LinkedIn profile');
    const twitterLink = screen.getByLabelText('Visit Twitter profile');

    expect(githubLink).toHaveAttribute('href', 'https://www.github.com/kjaikeerthi');
    expect(linkedinLink).toHaveAttribute('href', 'https://www.linkedin.com/in/kjaikeerthi/');
    expect(twitterLink).toHaveAttribute('href', 'https://www.twitter.com/kjaikeerthi');
  });

  it('should render social media icons with correct alt text', () => {
    renderWithChakra(<SocialLinks />);

    const githubIcon = screen.getByAltText('GitHub icon');
    const linkedinIcon = screen.getByAltText('LinkedIn icon');
    const twitterIcon = screen.getByAltText('Twitter icon');

    expect(githubIcon).toBeInTheDocument();
    expect(linkedinIcon).toBeInTheDocument();
    expect(twitterIcon).toBeInTheDocument();
  });

  it('should open links in new tab with proper security attributes', () => {
    renderWithChakra(<SocialLinks />);

    const githubLink = screen.getByLabelText('Visit GitHub profile');
    const linkedinLink = screen.getByLabelText('Visit LinkedIn profile');
    const twitterLink = screen.getByLabelText('Visit Twitter profile');

    expect(githubLink).toHaveAttribute('target', '_blank');
    expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer');
    expect(linkedinLink).toHaveAttribute('target', '_blank');
    expect(linkedinLink).toHaveAttribute('rel', 'noopener noreferrer');
    expect(twitterLink).toHaveAttribute('target', '_blank');
    expect(twitterLink).toHaveAttribute('rel', 'noopener noreferrer');
  });
});
