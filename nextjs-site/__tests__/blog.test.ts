/**
 * Tests for blog infrastructure
 * Tests core blog functionality including post retrieval, filtering, and related posts
 */

import {
  getAllBlogPosts,
  getBlogPostBySlug,
  getBlogPostsByCategory,
  getBlogPostsByTag,
  getRelatedPosts,
  getAllCategories,
  getAllTags,
  getFilteredBlogPosts,
} from '@/lib/blog';
import { BlogPost } from '@/lib/blog.types';

describe('Blog Infrastructure', () => {
  describe('getAllBlogPosts', () => {
    it('should return all blog posts sorted by date (newest first)', () => {
      const posts = getAllBlogPosts();

      expect(Array.isArray(posts)).toBe(true);

      // Verify posts are sorted by date (newest first)
      for (let i = 0; i < posts.length - 1; i++) {
        const currentDate = new Date(posts[i].date).getTime();
        const nextDate = new Date(posts[i + 1].date).getTime();
        expect(currentDate).toBeGreaterThanOrEqual(nextDate);
      }
    });

    it('should return posts with all required properties', () => {
      const posts = getAllBlogPosts();

      if (posts.length > 0) {
        const post = posts[0];

        expect(post).toHaveProperty('slug');
        expect(post).toHaveProperty('title');
        expect(post).toHaveProperty('date');
        expect(post).toHaveProperty('categories');
        expect(post).toHaveProperty('tags');
        expect(post).toHaveProperty('content');
        expect(post).toHaveProperty('readingTime');
        expect(post).toHaveProperty('year');
        expect(post).toHaveProperty('month');
        expect(post).toHaveProperty('day');

        expect(Array.isArray(post.categories)).toBe(true);
        expect(Array.isArray(post.tags)).toBe(true);
      }
    });
  });

  describe('getBlogPostBySlug', () => {
    it('should return correct post by simple slug', () => {
      const posts = getAllBlogPosts();

      if (posts.length > 0) {
        const firstPost = posts[0];
        const retrieved = getBlogPostBySlug(firstPost.slug);

        expect(retrieved).not.toBeNull();
        expect(retrieved?.slug).toBe(firstPost.slug);
        expect(retrieved?.title).toBe(firstPost.title);
      }
    });

    it('should return correct post by Jekyll URL structure', () => {
      const posts = getAllBlogPosts();

      if (posts.length > 0) {
        const firstPost = posts[0];
        const jekyllPath = `${firstPost.year}/${firstPost.month}/${firstPost.day}/${firstPost.slug}`;
        const retrieved = getBlogPostBySlug(jekyllPath);

        expect(retrieved).not.toBeNull();
        expect(retrieved?.slug).toBe(firstPost.slug);
        expect(retrieved?.year).toBe(firstPost.year);
        expect(retrieved?.month).toBe(firstPost.month);
        expect(retrieved?.day).toBe(firstPost.day);
      }
    });

    it('should return null for non-existent slug', () => {
      const retrieved = getBlogPostBySlug('non-existent-post-slug-12345');
      expect(retrieved).toBeNull();
    });
  });

  describe('getBlogPostsByCategory', () => {
    it('should filter posts by category correctly', () => {
      const allPosts = getAllBlogPosts();

      if (allPosts.length > 0 && allPosts[0].categories.length > 0) {
        const category = allPosts[0].categories[0];
        const filtered = getBlogPostsByCategory(category);

        expect(Array.isArray(filtered)).toBe(true);
        expect(filtered.length).toBeGreaterThan(0);

        filtered.forEach((post) => {
          const hasCategory = post.categories.some(
            (cat) => cat.toLowerCase() === category.toLowerCase()
          );
          expect(hasCategory).toBe(true);
        });
      }
    });

    it('should return empty array for non-existent category', () => {
      const filtered = getBlogPostsByCategory('non-existent-category-12345');
      expect(Array.isArray(filtered)).toBe(true);
      expect(filtered.length).toBe(0);
    });
  });

  describe('getBlogPostsByTag', () => {
    it('should filter posts by tag correctly', () => {
      const allPosts = getAllBlogPosts();

      if (allPosts.length > 0 && allPosts[0].tags.length > 0) {
        const tag = allPosts[0].tags[0];
        const filtered = getBlogPostsByTag(tag);

        expect(Array.isArray(filtered)).toBe(true);

        filtered.forEach((post) => {
          const hasTag = post.tags.some((t) => t.toLowerCase() === tag.toLowerCase());
          expect(hasTag).toBe(true);
        });
      }
    });
  });

  describe('getRelatedPosts', () => {
    it('should return related posts with shared categories or tags', () => {
      const allPosts = getAllBlogPosts();

      if (allPosts.length > 1) {
        const post = allPosts[0];
        const related = getRelatedPosts(post, 3);

        expect(Array.isArray(related)).toBe(true);

        // Related posts should not include the original post
        related.forEach((relatedPost) => {
          expect(relatedPost.slug).not.toBe(post.slug);
        });

        // If related posts exist, they should share categories or tags
        if (related.length > 0) {
          related.forEach((relatedPost) => {
            const sharedCategories = relatedPost.categories.some((cat) =>
              post.categories.includes(cat)
            );
            const sharedTags = relatedPost.tags.some((tag) => post.tags.includes(tag));

            expect(sharedCategories || sharedTags).toBe(true);
          });
        }
      }
    });
  });

  describe('getAllCategories', () => {
    it('should return all unique categories', () => {
      const categories = getAllCategories();

      expect(Array.isArray(categories)).toBe(true);

      // Check uniqueness
      const uniqueCategories = new Set(categories);
      expect(uniqueCategories.size).toBe(categories.length);
    });
  });

  describe('getAllTags', () => {
    it('should return all unique tags', () => {
      const tags = getAllTags();

      expect(Array.isArray(tags)).toBe(true);

      // Check uniqueness
      const uniqueTags = new Set(tags);
      expect(uniqueTags.size).toBe(tags.length);
    });
  });

  describe('getFilteredBlogPosts', () => {
    it('should apply category filter correctly', () => {
      const allPosts = getAllBlogPosts();

      if (allPosts.length > 0 && allPosts[0].categories.length > 0) {
        const category = allPosts[0].categories[0];
        const filtered = getFilteredBlogPosts({ category });

        expect(Array.isArray(filtered)).toBe(true);

        filtered.forEach((post) => {
          const hasCategory = post.categories.some(
            (cat) => cat.toLowerCase() === category.toLowerCase()
          );
          expect(hasCategory).toBe(true);
        });
      }
    });

    it('should apply pagination correctly', () => {
      const allPosts = getAllBlogPosts();

      if (allPosts.length >= 5) {
        const filtered = getFilteredBlogPosts({ limit: 2, offset: 0 });

        expect(filtered.length).toBe(2);
        expect(filtered[0].slug).toBe(allPosts[0].slug);
        expect(filtered[1].slug).toBe(allPosts[1].slug);
      }
    });
  });

  describe('Reading time calculation', () => {
    it('should calculate reading time for posts', () => {
      const posts = getAllBlogPosts();

      if (posts.length > 0) {
        const post = posts[0];

        expect(post.readingTime).toBeDefined();
        expect(typeof post.readingTime).toBe('string');
        expect(post.readingTime).toMatch(/\d+\s+(min|sec)/);
      }
    });
  });
});
