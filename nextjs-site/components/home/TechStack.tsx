/**
 * Tech Stack component
 * Displays technology icons in a grid layout
 */

import { Box, Heading, SimpleGrid, VStack, Text, Tooltip, Image } from '@chakra-ui/react';

interface TechItem {
  name: string;
  icon?: string; // For now, we'll use text labels. Icons can be added later
}

const techStack: TechItem[] = [
  { name: 'TypeScript' },
  { name: 'Node.js' },
  { name: 'Next.js' },
  { name: 'React' },
  { name: 'Python' },
  { name: 'Ruby on Rails' },
  { name: 'Nest.js' },
  { name: 'FastAPI' },
  { name: 'LLM/AI' },
];

/**
 * Tech Stack component
 * Displays technology icons in a responsive grid
 */
export default function TechStack() {
  return (
    <Box as="section" py={8}>
      <VStack align="stretch" spacing={6}>
        <Heading as="h2" size="xl" textAlign="center">
          Technologies
        </Heading>
        <SimpleGrid columns={{ base: 3, sm: 4, md: 5, lg: 6 }} spacing={6}>
          {techStack.map((tech) => (
            <Tooltip key={tech.name} label={tech.name} hasArrow placement="top">
              <VStack
                spacing={2}
                p={4}
                borderRadius="lg"
                border="1px"
                borderColor="gray.200"
                bg="white"
                _hover={{
                  transform: 'translateY(-4px)',
                  boxShadow: 'md',
                  borderColor: 'blue.300',
                }}
                transition="all 0.2s"
                cursor="default"
              >
                <Box
                  w={12}
                  h={12}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  fontSize="2xl"
                  fontWeight="bold"
                  color="blue.600"
                >
                  {tech.icon || tech.name.charAt(0)}
                </Box>
                <Text fontSize="sm" fontWeight="medium" textAlign="center">
                  {tech.name}
                </Text>
              </VStack>
            </Tooltip>
          ))}
        </SimpleGrid>
      </VStack>
    </Box>
  );
}

