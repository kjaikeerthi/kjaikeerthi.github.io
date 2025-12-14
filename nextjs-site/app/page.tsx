import { Heading, Text, VStack } from '@chakra-ui/react';
import MainLayout from '@/components/layouts/MainLayout';

export default function Home() {
  return (
    <MainLayout>
      <VStack spacing={8} align="stretch">
        <Heading as="h1" size="2xl" textAlign="center">
          Welcome to Jai Keerthi&apos;s Portfolio
        </Heading>
        <Text fontSize="lg" textAlign="center">
          AI Agents / LLM / Product / Architect
        </Text>
        <Text textAlign="center" color="secondary.600">
          This is a placeholder homepage. The full homepage will be implemented in Task Group 8.
        </Text>
      </VStack>
    </MainLayout>
  );
}
