/**
 * Enhanced code block component with syntax highlighting and copy functionality
 * Uses Shiki for syntax highlighting
 */

'use client';

import { Box, Button, Code, HStack, Text, useToast } from '@chakra-ui/react';
import { CopyIcon, CheckIcon } from '@chakra-ui/icons';
import { useEffect, useState, useRef } from 'react';
import { codeToHtml } from 'shiki';

interface CodeBlockProps {
  children?: string;
  className?: string;
  [key: string]: unknown;
}

/**
 * Extract language from className (e.g., "language-js" -> "js")
 */
function getLanguageFromClassName(className?: string): string {
  if (!className) return 'text';
  const match = className.match(/language-(\w+)/);
  return match ? match[1] : 'text';
}

/**
 * Code block component with syntax highlighting and copy button
 */
export default function CodeBlock({ children, className, ...props }: CodeBlockProps) {
  const [highlightedCode, setHighlightedCode] = useState<string>('');
  const [isCopied, setIsCopied] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const codeRef = useRef<HTMLDivElement>(null);
  const toast = useToast();

  const codeString = typeof children === 'string' ? children : String(children || '');
  const language = getLanguageFromClassName(className);

  useEffect(() => {
    let isMounted = true;

    async function highlightCode() {
      try {
        setIsLoading(true);
        // Use shiki to highlight code
        const html = await codeToHtml(codeString, {
          lang: language,
          theme: 'github-light', // Light theme, can be customized
        });
        if (isMounted) {
          setHighlightedCode(html);
          setIsLoading(false);
        }
      } catch (error) {
        console.error('Error highlighting code:', error);
        // Fallback to plain code if highlighting fails
        if (isMounted) {
          setHighlightedCode(codeString);
          setIsLoading(false);
        }
      }
    }

    if (codeString) {
      highlightCode();
    }

    return () => {
      isMounted = false;
    };
  }, [codeString, language]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(codeString);
      setIsCopied(true);
      toast({
        title: 'Copied!',
        description: 'Code copied to clipboard',
        status: 'success',
        duration: 2000,
        isClosable: true,
      });

      // Reset copy state after 3 seconds
      setTimeout(() => {
        setIsCopied(false);
      }, 3000);
    } catch (error) {
      console.error('Failed to copy code:', error);
      toast({
        title: 'Failed to copy',
        description: 'Could not copy code to clipboard',
        status: 'error',
        duration: 2000,
        isClosable: true,
      });
    }
  };

  return (
    <Box
      position="relative"
      my={4}
      borderRadius="md"
      overflow="hidden"
      border="1px"
      borderColor="gray.200"
      bg="gray.50"
      _dark={{
        bg: 'gray.800',
        borderColor: 'gray.700',
      }}
      {...props}
    >
      {/* Header bar with language label and copy button */}
      <HStack
        justify="space-between"
        px={4}
        py={2}
        bg="gray.100"
        borderBottom="1px"
        borderColor="gray.200"
        _dark={{
          bg: 'gray.700',
          borderColor: 'gray.600',
        }}
      >
        <Text fontSize="xs" color="gray.600" fontWeight="semibold" textTransform="uppercase">
          {language}
        </Text>
        <Button
          size="xs"
          leftIcon={isCopied ? <CheckIcon /> : <CopyIcon />}
          onClick={handleCopy}
          colorScheme={isCopied ? 'green' : 'gray'}
          variant="ghost"
          aria-label="Copy code"
        >
          {isCopied ? 'Copied!' : 'Copy'}
        </Button>
      </HStack>

      {/* Code content */}
      <Box
        ref={codeRef}
        overflowX="auto"
        p={4}
        fontSize="sm"
        lineHeight="tall"
        css={{
          '& pre': {
            margin: 0,
            padding: 0,
            background: 'transparent',
            fontFamily: 'mono',
          },
          '& code': {
            fontFamily: 'mono',
          },
        }}
      >
        {isLoading ? (
          <Code display="block" whiteSpace="pre" bg="transparent" p={0} fontFamily="mono">
            {codeString}
          </Code>
        ) : (
          <div dangerouslySetInnerHTML={{ __html: highlightedCode }} />
        )}
      </Box>
    </Box>
  );
}

