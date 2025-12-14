/**
 * Table of Contents component for blog posts
 * Generates TOC from headings (h2, h3) in the blog post content
 */

'use client';

import { Box, List, ListItem, Link, Heading, VStack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  headings?: TOCItem[];
}

/**
 * Generate TOC items from the current page's headings
 */
function extractHeadingsFromPage(): TOCItem[] {
  if (typeof window === 'undefined') return [];

  const headings = Array.from(document.querySelectorAll('article h2, article h3, .blog-content h2, .blog-content h3'));
  return headings
    .map((heading) => {
      const id = heading.id || heading.textContent?.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '') || '';
      return {
        id,
        text: heading.textContent || '',
        level: parseInt(heading.tagName.charAt(1), 10), // Extract number from h2, h3, etc.
      };
    })
    .filter((item) => item.id && item.text);
}

/**
 * Table of Contents component
 * Displays a navigable list of headings from the blog post
 */
export default function TableOfContents({ headings: propHeadings }: TableOfContentsProps) {
  const [headings, setHeadings] = useState<TOCItem[]>(propHeadings || []);
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    // Extract headings from the page if not provided as props
    if (!propHeadings && typeof window !== 'undefined') {
      // Wait for content to be rendered
      const timer = setTimeout(() => {
        const extractedHeadings = extractHeadingsFromPage();
        setHeadings(extractedHeadings);
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [propHeadings]);

  useEffect(() => {
    if (typeof window === 'undefined' || headings.length === 0) return;

    // Set up intersection observer to highlight active section
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-100px 0px -66%',
        threshold: [0, 0.5, 1],
      }
    );

    headings.forEach((heading) => {
      const element = document.getElementById(heading.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      headings.forEach((heading) => {
        const element = document.getElementById(heading.id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [headings]);

  const handleClick = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Account for sticky header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });

      // Update URL hash without triggering scroll
      window.history.pushState(null, '', `#${id}`);
    }
  };

  if (headings.length === 0) {
    return null;
  }

  return (
    <Box
      as="nav"
      aria-label="Table of contents"
      position={{ base: 'relative', lg: 'sticky' }}
      top={{ lg: '100px' }}
      alignSelf="flex-start"
      w={{ base: '100%', lg: '250px' }}
      mb={{ base: 8, lg: 0 }}
    >
      <VStack align="stretch" spacing={4}>
        <Heading as="h2" size="md" mb={2}>
          Table of Contents
        </Heading>
        <List spacing={2} styleType="none">
          {headings.map((heading) => (
            <ListItem key={heading.id} pl={heading.level === 3 ? 4 : 0}>
              <Link
                href={`#${heading.id}`}
                onClick={(e) => handleClick(heading.id, e)}
                fontSize="sm"
                color={activeId === heading.id ? 'blue.600' : 'gray.600'}
                fontWeight={activeId === heading.id ? 'semibold' : 'normal'}
                textDecoration={activeId === heading.id ? 'underline' : 'none'}
                _hover={{
                  color: 'blue.600',
                  textDecoration: 'underline',
                }}
                display="block"
                py={1}
                transition="all 0.2s"
              >
                {heading.text}
              </Link>
            </ListItem>
          ))}
        </List>
      </VStack>
    </Box>
  );
}

