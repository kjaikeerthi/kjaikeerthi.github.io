import { notFound } from 'next/navigation';
import { Box, Heading, VStack, HStack, Flex } from '@chakra-ui/react';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { getAllBlogPosts, getBlogPostBySlug } from '@/lib/blog';
import { BlogPost } from '@/lib/blog.types';
import MDXComponents from '@/components/mdx/MDXComponents';
import BlogLayout from '@/components/layouts/BlogLayout';
import TableOfContents from '@/components/blog/TableOfContents';
import RelatedPosts from '@/components/blog/RelatedPosts';
import SocialShare from '@/components/blog/SocialShare';
import PostMetadata from '@/components/blog/PostMetadata';

interface BlogPostPageProps {
  params: Promise<{
    slug: string[];
  }>;
}

/**
 * Generate static params for all blog posts
 * Supports Jekyll URL structure: /YYYY/MM/DD/slug
 */
export async function generateStaticParams() {
  const posts = getAllBlogPosts();

  return posts.map((post) => ({
    slug: [post.year, post.month, post.day, post.slug],
  }));
}

/**
 * Generate metadata for blog post pages
 */
export async function generateMetadata({ params }: BlogPostPageProps) {
  const resolvedParams = await params;
  const slugPath = resolvedParams.slug.join('/');
  const post = getBlogPostBySlug(slugPath);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.title,
    description: post.meta_description || post.excerpt,
    keywords: post.meta_keywords,
  };
}

/**
 * Blog post detail page
 * Supports Jekyll URL structure: /YYYY/MM/DD/slug/
 */
export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const resolvedParams = await params;
  const slugPath = resolvedParams.slug.join('/');
  const post = getBlogPostBySlug(slugPath);

  if (!post) {
    notFound();
  }

  // Generate post URL for sharing
  const postUrl = `/blog/${post.year}/${post.month}/${post.day}/${post.slug}`;

  // Breadcrumbs for BlogLayout
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Blog', href: '/blog' },
    { label: post.title, href: postUrl },
  ];

  return (
    <BlogLayout breadcrumbs={breadcrumbs}>
      <VStack align="stretch" spacing={8}>
        {/* Post Header */}
        <Box>
          <Heading as="h1" size="2xl" mb={4}>
            {post.title}
          </Heading>

          {/* Post Metadata */}
          <PostMetadata post={post} />
        </Box>

        {/* Post Content with Table of Contents */}
        <Flex
          direction={{ base: 'column', lg: 'row' }}
          gap={8}
          align="flex-start"
        >
          {/* Main Content */}
          <Box
            as="article"
            flex={1}
            className="blog-content"
            fontSize="lg"
            lineHeight="tall"
            color="gray.800"
          >
            <MDXRemote
              source={post.content}
              components={MDXComponents}
              options={{
                mdxOptions: {
                  remarkPlugins: [remarkGfm],
                  rehypePlugins: [
                    rehypeSlug,
                    [
                      rehypeAutolinkHeadings,
                      {
                        behavior: 'wrap',
                      },
                    ],
                  ],
                },
              }}
            />
          </Box>

          {/* Table of Contents Sidebar */}
          <Box
            display={{ base: 'block', lg: 'block' }}
            w={{ base: '100%', lg: '250px' }}
            flexShrink={0}
          >
            <TableOfContents />
          </Box>
        </Flex>

        {/* Social Sharing */}
        <SocialShare title={post.title} url={postUrl} description={post.excerpt} />

        {/* Related Posts */}
        <RelatedPosts post={post} maxPosts={4} />

        {/* Back to Blog Link */}
        <Box pt={8} borderTop="1px" borderColor="gray.200">
          <Link href="/blog" style={{ color: 'var(--chakra-colors-blue-600)', fontWeight: 600 }}>
            ← Back to Blog
          </Link>
        </Box>
      </VStack>
    </BlogLayout>
  );
}
