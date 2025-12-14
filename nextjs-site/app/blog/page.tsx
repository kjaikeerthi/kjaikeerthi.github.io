import { Suspense } from 'react';
import { getAllBlogPosts, getAllCategories, getAllTags } from '@/lib/blog';
import BlogListingClient from '@/components/blog/BlogListingClient';
import { Box, Container, Spinner, VStack } from '@chakra-ui/react';

/**
 * Blog listing page with pagination and filtering
 * Server component that fetches data and passes to client component
 */
export default function BlogListingPage() {
  const allPosts = getAllBlogPosts();
  const categories = getAllCategories();
  const tags = getAllTags();

  return (
    <Suspense
      fallback={
        <Container maxW="container.xl" py={8}>
          <VStack spacing={8}>
            <Box>
              <Spinner size="xl" />
            </Box>
          </VStack>
        </Container>
      }
    >
      <BlogListingClient allPosts={allPosts} categories={categories} tags={tags} />
    </Suspense>
  );
}
