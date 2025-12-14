/**
 * Tests for PostMetadata component
 */

import { render, screen } from '@testing-library/react';
import PostMetadata from '@/components/blog/PostMetadata';
import { BlogPost } from '@/lib/blog.types';

describe('PostMetadata', () => {
  const mockPost: BlogPost = {
    slug: 'test-post',
    title: 'Test Post',
    date: '2021-03-01',
    categories: ['rails', 'ruby'],
    tags: ['tutorial', 'guide'],
    meta_description: 'Test description',
    meta_keywords: 'test, rails',
    excerpt: 'Test excerpt',
    content: 'Test content',
    readingTime: '5 min read',
    year: '2021',
    month: '03',
    day: '01',
  };

  it('displays post date and reading time', () => {
    render(<PostMetadata post={mockPost} />);
    expect(screen.getByText(/March 01, 2021/)).toBeInTheDocument();
    expect(screen.getByText('5 min read')).toBeInTheDocument();
  });

  it('displays categories', () => {
    render(<PostMetadata post={mockPost} />);
    expect(screen.getByText('Categories')).toBeInTheDocument();
    expect(screen.getByText('rails')).toBeInTheDocument();
    expect(screen.getByText('ruby')).toBeInTheDocument();
  });

  it('displays tags', () => {
    render(<PostMetadata post={mockPost} />);
    expect(screen.getByText('Tags')).toBeInTheDocument();
    expect(screen.getByText('#tutorial')).toBeInTheDocument();
    expect(screen.getByText('#guide')).toBeInTheDocument();
  });

  it('handles posts without categories', () => {
    const postWithoutCategories = { ...mockPost, categories: [] };
    render(<PostMetadata post={postWithoutCategories} />);
    expect(screen.queryByText('Categories')).not.toBeInTheDocument();
  });

  it('handles posts without tags', () => {
    const postWithoutTags = { ...mockPost, tags: [] };
    render(<PostMetadata post={postWithoutTags} />);
    expect(screen.queryByText('Tags')).not.toBeInTheDocument();
  });
});

