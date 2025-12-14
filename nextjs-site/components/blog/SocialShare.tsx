/**
 * Social Sharing component
 * Provides share buttons for Twitter, LinkedIn, and Facebook
 */

'use client';

import { Box, HStack, IconButton, Tooltip, VStack, Text } from '@chakra-ui/react';
import { FaTwitter, FaLinkedin, FaFacebook } from 'react-icons/fa';

interface SocialShareProps {
  title: string;
  url: string;
  description?: string;
}

/**
 * Social sharing buttons component
 * Generates share URLs for Twitter, LinkedIn, and Facebook
 */
export default function SocialShare({ title, url, description }: SocialShareProps) {
  // Ensure URL is absolute
  const absoluteUrl = url.startsWith('http') ? url : `https://jaikeerthi.in${url}`;
  const shareText = description || title;

  const shareUrls = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(absoluteUrl)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(absoluteUrl)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(absoluteUrl)}`,
  };

  const handleShare = (platform: 'twitter' | 'linkedin' | 'facebook') => {
    const shareUrl = shareUrls[platform];
    window.open(shareUrl, '_blank', 'width=600,height=400,scrollbars=yes,resizable=yes');
  };

  return (
    <Box mt={8} pt={8} borderTop="1px" borderColor="gray.200">
      <VStack align="stretch" spacing={3}>
        <Text fontSize="sm" fontWeight="semibold" color="gray.600">
          Share this post
        </Text>
        <HStack spacing={3}>
          <Tooltip label="Share on Twitter" hasArrow>
            <IconButton
              aria-label="Share on Twitter"
              icon={<FaTwitter />}
              onClick={() => handleShare('twitter')}
              colorScheme="twitter"
              variant="outline"
              size="md"
            />
          </Tooltip>
          <Tooltip label="Share on LinkedIn" hasArrow>
            <IconButton
              aria-label="Share on LinkedIn"
              icon={<FaLinkedin />}
              onClick={() => handleShare('linkedin')}
              colorScheme="linkedin"
              variant="outline"
              size="md"
            />
          </Tooltip>
          <Tooltip label="Share on Facebook" hasArrow>
            <IconButton
              aria-label="Share on Facebook"
              icon={<FaFacebook />}
              onClick={() => handleShare('facebook')}
              colorScheme="facebook"
              variant="outline"
              size="md"
            />
          </Tooltip>
        </HStack>
      </VStack>
    </Box>
  );
}

