'use client';

import React from 'react';
import {
  Box,
  Container,
  Flex,
  Text,
  Link as ChakraLink,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';
import Link from 'next/link';
import SocialLinks from './SocialLinks';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <Box
      as="footer"
      bg={bgColor}
      borderTop="1px"
      borderColor={borderColor}
      py={8}
      mt="auto"
    >
      <Container maxW="container.xl">
        <Stack
          direction={{ base: 'column', md: 'row' }}
          justify="space-between"
          align="center"
          spacing={4}
        >
          {/* Copyright */}
          <Text fontSize="sm" color="secondary.600" textAlign={{ base: 'center', md: 'left' }}>
            Copyright &copy; {currentYear} Jaikeerthi
          </Text>

          {/* Social Links - Mobile/Tablet */}
          <Box display={{ base: 'block', md: 'none' }}>
            <SocialLinks size={32} spacing={3} />
          </Box>

          {/* Credits */}
          <Flex
            gap={2}
            fontSize="sm"
            color="secondary.600"
            flexWrap="wrap"
            justify={{ base: 'center', md: 'flex-end' }}
            align="center"
          >
            <Text>Powered by</Text>
            <Link href="https://nextjs.org" passHref legacyBehavior>
              <ChakraLink
                color="primary.600"
                fontWeight="medium"
                isExternal
                _hover={{ textDecoration: 'underline' }}
                _focus={{
                  outline: '2px solid',
                  outlineColor: 'primary.500',
                  outlineOffset: '2px',
                  borderRadius: 'sm',
                }}
              >
                Next.js
              </ChakraLink>
            </Link>
            <Text>-</Text>
            <Link href="https://www.github.com" passHref legacyBehavior>
              <ChakraLink
                color="primary.600"
                fontWeight="medium"
                isExternal
                _hover={{ textDecoration: 'underline' }}
                _focus={{
                  outline: '2px solid',
                  outlineColor: 'primary.500',
                  outlineOffset: '2px',
                  borderRadius: 'sm',
                }}
              >
                GitHub
              </ChakraLink>
            </Link>
          </Flex>
        </Stack>
      </Container>
    </Box>
  );
}
