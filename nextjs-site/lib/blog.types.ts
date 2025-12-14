/**
 * Blog post type definitions
 * Defines TypeScript interfaces for blog posts, frontmatter, and related types
 */

/**
 * Blog post frontmatter data extracted from MDX files
 */
export interface BlogPostFrontmatter {
  title: string;
  date: string; // ISO date string (YYYY-MM-DD)
  categories?: string[];
  tags?: string[];
  meta_description?: string;
  meta_keywords?: string;
  excerpt?: string;
  layout?: string; // Jekyll legacy field
  header?: string; // Jekyll legacy field
}

/**
 * Complete blog post data including parsed content and metadata
 */
export interface BlogPost {
  slug: string; // URL-friendly post identifier
  title: string;
  date: string; // ISO date string (YYYY-MM-DD)
  categories: string[];
  tags: string[];
  meta_description: string;
  meta_keywords: string;
  excerpt: string;
  content: string; // Raw MDX content
  readingTime: string; // e.g., "5 min read"
  year: string; // Extracted from date for URL structure (YYYY)
  month: string; // Extracted from date for URL structure (MM)
  day: string; // Extracted from date for URL structure (DD)
}

/**
 * Filter parameters for blog post queries
 */
export interface BlogPostFilter {
  category?: string;
  tag?: string;
  limit?: number;
  offset?: number;
}

/**
 * Pagination information for blog listing
 */
export interface BlogPagination {
  currentPage: number;
  totalPages: number;
  postsPerPage: number;
  totalPosts: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}
