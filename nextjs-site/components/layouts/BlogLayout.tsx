'use client';

import React from 'react';
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
  Flex,
  Grid,
  GridItem,
  useColorModeValue,
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import Link from 'next/link';
import Header from '../Header';
import Footer from '../Footer';

interface BlogLayoutProps {
  children: React.ReactNode;
  breadcrumbs?: Array<{ label: string; href?: string }>;
  sidebar?: React.ReactNode;
}

export default function BlogLayout({ children, breadcrumbs, sidebar }: BlogLayoutProps) {
  const bgColor = useColorModeValue('gray.50', 'gray.900');

  return (
    <Flex direction="column" minH="100vh">
      <Header />
      <Box as="main" flex="1" py={8} bg={bgColor}>
        <Container maxW="container.xl">
          {/* Breadcrumb Navigation */}
          {breadcrumbs && breadcrumbs.length > 0 && (
            <Breadcrumb
              spacing={2}
              separator={<ChevronRightIcon color="gray.500" />}
              mb={6}
              fontSize="sm"
            >
              {breadcrumbs.map((crumb, index) => (
                <BreadcrumbItem key={index} isCurrentPage={index === breadcrumbs.length - 1}>
                  {crumb.href ? (
                    <Link href={crumb.href} passHref legacyBehavior>
                      <BreadcrumbLink
                        color="primary.600"
                        _hover={{ textDecoration: 'underline' }}
                        _focus={{
                          outline: '2px solid',
                          outlineColor: 'primary.500',
                          outlineOffset: '2px',
                          borderRadius: 'sm',
                        }}
                      >
                        {crumb.label}
                      </BreadcrumbLink>
                    </Link>
                  ) : (
                    <BreadcrumbLink color="secondary.700">{crumb.label}</BreadcrumbLink>
                  )}
                </BreadcrumbItem>
              ))}
            </Breadcrumb>
          )}

          {/* Layout with optional sidebar */}
          <Grid
            templateColumns={{ base: '1fr', lg: sidebar ? '1fr 300px' : '1fr' }}
            gap={8}
          >
            {/* Main Content Area */}
            <GridItem>
              <Box
                bg="white"
                borderRadius="lg"
                p={{ base: 6, md: 8 }}
                shadow="sm"
                maxW={{ base: '100%', lg: sidebar ? '100%' : '700px' }}
                mx="auto"
              >
                {children}
              </Box>
            </GridItem>

            {/* Sidebar (Desktop only) */}
            {sidebar && (
              <GridItem display={{ base: 'none', lg: 'block' }}>
                <Box position="sticky" top="100px">
                  {sidebar}
                </Box>
              </GridItem>
            )}
          </Grid>
        </Container>
      </Box>
      <Footer />
    </Flex>
  );
}
