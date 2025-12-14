'use client';

import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  useBreakpointValue,
  Badge,
  Link,
} from '@chakra-ui/react';

export default function TestChakraPage() {
  const headingSize = useBreakpointValue({ base: 'lg', md: 'xl', lg: '2xl' });

  return (
    <Container maxW="container.xl" py={8}>
      <VStack spacing={8} align="stretch">
        <Box>
          <Heading size={headingSize} mb={4}>
            Chakra UI Integration Test
          </Heading>
          <Text fontSize="lg" color="secondary.600">
            This page demonstrates various Chakra UI components with our custom theme.
          </Text>
        </Box>

        <Card>
          <CardHeader>
            <Heading size="md">Typography</Heading>
          </CardHeader>
          <CardBody>
            <VStack align="start" spacing={3}>
              <Heading size="xl">Heading XL</Heading>
              <Heading size="lg">Heading LG</Heading>
              <Heading size="md">Heading MD</Heading>
              <Heading size="sm">Heading SM</Heading>
              <Text fontSize="lg">Large Body Text</Text>
              <Text fontSize="md">Medium Body Text</Text>
              <Text fontSize="sm">Small Body Text</Text>
            </VStack>
          </CardBody>
        </Card>

        <Card>
          <CardHeader>
            <Heading size="md">Colors</Heading>
          </CardHeader>
          <CardBody>
            <VStack align="start" spacing={4}>
              <HStack spacing={3} wrap="wrap">
                <Badge colorScheme="blue" fontSize="md" px={3} py={1}>
                  Primary
                </Badge>
                <Badge colorScheme="gray" fontSize="md" px={3} py={1}>
                  Secondary
                </Badge>
                <Badge colorScheme="purple" fontSize="md" px={3} py={1}>
                  Accent
                </Badge>
              </HStack>
              <Box p={4} bg="primary.600" color="white" borderRadius="md">
                Primary Color Box
              </Box>
              <Box p={4} bg="secondary.100" color="secondary.900" borderRadius="md">
                Secondary Color Box
              </Box>
              <Box p={4} bg="accent.500" color="white" borderRadius="md">
                Accent Color Box
              </Box>
            </VStack>
          </CardBody>
        </Card>

        <Card>
          <CardHeader>
            <Heading size="md">Buttons</Heading>
          </CardHeader>
          <CardBody>
            <VStack align="start" spacing={4}>
              <HStack spacing={4} wrap="wrap">
                <Button variant="solid">Solid Button</Button>
                <Button variant="outline">Outline Button</Button>
                <Button variant="ghost">Ghost Button</Button>
                <Button variant="solid" isDisabled>
                  Disabled Button
                </Button>
              </HStack>
              <HStack spacing={4} wrap="wrap">
                <Button size="xs">Extra Small</Button>
                <Button size="sm">Small</Button>
                <Button size="md">Medium</Button>
                <Button size="lg">Large</Button>
              </HStack>
            </VStack>
          </CardBody>
        </Card>

        <Card>
          <CardHeader>
            <Heading size="md">Responsive Breakpoints</Heading>
          </CardHeader>
          <CardBody>
            <VStack align="start" spacing={3}>
              <Text>Current breakpoint size: {headingSize}</Text>
              <Text fontSize="sm" color="secondary.600">
                Resize your browser to see the heading size change based on breakpoints:
              </Text>
              <Box
                p={4}
                bg={{
                  base: 'accent.100',
                  sm: 'primary.100',
                  md: 'secondary.100',
                  lg: 'accent.100',
                }}
                borderRadius="md"
              >
                <Text>
                  <strong>Base:</strong> Accent background
                  <br />
                  <strong>SM (320px+):</strong> Primary background
                  <br />
                  <strong>MD (768px+):</strong> Secondary background
                  <br />
                  <strong>LG (1024px+):</strong> Accent background
                </Text>
              </Box>
            </VStack>
          </CardBody>
        </Card>

        <Card>
          <CardHeader>
            <Heading size="md">Links & Focus States</Heading>
          </CardHeader>
          <CardBody>
            <VStack align="start" spacing={3}>
              <Link href="#" color="primary.600">
                This is a styled link
              </Link>
              <Text fontSize="sm" color="secondary.600">
                Try tabbing through the buttons and links to see focus indicators.
              </Text>
            </VStack>
          </CardBody>
          <CardFooter>
            <Button as="a" href="/" variant="outline">
              Back to Home
            </Button>
          </CardFooter>
        </Card>
      </VStack>
    </Container>
  );
}
