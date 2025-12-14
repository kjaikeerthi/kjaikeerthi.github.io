/**
 * About page
 * Displays professional bio and contact information
 */

import { Box, Container, VStack, Heading, Text, Link, List, ListItem, HStack } from '@chakra-ui/react';
import MainLayout from '@/components/layouts/MainLayout';
import SocialLinks from '@/components/SocialLinks';

export const metadata = {
  title: 'About Jai Keerthi',
  description: 'Jai Keerthi - AI Agents / LLM / Product / Architect. Technology Head at Coducer Technologies.',
  keywords: 'Jai Keerthi, About Me, Technology Head, Coducer Technologies, AI Agents, LLM, Product Development, Architecture',
};

export default function AboutPage() {
  return (
    <MainLayout>
      <Container maxW="container.md" py={8}>
        <VStack align="stretch" spacing={8}>
          <Box>
            <Heading as="h1" size="2xl" mb={6}>
              About Jai Keerthi
            </Heading>

            <VStack align="stretch" spacing={6} fontSize="lg" lineHeight="tall">
              <Text>
                I'm a Technology Head at{' '}
                <Link href="https://coducer.com" isExternal color="blue.600" textDecoration="underline">
                  Coducer Technologies
                </Link>
                , where I lead the development of AI-powered solutions and products. I specialize in AI Agents, Large Language Models (LLMs), Product Development, and Software Architecture.
              </Text>

              <Box>
                <Heading as="h2" size="lg" mb={4}>
                  Expertise
                </Heading>
                <VStack align="stretch" spacing={2} pl={4}>
                  <Text>• AI Agents & Large Language Models (LLMs)</Text>
                  <Text>• Full-Stack Product Development</Text>
                  <Text>• Software Architecture & System Design</Text>
                  <Text>• TypeScript, Node.js, Next.js, React, Python, Ruby on Rails</Text>
                  <Text>• Building scalable and maintainable software solutions</Text>
                </VStack>
              </Box>

              <Box>
                <Heading as="h2" size="lg" mb={4}>
                  Connect with Me
                </Heading>
                <Text mb={4}>
                  I'm active on various platforms where you can find my work and connect with me:
                </Text>
                <VStack align="stretch" spacing={3} pl={4}>
                  <HStack spacing={3}>
                    <Text fontWeight="semibold">GitHub:</Text>
                    <Link href="https://github.com/kjaikeerthi" isExternal color="blue.600" textDecoration="underline">
                      github.com/kjaikeerthi
                    </Link>
                  </HStack>
                  <HStack spacing={3}>
                    <Text fontWeight="semibold">LinkedIn:</Text>
                    <Link
                      href="https://linkedin.com/in/kjaikeerthi"
                      isExternal
                      color="blue.600"
                      textDecoration="underline"
                    >
                      linkedin.com/in/kjaikeerthi
                    </Link>
                  </HStack>
                  <HStack spacing={3}>
                    <Text fontWeight="semibold">Twitter/X:</Text>
                    <Link href="https://twitter.com/kjaikeerthi" isExternal color="blue.600" textDecoration="underline">
                      @kjaikeerthi
                    </Link>
                  </HStack>
                </VStack>
                <Box mt={4}>
                  <SocialLinks size={32} />
                </Box>
              </Box>

              <Box>
                <Heading as="h2" size="lg" mb={4}>
                  Contact
                </Heading>
                <VStack align="stretch" spacing={2} pl={4}>
                  <Text>
                    <strong>Email:</strong>{' '}
                    <Link href="mailto:haiiamjai@gmail.com" color="blue.600" textDecoration="underline">
                      haiiamjai@gmail.com
                    </Link>
                  </Text>
                  <Text>
                    <strong>Location:</strong> Bangalore, India
                  </Text>
                </VStack>
              </Box>

              <Box>
                <Text>
                  Feel free to reach out if you'd like to discuss AI, product development, or potential collaborations.
                  You can also check out my <Link href="/resume" color="blue.600" textDecoration="underline">resume</Link>{' '}
                  or read my <Link href="/blog" color="blue.600" textDecoration="underline">blog posts</Link>.
                </Text>
              </Box>
            </VStack>
          </Box>
        </VStack>
      </Container>
    </MainLayout>
  );
}

