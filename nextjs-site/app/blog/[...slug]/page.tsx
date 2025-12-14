import { notFound } from 'next/navigation';
import { Container, Box, Heading, Text, HStack, Badge, VStack } from '@chakra-ui/react';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { format } from 'date-fns';
import Link from 'next/link';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { getAllBlogPosts, getBlogPostBySlug } from '@/lib/blog';
import { BlogPost } from '@/lib/blog.types';
import MDXComponents from '@/components/mdx/MDXComponents';

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

  // Format the date nicely
  const formattedDate = format(new Date(post.date), 'MMMM dd, yyyy');

  return (
    <Container maxW="container.md" py={8}>
      <VStack align="stretch" spacing={8}>
        {/* Breadcrumb Navigation */}
        <Box fontSize="sm" color="gray.600">
          <Link href="/" style={{ textDecoration: 'underline' }}>
            Home
          </Link>
          {' > '}
          <Link href="/blog" style={{ textDecoration: 'underline' }}>
            Blog
          </Link>
          {' > '}
          <Text as="span">{post.title}</Text>
        </Box>

        {/* Post Header */}
        <Box>
          <Heading as="h1" size="2xl" mb={4}>
            {post.title}
          </Heading>

          {/* Post Metadata */}
          <HStack spacing={4} mb={4} flexWrap="wrap">
            <Text color="gray.600">{formattedDate}</Text>
            <Text color="gray.600">•</Text>
            <Text color="gray.600">{post.readingTime}</Text>
          </HStack>

          {/* Categories */}
          {post.categories.length > 0 && (
            <HStack spacing={2} mb={2} flexWrap="wrap">
              <Text fontSize="sm" color="gray.600" fontWeight="semibold">
                Categories:
              </Text>
              {post.categories.map((category) => (
                <Link key={category} href={`/blog?category=${category}`}>
                  <Badge
                    colorScheme="blue"
                    fontSize="xs"
                    cursor="pointer"
                    _hover={{ transform: 'scale(1.05)' }}
                  >
                    {category}
                  </Badge>
                </Link>
              ))}
            </HStack>
          )}

          {/* Tags */}
          {post.tags.length > 0 && (
            <HStack spacing={2} flexWrap="wrap">
              <Text fontSize="sm" color="gray.600" fontWeight="semibold">
                Tags:
              </Text>
              {post.tags.map((tag) => (
                <Link key={tag} href={`/blog?tag=${tag}`}>
                  <Badge
                    colorScheme="gray"
                    variant="outline"
                    fontSize="xs"
                    cursor="pointer"
                    _hover={{ transform: 'scale(1.05)' }}
                  >
                    #{tag}
                  </Badge>
                </Link>
              ))}
            </HStack>
          )}
        </Box>

        {/* Post Content */}
        <Box
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

        {/* Back to Blog Link */}
        <Box pt={8} borderTop="1px" borderColor="gray.200">
          <Link href="/blog" style={{ color: 'var(--chakra-colors-blue-600)', fontWeight: 600 }}>
            ← Back to Blog
          </Link>
        </Box>
      </VStack>
    </Container>
  );
}
