/**
 * Featured Projects component
 * Displays notable projects from resume data
 */

import { Box, Heading, SimpleGrid, VStack, Text, Card, CardBody, HStack, Badge, Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import { Project } from '@/data/resume';

interface FeaturedProjectsProps {
  projects: Array<Project & { company?: string }>;
}

/**
 * Featured Projects component
 * Displays project cards in a responsive grid
 */
export default function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  if (projects.length === 0) {
    return null;
  }

  return (
    <Box as="section" py={8}>
      <VStack align="stretch" spacing={6}>
        <Heading as="h2" size="xl" textAlign="center">
          Featured Projects
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
          {projects.map((project, index) => (
            <Card
              key={index}
              _hover={{
                transform: 'translateY(-4px)',
                boxShadow: 'xl',
              }}
              transition="all 0.2s"
            >
              <CardBody>
                <VStack align="stretch" spacing={3}>
                  <VStack align="flex-start" spacing={1}>
                    <Heading as="h3" size="md">
                      {project.title}
                    </Heading>
                    {project.company && (
                      <Text fontSize="sm" color="gray.600">
                        {project.company}
                      </Text>
                    )}
                  </VStack>
                  <Text fontSize="sm" color="gray.700" lineHeight="tall">
                    {project.description}
                  </Text>
                  {project.technologies.length > 0 && (
                    <HStack spacing={2} flexWrap="wrap">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <Badge key={techIndex} colorScheme="blue" fontSize="xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge colorScheme="gray" fontSize="xs">
                          +{project.technologies.length - 3} more
                        </Badge>
                      )}
                    </HStack>
                  )}
                  {project.url && (
                    <Link as={NextLink} href={project.url} isExternal color="blue.600" fontSize="sm" fontWeight="semibold">
                      Learn more →
                    </Link>
                  )}
                </VStack>
              </CardBody>
            </Card>
          ))}
        </SimpleGrid>
      </VStack>
    </Box>
  );
}

