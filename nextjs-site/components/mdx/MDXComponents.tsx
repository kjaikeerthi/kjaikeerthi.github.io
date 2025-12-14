/**
 * Custom MDX components for blog post rendering
 * Provides enhanced styling and functionality for markdown elements
 */

import { Box, Heading, Text, Link, Code, Image, UnorderedList, OrderedList, ListItem, Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';
import NextLink from 'next/link';
import NextImage from 'next/image';
import { ReactNode } from 'react';

interface MDXComponentProps {
  children?: ReactNode;
  id?: string;
  href?: string;
  src?: string;
  alt?: string;
  [key: string]: unknown;
}

/**
 * Custom heading components with anchor links
 */
const createHeading = (level: 1 | 2 | 3 | 4 | 5 | 6) => {
  const sizes: Record<number, string> = {
    1: '2xl',
    2: 'xl',
    3: 'lg',
    4: 'md',
    5: 'sm',
    6: 'xs',
  };

  return function CustomHeading({ children, id, ...props }: MDXComponentProps) {
    return (
      <Heading
        as={`h${level}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'}
        size={sizes[level]}
        mt={level === 1 ? 0 : 8}
        mb={4}
        id={id}
        scrollMarginTop="100px"
        _hover={{
          '&::before': {
            content: '"#"',
            position: 'absolute',
            marginLeft: '-1.2em',
            color: 'blue.500',
            opacity: 0.8,
          },
        }}
        {...props}
      >
        {children}
      </Heading>
    );
  };
};

/**
 * Custom link component with external link handling
 */
function CustomLink({ href, children, ...props }: MDXComponentProps) {
  const isExternal = href?.startsWith('http') || href?.startsWith('//');
  const isAnchor = href?.startsWith('#');

  if (isExternal) {
    return (
      <Link
        href={href}
        isExternal
        color="blue.600"
        textDecoration="underline"
        _hover={{ color: 'blue.800' }}
        {...props}
      >
        {children}
      </Link>
    );
  }

  if (isAnchor) {
    return (
      <Link
        href={href}
        color="blue.600"
        textDecoration="underline"
        _hover={{ color: 'blue.800' }}
        {...props}
      >
        {children}
      </Link>
    );
  }

  return (
    <Link
      as={NextLink}
      href={href || '#'}
      color="blue.600"
      textDecoration="underline"
      _hover={{ color: 'blue.800' }}
      {...props}
    >
      {children}
    </Link>
  );
}

/**
 * Custom image component using Next.js Image
 */
function CustomImage({ src, alt, ...props }: MDXComponentProps) {
  // For external images or when dimensions are unknown, use standard img
  if (src?.startsWith('http') || src?.startsWith('//')) {
    return (
      <Box my={4}>
        <Image
          src={src}
          alt={alt || ''}
          maxW="100%"
          height="auto"
          borderRadius="md"
          {...props}
        />
      </Box>
    );
  }

  // For local images, use Next.js Image (requires dimensions)
  return (
    <Box my={4} position="relative" width="100%" height="auto">
      <Image
        src={src || ''}
        alt={alt || ''}
        maxW="100%"
        height="auto"
        borderRadius="md"
        {...props}
      />
    </Box>
  );
}

/**
 * Custom code block component (basic version, enhanced in Group 6)
 */
function CustomCode({ children, className, ...props }: MDXComponentProps) {
  const isInline = !className;

  if (isInline) {
    return (
      <Code
        colorScheme="gray"
        px={2}
        py={1}
        borderRadius="md"
        fontSize="0.9em"
        {...props}
      >
        {children}
      </Code>
    );
  }

  // Code blocks will be enhanced in Group 6 with syntax highlighting
  return (
    <Box
      as="pre"
      p={4}
      bg="gray.50"
      borderRadius="md"
      overflowX="auto"
      my={4}
      border="1px"
      borderColor="gray.200"
      {...props}
    >
      <Code
        display="block"
        whiteSpace="pre"
        bg="transparent"
        p={0}
        fontSize="0.9em"
        fontFamily="mono"
      >
        {children}
      </Code>
    </Box>
  );
}

/**
 * Custom blockquote component
 */
function CustomBlockquote({ children, ...props }: MDXComponentProps) {
  return (
    <Box
      as="blockquote"
      borderLeftWidth="4px"
      borderLeftColor="blue.500"
      pl={4}
      py={2}
      my={4}
      fontStyle="italic"
      color="gray.700"
      bg="blue.50"
      borderRadius="md"
      {...props}
    >
      {children}
    </Box>
  );
}

/**
 * Custom paragraph component
 */
function CustomParagraph({ children, ...props }: MDXComponentProps) {
  return (
    <Text mb={4} lineHeight="tall" {...props}>
      {children}
    </Text>
  );
}

/**
 * Custom list components
 */
function CustomUnorderedList({ children, ...props }: MDXComponentProps) {
  return (
    <UnorderedList spacing={2} mb={4} pl={6} {...props}>
      {children}
    </UnorderedList>
  );
}

function CustomOrderedList({ children, ...props }: MDXComponentProps) {
  return (
    <OrderedList spacing={2} mb={4} pl={6} {...props}>
      {children}
    </OrderedList>
  );
}

function CustomListItem({ children, ...props }: MDXComponentProps) {
  return (
    <ListItem lineHeight="tall" {...props}>
      {children}
    </ListItem>
  );
}

/**
 * Custom table components
 */
function CustomTable({ children, ...props }: MDXComponentProps) {
  return (
    <Box overflowX="auto" my={4}>
      <Table variant="simple" size="sm" {...props}>
        {children}
      </Table>
    </Box>
  );
}

/**
 * Export all custom MDX components
 */
export const MDXComponents = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  p: CustomParagraph,
  a: CustomLink,
  img: CustomImage,
  code: CustomCode,
  pre: ({ children }: MDXComponentProps) => <>{children}</>,
  blockquote: CustomBlockquote,
  ul: CustomUnorderedList,
  ol: CustomOrderedList,
  li: CustomListItem,
  table: CustomTable,
  thead: Thead,
  tbody: Tbody,
  tr: Tr,
  th: Th,
  td: Td,
};

export default MDXComponents;
