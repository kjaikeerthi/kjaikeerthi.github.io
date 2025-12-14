'use client';

import React from 'react';
import { Box, Container, Flex } from '@chakra-ui/react';
import Header from '../Header';
import Footer from '../Footer';

interface MainLayoutProps {
  children: React.ReactNode;
  maxW?: string;
}

export default function MainLayout({ children, maxW = 'container.xl' }: MainLayoutProps) {
  return (
    <Flex direction="column" minH="100vh">
      <Header />
      <Box as="main" flex="1" py={8}>
        <Container maxW={maxW}>
          {children}
        </Container>
      </Box>
      <Footer />
    </Flex>
  );
}
