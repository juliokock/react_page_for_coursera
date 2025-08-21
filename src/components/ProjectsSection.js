import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "ROAS Calculator",
    description: "Roas Calculator",
    imageSrc: "/projects/photo1.jpg",
  },
  {
    title: "Miniatures",
    description: "Miniatures.",
    imageSrc: "/projects/photo2.jpg",
  },
  {
    title: "City at sunshine",
    description: "City at sunshine",
    imageSrc: "/projects/photo3.jpg",
  },
  {
    title: "Rocks and more rocks",
    description: "Rocks and more rocks",
    imageSrc: "/projects/photo4.jpg",
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#fffffff"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section" color="black">
  Featured Projects
</Heading>

<Box
  display="grid"
  gridTemplateColumns="repeat(2,minmax(0,1fr))"
  gridGap={8}
  color="black" 
>
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.imageSrc}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;