/**
 * Tests for TableOfContents component
 */

import { render, screen } from '@testing-library/react';
import TableOfContents from '@/components/blog/TableOfContents';

// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
  observe() {
    return null;
  }
  unobserve() {
    return null;
  }
  disconnect() {
    return null;
  }
} as any;

describe('TableOfContents', () => {
  it('renders nothing when no headings are provided', () => {
    const { container } = render(<TableOfContents />);
    expect(container.firstChild).toBeNull();
  });

  it('renders TOC with provided headings', () => {
    const headings = [
      { id: 'heading-1', text: 'Introduction', level: 2 },
      { id: 'heading-2', text: 'Conclusion', level: 2 },
    ];

    render(<TableOfContents headings={headings} />);
    expect(screen.getByText('Table of Contents')).toBeInTheDocument();
    expect(screen.getByText('Introduction')).toBeInTheDocument();
    expect(screen.getByText('Conclusion')).toBeInTheDocument();
  });

  it('renders h3 headings with indentation', () => {
    const headings = [
      { id: 'heading-1', text: 'Section 1', level: 2 },
      { id: 'heading-1-1', text: 'Subsection 1.1', level: 3 },
    ];

    render(<TableOfContents headings={headings} />);
    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(2);
  });
});

