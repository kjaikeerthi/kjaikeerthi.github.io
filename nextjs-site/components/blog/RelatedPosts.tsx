/**
 * Related Posts component
 * Displays related blog posts based on shared categories and tags
 */

import { Box, Heading, VStack, SimpleGrid } from '@chakra-ui/react';
import Link from 'next/link';
import { BlogPost } from '@/lib/blog.types';
import { getRelatedPosts } from '@/lib/blog';
import BlogCard from './BlogCard';

interface RelatedPostsProps {
  post: BlogPost;
  maxPosts?: number;
}

/**
 * Related Posts section component
 * Shows posts with similar categories or tags
 */
export default function RelatedPosts({ post, maxPosts = 4 }: RelatedPostsProps) {
  const relatedPosts = getRelatedPosts(post, maxPosts);

  if (relatedPosts.length === 0) {
    return null;
  }

  return (
    <Box mt={12} pt={8} borderTop="1px" borderColor="gray.200">
      <VStack align="stretch" spacing={4}>
        <Heading as="h2" size="lg">
          Related Posts
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
          {relatedPosts.map((relatedPost) => (
            <BlogCard key={relatedPost.slug} post={relatedPost} />
          ))}
        </SimpleGrid>
      </VStack>
    </Box>
  );
}

