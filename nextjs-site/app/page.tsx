/**
 * Homepage / Landing Page
 * Displays hero section, tech stack, featured projects, and recent blog posts
 */

import { VStack, Container } from '@chakra-ui/react';
import MainLayout from '@/components/layouts/MainLayout';
import HeroSection from '@/components/home/HeroSection';
import TechStack from '@/components/home/TechStack';
import FeaturedProjects from '@/components/home/FeaturedProjects';
import RecentPosts from '@/components/home/RecentPosts';
import { resumeData } from '@/data/resume';

export default function Home() {
  // Extract featured projects: PrimeCLM, JOFIN, Ascent IMDR, Al Arabia BMS
  const featuredProjects = resumeData.experience[0].projects
    .filter(
      (project) =>
        project.title.includes('PrimeCLM') ||
        project.title.includes('JOFIN') ||
        project.title.includes('Ascent IMDR') ||
        project.title.includes('Al Arabia BMS')
    )
    .map((project) => ({
      ...project,
      company: resumeData.experience[0].company,
    }))
    .slice(0, 4); // Limit to 4 projects

  return (
    <MainLayout>
      <Container maxW="container.xl" py={8}>
        <VStack spacing={12} align="stretch">
          <HeroSection name={resumeData.contactInfo.name} title={resumeData.contactInfo.title} />
          <TechStack />
          <FeaturedProjects projects={featuredProjects} />
          <RecentPosts />
        </VStack>
      </Container>
    </MainLayout>
  );
}
