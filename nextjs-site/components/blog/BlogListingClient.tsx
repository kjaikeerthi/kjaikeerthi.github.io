'use client';

import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Button,
  HStack,
  VStack,
  Badge,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import { useSearchParams, useRouter } from 'next/navigation';
import BlogCard from '@/components/blog/BlogCard';
import { BlogPost } from '@/lib/blog.types';

interface BlogListingClientProps {
  allPosts: BlogPost[];
  categories: string[];
  tags: string[];
  postsPerPage?: number;
}

/**
 * Client-side blog listing component with pagination and filtering
 */
export default function BlogListingClient({
  allPosts,
  categories,
  tags,
  postsPerPage = 10,
}: BlogListingClientProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Get URL parameters
  const currentPage = parseInt(searchParams.get('page') || '1', 10);
  const selectedCategory = searchParams.get('category') || '';
  const selectedTag = searchParams.get('tag') || '';

  // Apply filters
  let filteredPosts = [...allPosts];

  if (selectedCategory) {
    filteredPosts = filteredPosts.filter((post) =>
      post.categories.some((cat) => cat.toLowerCase() === selectedCategory.toLowerCase())
    );
  }

  if (selectedTag) {
    filteredPosts = filteredPosts.filter((post) =>
      post.tags.some((t) => t.toLowerCase() === selectedTag.toLowerCase())
    );
  }

  // Calculate pagination
  const totalPosts = filteredPosts.length;
  const totalPages = Math.ceil(totalPosts / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentPosts = filteredPosts.slice(startIndex, endIndex);

  // Pagination handlers
  const goToPage = (page: number) => {
    const params = new URLSearchParams();
    params.set('page', page.toString());
    if (selectedCategory) params.set('category', selectedCategory);
    if (selectedTag) params.set('tag', selectedTag);
    router.push(`/blog?${params.toString()}`);
  };

  const handleCategoryClick = (category: string) => {
    const params = new URLSearchParams();
    params.set('category', category);
    params.set('page', '1');
    router.push(`/blog?${params.toString()}`);
  };

  const handleTagClick = (tag: string) => {
    const params = new URLSearchParams();
    params.set('tag', tag);
    params.set('page', '1');
    router.push(`/blog?${params.toString()}`);
  };

  const clearFilters = () => {
    router.push('/blog');
  };

  const hasFilters = selectedCategory || selectedTag;

  return (
    <Container maxW="container.xl" py={8}>
      <VStack align="stretch" spacing={8}>
        {/* Header */}
        <Box>
          <Heading as="h1" size="2xl" mb={2}>
            Blog
          </Heading>
          <Text color="gray.600" fontSize="lg">
            {totalPosts} {totalPosts === 1 ? 'post' : 'posts'}
            {hasFilters && ' (filtered)'}
          </Text>
        </Box>

        {/* Category Filter */}
        {categories.length > 0 && (
          <Box>
            <Heading as="h3" size="sm" mb={3}>
              Categories
            </Heading>
            <Wrap spacing={2}>
              {categories.map((category) => (
                <WrapItem key={category}>
                  <Badge
                    colorScheme={selectedCategory === category ? 'blue' : 'gray'}
                    variant={selectedCategory === category ? 'solid' : 'outline'}
                    cursor="pointer"
                    onClick={() => handleCategoryClick(category)}
                    px={3}
                    py={1}
                    fontSize="sm"
                    _hover={{
                      transform: 'scale(1.05)',
                      transition: 'transform 0.2s',
                    }}
                  >
                    {category}
                  </Badge>
                </WrapItem>
              ))}
            </Wrap>
          </Box>
        )}

        {/* Tag Filter */}
        {tags.length > 0 && (
          <Box>
            <Heading as="h3" size="sm" mb={3}>
              Tags
            </Heading>
            <Wrap spacing={2}>
              {tags.map((tag) => (
                <WrapItem key={tag}>
                  <Badge
                    colorScheme={selectedTag === tag ? 'purple' : 'gray'}
                    variant={selectedTag === tag ? 'solid' : 'outline'}
                    cursor="pointer"
                    onClick={() => handleTagClick(tag)}
                    px={3}
                    py={1}
                    fontSize="sm"
                    _hover={{
                      transform: 'scale(1.05)',
                      transition: 'transform 0.2s',
                    }}
                  >
                    #{tag}
                  </Badge>
                </WrapItem>
              ))}
            </Wrap>
          </Box>
        )}

        {/* Clear Filters Button */}
        {hasFilters && (
          <Box>
            <Button size="sm" variant="outline" onClick={clearFilters}>
              Clear Filters
            </Button>
          </Box>
        )}

        {/* Blog Posts Grid */}
        {currentPosts.length > 0 ? (
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
            {currentPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </SimpleGrid>
        ) : (
          <Box textAlign="center" py={12}>
            <Text color="gray.600" fontSize="lg">
              No posts found.
            </Text>
          </Box>
        )}

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <HStack justify="center" spacing={4} pt={8}>
            <Button
              onClick={() => goToPage(currentPage - 1)}
              isDisabled={currentPage === 1}
              variant="outline"
            >
              Previous
            </Button>

            {/* Page Numbers */}
            <HStack spacing={2}>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                // Show first page, last page, current page, and pages around current
                const showPage =
                  page === 1 ||
                  page === totalPages ||
                  (page >= currentPage - 2 && page <= currentPage + 2);

                if (!showPage) {
                  // Show ellipsis for hidden pages
                  if (page === currentPage - 3 || page === currentPage + 3) {
                    return (
                      <Text key={page} color="gray.500">
                        ...
                      </Text>
                    );
                  }
                  return null;
                }

                return (
                  <Button
                    key={page}
                    onClick={() => goToPage(page)}
                    colorScheme={currentPage === page ? 'blue' : 'gray'}
                    variant={currentPage === page ? 'solid' : 'outline'}
                    size="sm"
                  >
                    {page}
                  </Button>
                );
              })}
            </HStack>

            <Button
              onClick={() => goToPage(currentPage + 1)}
              isDisabled={currentPage === totalPages}
              variant="outline"
            >
              Next
            </Button>
          </HStack>
        )}
      </VStack>
    </Container>
  );
}
