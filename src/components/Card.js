import { Box, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <div>
      <VStack 
      spacing={6} 
      color='black' 
      backgroundColor='white' 
      cursor='pointer' 
      borderRadius='xl'>

        <Image src={imageSrc} borderRadius='xl' width={'100%'} />
        <VStack spacing={3} p={3} alignItem='flex-start' >
          <HStack justifyContent='space-between' alignItems='center' >
            <Heading as='h3' size='md'>{title}</Heading>
          </HStack>
          <Box display='flex' textAlign='left'><Text color='#64748b' >{description}</Text></Box>
          <Box display='flex' textAlign='left'>
            <HStack justifyContent='left' alignItems='center' >
              <p>See more</p>
              <FontAwesomeIcon icon={faArrowRight} size="1x" />
            </HStack>
          </Box>
        </VStack>
      </VStack>
    </div>
  );
};

export default Card;
