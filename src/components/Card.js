import { Box, Image, Heading, VStack } from "@chakra-ui/react";

export default function Card({ title, description, imageSrc }) {
  return (
    <Box bg="white" borderRadius="md" overflow="hidden" boxShadow="md">
      <Image src={imageSrc} alt={title} w="100%" h="200px" objectFit="cover" />
      <VStack align="start" spacing={2} p={4}>
        <Heading as="h3" size="md">{title}</Heading>
      </VStack>
    </Box>
  );
}