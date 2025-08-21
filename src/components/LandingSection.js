import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Julio!";
const bio1 = "Meta Full Stack Developer Certification";
const bio2 = "Learning React through Meta and Coursera";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={4}>
     <Avatar
  name="Julio Kock"
  src="/julio-cesar-do-amaral-kock-foto-profissional-2024.jpeg"
  boxSize="140px"   // ajusta aqui (~40% maior que 100px padrão do "lg")
/>
      <Heading as="h1" size="lg">
        {greeting}
      </Heading>
      <Heading as="h2" size="md">
        {bio1}
      </Heading>
      <Heading as="h3" size="sm">
        {bio2}
      </Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;