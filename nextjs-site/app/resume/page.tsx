'use client';

import React, { useState } from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Stack,
  Link,
  UnorderedList,
  ListItem,
  Divider,
  Button,
  useColorModeValue,
  Flex,
  useToast,
} from '@chakra-ui/react';
import { ExternalLinkIcon, DownloadIcon } from '@chakra-ui/icons';
import { resumeData } from '@/data/resume';
import { pdf } from '@react-pdf/renderer';
import { ResumePDF } from '@/lib/generateResumePDF';

export default function ResumePage() {
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const headingColor = useColorModeValue('gray.800', 'white');
  const textColor = useColorModeValue('gray.600', 'gray.300');
  const toast = useToast();

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPDF = async () => {
    try {
      setIsGeneratingPDF(true);

      // Generate PDF blob
      const blob = await pdf(<ResumePDF data={resumeData} />).toBlob();

      // Create download link
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${resumeData.contactInfo.name.replace(/\s+/g, '_')}_Resume.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Clean up
      URL.revokeObjectURL(url);

      toast({
        title: 'PDF Downloaded',
        description: 'Your resume has been downloaded successfully.',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      console.error('Error generating PDF:', error);
      toast({
        title: 'PDF Generation Failed',
        description: 'There was an error generating the PDF. Please try again.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  return (
    <Container maxW="container.xl" py={8}>
      <VStack spacing={8} align="stretch">
        {/* Action Buttons - Hidden on print */}
        <Flex
          gap={4}
          justify="flex-end"
          className="no-print"
          display={{ base: 'flex', print: 'none' }}
        >
          <Button
            leftIcon={<DownloadIcon />}
            colorScheme="blue"
            onClick={handleDownloadPDF}
            size={{ base: 'sm', md: 'md' }}
            isLoading={isGeneratingPDF}
            loadingText="Generating PDF"
          >
            Download PDF
          </Button>
          <Button
            variant="outline"
            colorScheme="blue"
            onClick={handlePrint}
            size={{ base: 'sm', md: 'md' }}
          >
            Print
          </Button>
        </Flex>

        {/* Header Section */}
        <Box
          bg={bgColor}
          p={{ base: 6, md: 8 }}
          borderRadius="lg"
          borderWidth="1px"
          borderColor={borderColor}
        >
          <VStack spacing={4} align="stretch">
            <Heading as="h1" size="2xl" color={headingColor}>
              {resumeData.contactInfo.name}
            </Heading>
            <Text fontSize="xl" color={textColor} fontWeight="medium">
              {resumeData.contactInfo.title}
            </Text>
            <Stack
              direction={{ base: 'column', md: 'row' }}
              spacing={{ base: 2, md: 6 }}
              fontSize="sm"
              color={textColor}
            >
              <HStack>
                <Text fontWeight="semibold">Email:</Text>
                <Link href={`mailto:${resumeData.contactInfo.email}`}>
                  {resumeData.contactInfo.email}
                </Link>
              </HStack>
              {resumeData.contactInfo.mobile && (
                <HStack>
                  <Text fontWeight="semibold">Mobile:</Text>
                  <Text>{resumeData.contactInfo.mobile}</Text>
                </HStack>
              )}
              <HStack>
                <Text fontWeight="semibold">Location:</Text>
                <Text>{resumeData.contactInfo.location}</Text>
              </HStack>
            </Stack>
          </VStack>
        </Box>

        {/* Technical Expertise Section */}
        <Box>
          <Heading as="h2" size="lg" mb={4} color={headingColor}>
            Technical Expertise
          </Heading>
          <Divider mb={4} />
          <VStack spacing={3} align="stretch">
            {resumeData.technicalExpertise.map((expertise, index) => (
              <HStack key={index} align="flex-start" spacing={3}>
                <Text fontWeight="bold" minW="180px" color={headingColor}>
                  {expertise.category}:
                </Text>
                <Text color={textColor}>{expertise.skills.join(', ')}</Text>
              </HStack>
            ))}
          </VStack>
        </Box>

        {/* Professional Experience Section */}
        <Box>
          <Heading as="h2" size="lg" mb={4} color={headingColor}>
            Professional Experience
          </Heading>
          <Divider mb={6} />
          <VStack spacing={8} align="stretch">
            {resumeData.experience.map((exp, expIndex) => (
              <Box key={expIndex}>
                <Flex
                  justify="space-between"
                  align={{ base: 'flex-start', md: 'center' }}
                  direction={{ base: 'column', md: 'row' }}
                  mb={4}
                >
                  <Box>
                    <Heading as="h3" size="md" color={headingColor}>
                      {exp.role}
                    </Heading>
                    <Text fontWeight="semibold" color={textColor}>
                      {exp.company}
                    </Text>
                  </Box>
                  <Text
                    fontSize="sm"
                    color={textColor}
                    whiteSpace="nowrap"
                    mt={{ base: 1, md: 0 }}
                  >
                    {exp.startDate} - {exp.endDate}
                  </Text>
                </Flex>

                <UnorderedList spacing={4} pl={0} styleType="none">
                  {exp.projects.map((project, projIndex) => (
                    <ListItem key={projIndex}>
                      <VStack align="stretch" spacing={2}>
                        <Heading as="h4" size="sm" color={headingColor}>
                          {project.url ? (
                            <Link href={project.url} isExternal>
                              {project.title} <ExternalLinkIcon mx={1} />
                            </Link>
                          ) : (
                            project.title
                          )}
                        </Heading>
                        <Text color={textColor}>{project.description}</Text>
                        <Box>
                          <Text
                            fontSize="sm"
                            fontWeight="semibold"
                            color={textColor}
                          >
                            Technology used:
                          </Text>
                          <UnorderedList spacing={1} pl={6}>
                            {project.technologies.map((tech, techIndex) => (
                              <ListItem
                                key={techIndex}
                                fontSize="sm"
                                color={textColor}
                              >
                                {tech}
                              </ListItem>
                            ))}
                          </UnorderedList>
                        </Box>
                      </VStack>
                    </ListItem>
                  ))}
                </UnorderedList>
              </Box>
            ))}
          </VStack>
        </Box>

        {/* Education Section */}
        <Box>
          <Heading as="h2" size="lg" mb={4} color={headingColor}>
            Educational Qualification
          </Heading>
          <Divider mb={4} />
          <Flex
            justify="space-between"
            align={{ base: 'flex-start', md: 'center' }}
            direction={{ base: 'column', md: 'row' }}
            mb={2}
          >
            <Heading as="h3" size="md" color={headingColor}>
              {resumeData.education.degree}
            </Heading>
            <Text
              fontSize="sm"
              color={textColor}
              whiteSpace="nowrap"
              mt={{ base: 1, md: 0 }}
            >
              {resumeData.education.startDate} - {resumeData.education.endDate}
            </Text>
          </Flex>
          <VStack align="stretch" spacing={1}>
            <Text color={textColor}>
              Completed {resumeData.education.field} from,
            </Text>
            <Text color={textColor}>{resumeData.education.institution},</Text>
            <Text color={textColor}>{resumeData.education.location}</Text>
          </VStack>
        </Box>

        {/* Additional Links Section */}
        <Box>
          <Heading as="h2" size="lg" mb={4} color={headingColor}>
            Additional Links
          </Heading>
          <Divider mb={4} />
          <Stack
            direction={{ base: 'column', md: 'row' }}
            spacing={4}
            flexWrap="wrap"
          >
            <HStack>
              <Text fontWeight="semibold" color={headingColor}>
                GitHub:
              </Text>
              <Link
                href={resumeData.contactInfo.socialLinks.github}
                isExternal
                color="blue.500"
              >
                {resumeData.contactInfo.socialLinks.github}{' '}
                <ExternalLinkIcon mx={1} />
              </Link>
            </HStack>
            <HStack>
              <Text fontWeight="semibold" color={headingColor}>
                Twitter:
              </Text>
              <Link
                href={resumeData.contactInfo.socialLinks.twitter}
                isExternal
                color="blue.500"
              >
                {resumeData.contactInfo.socialLinks.twitter}{' '}
                <ExternalLinkIcon mx={1} />
              </Link>
            </HStack>
            <HStack>
              <Text fontWeight="semibold" color={headingColor}>
                LinkedIn:
              </Text>
              <Link
                href={resumeData.contactInfo.socialLinks.linkedin}
                isExternal
                color="blue.500"
              >
                {resumeData.contactInfo.socialLinks.linkedin}{' '}
                <ExternalLinkIcon mx={1} />
              </Link>
            </HStack>
          </Stack>
        </Box>
      </VStack>
    </Container>
  );
}
