/**
 * Recent Posts component
 * Displays latest blog posts on homepage
 */

import { Box, Heading, SimpleGrid, VStack, Button } from '@chakra-ui/react';
import Link from 'next/link';
import { getAllBlogPosts } from '@/lib/blog';
import BlogCard from '@/components/blog/BlogCard';

/**
 * Recent Posts component
 * Shows latest 3 blog posts
 */
export default function RecentPosts() {
  const posts = getAllBlogPosts().slice(0, 3);

  if (posts.length === 0) {
    return null;
  }

  return (
    <Box as="section" py={8}>
      <VStack align="stretch" spacing={6}>
        <Heading as="h2" size="xl" textAlign="center">
          Recent Blog Posts
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </SimpleGrid>
        <Box textAlign="center" pt={4}>
          <Button as={Link} href="/blog" colorScheme="blue" variant="outline" size="lg">
            View All Posts
          </Button>
        </Box>
      </VStack>
    </Box>
  );
}

