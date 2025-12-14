/**
 * Hero Section component for homepage
 * Displays name, title, and call-to-action buttons
 */

import { Box, Heading, Text, VStack, HStack, Button, Flex } from '@chakra-ui/react';
import Link from 'next/link';

interface HeroSectionProps {
  name: string;
  title: string;
}

/**
 * Hero section component
 */
export default function HeroSection({ name, title }: HeroSectionProps) {
  return (
    <Box
      as="section"
      py={{ base: 12, md: 20 }}
      bgGradient="linear(to-br, blue.50, purple.50)"
      borderRadius="xl"
      px={{ base: 6, md: 12 }}
      mb={12}
    >
      <Flex
        direction={{ base: 'column', md: 'row' }}
        align="center"
        justify="space-between"
        gap={8}
      >
        <VStack align={{ base: 'center', md: 'flex-start' }} spacing={6} flex={1}>
          <VStack align={{ base: 'center', md: 'flex-start' }} spacing={4}>
            <Heading
              as="h1"
              size={{ base: '2xl', md: '3xl', lg: '4xl' }}
              textAlign={{ base: 'center', md: 'left' }}
              bgGradient="linear(to-r, blue.600, purple.600)"
              bgClip="text"
              fontWeight="bold"
            >
              {name}
            </Heading>
            <Text
              fontSize={{ base: 'xl', md: '2xl' }}
              color="gray.700"
              textAlign={{ base: 'center', md: 'left' }}
              fontWeight="medium"
            >
              {title}
            </Text>
          </VStack>

          <HStack
            spacing={4}
            flexWrap="wrap"
            justify={{ base: 'center', md: 'flex-start' }}
            mt={4}
          >
            <Button
              as={Link}
              href="/resume"
              colorScheme="blue"
              size={{ base: 'md', md: 'lg' }}
              px={8}
            >
              View Resume
            </Button>
            <Button
              as={Link}
              href="/blog"
              variant="outline"
              colorScheme="blue"
              size={{ base: 'md', md: 'lg' }}
              px={8}
            >
              Read Blog
            </Button>
            <Button
              as={Link}
              href="/about"
              variant="ghost"
              colorScheme="blue"
              size={{ base: 'md', md: 'lg' }}
              px={8}
            >
              Contact Me
            </Button>
          </HStack>
        </VStack>
      </Flex>
    </Box>
  );
}

