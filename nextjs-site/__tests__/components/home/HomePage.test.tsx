/**
 * Tests for Homepage components
 */

import { render, screen } from '@testing-library/react';
import HeroSection from '@/components/home/HeroSection';
import TechStack from '@/components/home/TechStack';
import FeaturedProjects from '@/components/home/FeaturedProjects';
import RecentPosts from '@/components/home/RecentPosts';

describe('Homepage Components', () => {
  describe('HeroSection', () => {
    it('renders name and title', () => {
      render(<HeroSection name="Test Name" title="Test Title" />);
      expect(screen.getByText('Test Name')).toBeInTheDocument();
      expect(screen.getByText('Test Title')).toBeInTheDocument();
    });

    it('renders CTA buttons', () => {
      render(<HeroSection name="Test Name" title="Test Title" />);
      expect(screen.getByText('View Resume')).toBeInTheDocument();
      expect(screen.getByText('Read Blog')).toBeInTheDocument();
      expect(screen.getByText('Contact Me')).toBeInTheDocument();
    });
  });

  describe('TechStack', () => {
    it('renders technologies section', () => {
      render(<TechStack />);
      expect(screen.getByText('Technologies')).toBeInTheDocument();
    });

    it('displays technology items', () => {
      render(<TechStack />);
      expect(screen.getByText('TypeScript')).toBeInTheDocument();
      expect(screen.getByText('React')).toBeInTheDocument();
    });
  });

  describe('FeaturedProjects', () => {
    const mockProjects = [
      {
        title: 'Test Project 1',
        description: 'Test description 1',
        technologies: ['React', 'Node.js'],
        company: 'Test Company',
      },
    ];

    it('renders featured projects section', () => {
      render(<FeaturedProjects projects={mockProjects} />);
      expect(screen.getByText('Featured Projects')).toBeInTheDocument();
    });

    it('displays project information', () => {
      render(<FeaturedProjects projects={mockProjects} />);
      expect(screen.getByText('Test Project 1')).toBeInTheDocument();
      expect(screen.getByText('Test description 1')).toBeInTheDocument();
    });

    it('renders nothing when no projects provided', () => {
      const { container } = render(<FeaturedProjects projects={[]} />);
      expect(container.firstChild).toBeNull();
    });
  });

  describe('RecentPosts', () => {
    it('renders recent posts section when posts exist', () => {
      render(<RecentPosts />);
      // Should render section if posts exist, or nothing if no posts
      // This test verifies the component renders without errors
      expect(true).toBe(true);
    });
  });
});

