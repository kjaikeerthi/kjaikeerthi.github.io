'use client';

import React from 'react';
import { HStack, Link } from '@chakra-ui/react';
import Image from 'next/image';

interface SocialLinksProps {
  size?: number;
  spacing?: number;
}

const socialMediaLinks = [
  {
    name: 'GitHub',
    url: 'https://www.github.com/kjaikeerthi',
    icon: '/images/github.png',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/kjaikeerthi/',
    icon: '/images/linkedin.png',
  },
  {
    name: 'Twitter',
    url: 'https://www.twitter.com/kjaikeerthi',
    icon: '/images/twitter-x.png',
  },
];

export default function SocialLinks({ size = 32, spacing = 2 }: SocialLinksProps) {
  return (
    <HStack spacing={spacing}>
      {socialMediaLinks.map((social) => (
        <Link
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit ${social.name} profile`}
          transition="transform 0.2s, opacity 0.2s"
          _hover={{
            transform: 'scale(1.1)',
            opacity: 0.8,
          }}
          _focus={{
            outline: '2px solid',
            outlineColor: 'primary.500',
            outlineOffset: '2px',
            borderRadius: 'sm',
          }}
        >
          <Image
            src={social.icon}
            alt={`${social.name} icon`}
            width={size}
            height={size}
            style={{ display: 'block' }}
          />
        </Link>
      ))}
    </HStack>
  );
}
