/**
 * Post Metadata component
 * Displays comprehensive post metadata: date, categories, tags, reading time
 */

import { Box, HStack, VStack, Badge, Text, Icon } from '@chakra-ui/react';
import { CalendarIcon, TimeIcon, Icon as ChakraIcon } from '@chakra-ui/icons';
import Link from 'next/link';
import { format } from 'date-fns';
import { BlogPost } from '@/lib/blog.types';

interface PostMetadataProps {
  post: BlogPost;
}

/**
 * Post metadata display component
 * Shows publish date, categories, tags, and reading time with icons
 */
export default function PostMetadata({ post }: PostMetadataProps) {
  const formattedDate = format(new Date(post.date), 'MMMM dd, yyyy');

  return (
    <VStack align="stretch" spacing={3} mb={6}>
      {/* Date and Reading Time */}
      <HStack spacing={4} flexWrap="wrap" color="gray.600" fontSize="sm">
        <HStack spacing={2}>
          <CalendarIcon />
          <Text>{formattedDate}</Text>
        </HStack>
        <HStack spacing={2}>
          <TimeIcon />
          <Text>{post.readingTime}</Text>
        </HStack>
      </HStack>

      {/* Categories */}
      {post.categories.length > 0 && (
        <Box>
          <Text fontSize="sm" color="gray.600" fontWeight="semibold" mb={2}>
            Categories
          </Text>
          <HStack spacing={2} flexWrap="wrap">
            {post.categories.map((category) => (
              <Link key={category} href={`/blog?category=${encodeURIComponent(category)}`}>
                <Badge
                  colorScheme="blue"
                  fontSize="sm"
                  px={3}
                  py={1}
                  cursor="pointer"
                  _hover={{
                    transform: 'scale(1.05)',
                    boxShadow: 'sm',
                  }}
                  transition="all 0.2s"
                >
                  {category}
                </Badge>
              </Link>
            ))}
          </HStack>
        </Box>
      )}

      {/* Tags */}
      {post.tags.length > 0 && (
        <Box>
          <Text fontSize="sm" color="gray.600" fontWeight="semibold" mb={2}>
            Tags
          </Text>
          <HStack spacing={2} flexWrap="wrap">
            {post.tags.map((tag) => (
              <Link key={tag} href={`/blog?tag=${encodeURIComponent(tag)}`}>
                <Badge
                  colorScheme="gray"
                  variant="outline"
                  fontSize="sm"
                  px={3}
                  py={1}
                  cursor="pointer"
                  _hover={{
                    transform: 'scale(1.05)',
                    bg: 'gray.50',
                  }}
                  transition="all 0.2s"
                >
                  #{tag}
                </Badge>
              </Link>
            ))}
          </HStack>
        </Box>
      )}
    </VStack>
  );
}

