/**
 * Tests for RelatedPosts component
 */

import { render, screen } from '@testing-library/react';
import RelatedPosts from '@/components/blog/RelatedPosts';
import { BlogPost } from '@/lib/blog.types';

// Mock the getRelatedPosts function
jest.mock('@/lib/blog', () => ({
  getRelatedPosts: jest.fn((post, maxPosts) => {
    // Return mock related posts
    const mockPosts: BlogPost[] = [
      {
        slug: 'related-post-1',
        title: 'Related Post 1',
        date: '2021-01-01',
        categories: ['rails'],
        tags: ['ruby'],
        meta_description: 'Description 1',
        meta_keywords: 'rails, ruby',
        excerpt: 'Excerpt 1',
        content: 'Content 1',
        readingTime: '2 min read',
        year: '2021',
        month: '01',
        day: '01',
      },
      {
        slug: 'related-post-2',
        title: 'Related Post 2',
        date: '2021-02-01',
        categories: ['rails'],
        tags: ['ruby'],
        meta_description: 'Description 2',
        meta_keywords: 'rails, ruby',
        excerpt: 'Excerpt 2',
        content: 'Content 2',
        readingTime: '3 min read',
        year: '2021',
        month: '02',
        day: '01',
      },
    ];
    return mockPosts.slice(0, maxPosts);
  }),
}));

describe('RelatedPosts', () => {
  const mockPost: BlogPost = {
    slug: 'test-post',
    title: 'Test Post',
    date: '2021-03-01',
    categories: ['rails'],
    tags: ['ruby'],
    meta_description: 'Test description',
    meta_keywords: 'test, rails',
    excerpt: 'Test excerpt',
    content: 'Test content',
    readingTime: '5 min read',
    year: '2021',
    month: '03',
    day: '01',
  };

  it('renders related posts section', () => {
    render(<RelatedPosts post={mockPost} />);
    expect(screen.getByText('Related Posts')).toBeInTheDocument();
  });

  it('displays related posts', () => {
    render(<RelatedPosts post={mockPost} maxPosts={2} />);
    expect(screen.getByText('Related Post 1')).toBeInTheDocument();
    expect(screen.getByText('Related Post 2')).toBeInTheDocument();
  });

  it('renders nothing when no related posts found', () => {
    const { getRelatedPosts } = require('@/lib/blog');
    getRelatedPosts.mockReturnValueOnce([]);

    const { container } = render(<RelatedPosts post={mockPost} />);
    expect(container.firstChild).toBeNull();
  });
});

