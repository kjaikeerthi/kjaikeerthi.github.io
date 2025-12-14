'use client';

import React, { useEffect } from 'react';
import {
  Box,
  Container,
  Flex,
  Heading,
  HStack,
  IconButton,
  Link as ChakraLink,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import SocialLinks from './SocialLinks';

const navigationLinks = [
  { name: 'Home', href: '/' },
  { name: 'Blog', href: '/blog' },
  { name: 'About', href: '/about' },
  { name: 'Resume', href: '/resume' },
];

export default function Header() {
  const pathname = usePathname();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const shadowColor = useColorModeValue('sm', 'dark-lg');

  // Close mobile menu on route change
  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  const isActiveRoute = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname?.startsWith(href);
  };

  return (
    <Box
      as="header"
      position="sticky"
      top={0}
      zIndex={10}
      bg={bgColor}
      borderBottom="1px"
      borderColor={borderColor}
      shadow={shadowColor}
      transition="box-shadow 0.2s"
    >
      <Container maxW="container.xl" py={4}>
        <Flex justify="space-between" align="center">
          {/* Site Title/Logo */}
          <Link href="/" passHref legacyBehavior>
            <ChakraLink
              _hover={{ textDecoration: 'none' }}
              _focus={{
                outline: '2px solid',
                outlineColor: 'primary.500',
                outlineOffset: '2px',
                borderRadius: 'sm',
              }}
            >
              <Heading
                as="h1"
                size="lg"
                color="primary.600"
                fontWeight="bold"
              >
                Jai Keerthi
              </Heading>
            </ChakraLink>
          </Link>

          {/* Desktop Navigation */}
          <HStack spacing={8} display={{ base: 'none', md: 'flex' }}>
            {navigationLinks.map((link) => (
              <Link key={link.href} href={link.href} passHref legacyBehavior>
                <ChakraLink
                  fontWeight={isActiveRoute(link.href) ? 'bold' : 'medium'}
                  color={isActiveRoute(link.href) ? 'primary.600' : 'secondary.700'}
                  borderBottom={isActiveRoute(link.href) ? '2px solid' : 'none'}
                  borderColor="primary.600"
                  pb={1}
                  _hover={{
                    color: 'primary.600',
                    textDecoration: 'none',
                  }}
                  _focus={{
                    outline: '2px solid',
                    outlineColor: 'primary.500',
                    outlineOffset: '2px',
                    borderRadius: 'sm',
                  }}
                >
                  {link.name}
                </ChakraLink>
              </Link>
            ))}
          </HStack>

          {/* Social Links - Desktop */}
          <Box display={{ base: 'none', md: 'block' }}>
            <SocialLinks size={32} spacing={2} />
          </Box>

          {/* Mobile Menu Button */}
          <IconButton
            aria-label="Open navigation menu"
            icon={<HamburgerIcon boxSize={6} />}
            variant="ghost"
            display={{ base: 'flex', md: 'none' }}
            onClick={onOpen}
            size="lg"
            minW="44px"
            minH="44px"
          />
        </Flex>
      </Container>

      {/* Mobile Navigation Drawer */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton
            size="lg"
            minW="44px"
            minH="44px"
          />
          <DrawerHeader borderBottomWidth="1px">Menu</DrawerHeader>
          <DrawerBody>
            <VStack spacing={4} align="stretch" mt={4}>
              {navigationLinks.map((link) => (
                <Link key={link.href} href={link.href} passHref legacyBehavior>
                  <ChakraLink
                    py={3}
                    px={4}
                    borderRadius="md"
                    fontWeight={isActiveRoute(link.href) ? 'bold' : 'medium'}
                    color={isActiveRoute(link.href) ? 'primary.600' : 'secondary.700'}
                    bg={isActiveRoute(link.href) ? 'primary.50' : 'transparent'}
                    _hover={{
                      bg: 'primary.50',
                      color: 'primary.600',
                      textDecoration: 'none',
                    }}
                    _focus={{
                      outline: '2px solid',
                      outlineColor: 'primary.500',
                      outlineOffset: '2px',
                      borderRadius: 'sm',
                    }}
                    minH="44px"
                    display="flex"
                    alignItems="center"
                  >
                    {link.name}
                  </ChakraLink>
                </Link>
              ))}

              {/* Social Links in Mobile Menu */}
              <Box pt={6} borderTop="1px" borderColor={borderColor}>
                <SocialLinks size={32} spacing={4} />
              </Box>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
