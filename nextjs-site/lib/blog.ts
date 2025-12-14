/**
 * Blog content utilities
 * Helper functions for reading and processing blog posts from MDX files
 */

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import { BlogPost, BlogPostFrontmatter, BlogPostFilter } from './blog.types';

const CONTENT_DIR = path.join(process.cwd(), 'content', 'blog');

/**
 * Get all blog posts from the content directory
 * Posts are sorted by date (newest first)
 */
export function getAllBlogPosts(): BlogPost[] {
  // Ensure content directory exists
  if (!fs.existsSync(CONTENT_DIR)) {
    return [];
  }

  const files = fs.readdirSync(CONTENT_DIR);
  const mdxFiles = files.filter((file) => file.endsWith('.mdx') || file.endsWith('.md'));

  const posts = mdxFiles
    .map((filename) => {
      const filePath = path.join(CONTENT_DIR, filename);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data, content } = matter(fileContents);

      // Parse frontmatter
      const frontmatter = data as BlogPostFrontmatter;

      // Generate slug from filename (remove date prefix and extension)
      // Expected format: YYYY-MM-DD-slug.mdx
      const slug = filename
        .replace(/^\d{4}-\d{2}-\d{2}-/, '')
        .replace(/\.(mdx|md)$/, '');

      // Extract date parts for Jekyll URL structure
      const dateMatch = filename.match(/^(\d{4})-(\d{2})-(\d{2})-/);
      const year = dateMatch ? dateMatch[1] : new Date().getFullYear().toString();
      const month = dateMatch ? dateMatch[2] : '01';
      const day = dateMatch ? dateMatch[3] : '01';

      // Parse categories from space-separated string or array
      let categories: string[] = [];
      if (frontmatter.categories) {
        if (Array.isArray(frontmatter.categories)) {
          categories = frontmatter.categories;
        } else if (typeof frontmatter.categories === 'string') {
          categories = frontmatter.categories.split(' ').filter(Boolean);
        }
      }

      // Parse tags from space-separated string or array
      let tags: string[] = [];
      if (frontmatter.tags) {
        if (Array.isArray(frontmatter.tags)) {
          tags = frontmatter.tags;
        } else if (typeof frontmatter.tags === 'string') {
          tags = frontmatter.tags.split(' ').filter(Boolean);
        }
      }

      // Generate excerpt from first paragraph if not provided
      let excerpt = frontmatter.excerpt || '';
      if (!excerpt) {
        const paragraphs = content.split('\n\n');
        excerpt = paragraphs[0]?.replace(/[#*`]/g, '').trim() || '';
      }

      // Calculate reading time
      const stats = readingTime(content);

      const post: BlogPost = {
        slug,
        title: frontmatter.title || 'Untitled',
        date: frontmatter.date || `${year}-${month}-${day}`,
        categories,
        tags,
        meta_description: frontmatter.meta_description || excerpt,
        meta_keywords: frontmatter.meta_keywords || categories.join(', '),
        excerpt,
        content,
        readingTime: stats.text,
        year,
        month,
        day,
      };

      return post;
    })
    .sort((a, b) => {
      // Sort by date, newest first
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

  return posts;
}

/**
 * Get a single blog post by its slug
 * Supports both simple slug and full Jekyll URL structure
 */
export function getBlogPostBySlug(slug: string): BlogPost | null {
  const allPosts = getAllBlogPosts();

  // Try to find by simple slug
  let post = allPosts.find((p) => p.slug === slug);

  if (post) {
    return post;
  }

  // Try to parse Jekyll URL structure: /YYYY/MM/DD/slug/
  const parts = slug.split('/').filter(Boolean);
  if (parts.length === 4) {
    const [year, month, day, postSlug] = parts;
    post = allPosts.find(
      (p) => p.year === year && p.month === month && p.day === day && p.slug === postSlug
    );
  }

  return post || null;
}

/**
 * Get blog posts filtered by category
 */
export function getBlogPostsByCategory(category: string): BlogPost[] {
  const allPosts = getAllBlogPosts();
  return allPosts.filter((post) =>
    post.categories.some((cat) => cat.toLowerCase() === category.toLowerCase())
  );
}

/**
 * Get blog posts filtered by tag
 */
export function getBlogPostsByTag(tag: string): BlogPost[] {
  const allPosts = getAllBlogPosts();
  return allPosts.filter((post) =>
    post.tags.some((t) => t.toLowerCase() === tag.toLowerCase())
  );
}

/**
 * Get related posts based on shared categories and tags
 * Returns up to maxPosts posts that share the most tags/categories
 */
export function getRelatedPosts(post: BlogPost, maxPosts: number = 4): BlogPost[] {
  const allPosts = getAllBlogPosts();

  // Filter out the current post
  const otherPosts = allPosts.filter((p) => p.slug !== post.slug);

  // Calculate relevance score based on shared categories and tags
  const postsWithScore = otherPosts.map((p) => {
    let score = 0;

    // Count shared categories (higher weight)
    const sharedCategories = p.categories.filter((cat) =>
      post.categories.some((c) => c.toLowerCase() === cat.toLowerCase())
    );
    score += sharedCategories.length * 2;

    // Count shared tags
    const sharedTags = p.tags.filter((tag) =>
      post.tags.some((t) => t.toLowerCase() === tag.toLowerCase())
    );
    score += sharedTags.length;

    return { post: p, score };
  });

  // Sort by score (highest first) and return top posts
  return postsWithScore
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, maxPosts)
    .map((item) => item.post);
}

/**
 * Get all unique categories from all posts
 */
export function getAllCategories(): string[] {
  const allPosts = getAllBlogPosts();
  const categories = new Set<string>();

  allPosts.forEach((post) => {
    post.categories.forEach((cat) => categories.add(cat));
  });

  return Array.from(categories).sort();
}

/**
 * Get all unique tags from all posts
 */
export function getAllTags(): string[] {
  const allPosts = getAllBlogPosts();
  const tags = new Set<string>();

  allPosts.forEach((post) => {
    post.tags.forEach((tag) => tags.add(tag));
  });

  return Array.from(tags).sort();
}

/**
 * Get filtered and paginated blog posts
 */
export function getFilteredBlogPosts(filter: BlogPostFilter = {}): BlogPost[] {
  let posts = getAllBlogPosts();

  // Apply category filter
  if (filter.category) {
    posts = posts.filter((post) =>
      post.categories.some((cat) => cat.toLowerCase() === filter.category?.toLowerCase())
    );
  }

  // Apply tag filter
  if (filter.tag) {
    posts = posts.filter((post) =>
      post.tags.some((t) => t.toLowerCase() === filter.tag?.toLowerCase())
    );
  }

  // Apply pagination
  const offset = filter.offset || 0;
  const limit = filter.limit;

  if (limit) {
    posts = posts.slice(offset, offset + limit);
  }

  return posts;
}
