'use client';

import {
  Box,
  Heading,
  Text,
  Badge,
  HStack,
  VStack,
  Link as ChakraLink,
} from '@chakra-ui/react';
import Link from 'next/link';
import { format } from 'date-fns';
import { BlogPost } from '@/lib/blog.types';

interface BlogCardProps {
  post: BlogPost;
}

/**
 * BlogCard component displays a preview card for a blog post
 * Used in blog listing pages to show post summaries
 */
export default function BlogCard({ post }: BlogCardProps) {
  // Format the date nicely
  const formattedDate = format(new Date(post.date), 'MMMM dd, yyyy');

  // Generate Jekyll-style URL
  const postUrl = `/${post.year}/${post.month}/${post.day}/${post.slug}`;

  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      p={6}
      bg="white"
      _hover={{
        boxShadow: 'lg',
        transform: 'translateY(-2px)',
        transition: 'all 0.3s ease',
      }}
      transition="all 0.3s ease"
      height="100%"
      display="flex"
      flexDirection="column"
    >
      <VStack align="stretch" spacing={3} flex="1">
        {/* Post Title */}
        <Heading as="h3" size="md" mb={2}>
          <ChakraLink
            as={Link}
            href={postUrl}
            _hover={{ textDecoration: 'none', color: 'blue.600' }}
          >
            {post.title}
          </ChakraLink>
        </Heading>

        {/* Date and Reading Time */}
        <HStack spacing={3} fontSize="sm" color="gray.600">
          <Text>{formattedDate}</Text>
          <Text>•</Text>
          <Text>{post.readingTime}</Text>
        </HStack>

        {/* Excerpt */}
        <Text color="gray.700" noOfLines={3} flex="1">
          {post.excerpt}
        </Text>

        {/* Categories */}
        {post.categories.length > 0 && (
          <HStack spacing={2} flexWrap="wrap">
            {post.categories.map((category) => (
              <Badge key={category} colorScheme="blue" fontSize="xs">
                {category}
              </Badge>
            ))}
          </HStack>
        )}

        {/* Tags */}
        {post.tags.length > 0 && (
          <HStack spacing={2} flexWrap="wrap">
            {post.tags.map((tag) => (
              <Badge key={tag} colorScheme="gray" variant="outline" fontSize="xs">
                #{tag}
              </Badge>
            ))}
          </HStack>
        )}

        {/* Read More Link */}
        <ChakraLink
          as={Link}
          href={postUrl}
          color="blue.600"
          fontWeight="semibold"
          _hover={{ textDecoration: 'underline' }}
          mt={2}
        >
          Read More →
        </ChakraLink>
      </VStack>
    </Box>
  );
}
