import { Flex, Grid, Image, Box, Link, Text, Button } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import React, { useRef } from "react";
import "../index.css";

export default function Portfolio() {

    const scrollContainerRef = useRef(null);

    const handleNextClick = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollLeft += 300; 
        }
    };

    const handleBackClick = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollLeft -= 300; 
        }
    };

  return (
    <>
      <Flex bgColor={"#B9B4C7"} w={"100%"} height={"50vh"} flexDir={"column"}>
        <Text display={{ base: "block", md: "none" }}
          textAlign="left"
          fontSize={["x-large", "xx-large"]}
          fontWeight={900}
          color={"white"}
          paddingX={[8, 20]}
          marginTop={10}
        >
          FEATURED PROJECTS
        </Text> 

<Button
        display={{ base: "none", md: "flex" }}
          width={["25%"]}
          borderRadius={30}
          marginLeft={[4, 10]}
          marginBottom={[4, 0]}
          bgColor={"white"}
          color={"#5C5470"}
          marginTop={10}
        >
          <Text marginRight={3} fontSize={["small", "large"]}>
            FEATURED PROJECTS
          </Text>
          <ExternalLinkIcon />
        </Button>

        <Flex
          className="gallery-wrap"
          alignItems={"center"}
          justifyContent={"center"}
          margin={"2% 6%"}
        >
          <Button id="backBtn" bgColor="white" borderRadius={30} marginRight={5}
          onClick={handleBackClick}>
            <ChevronLeftIcon />
          </Button>
          <Flex
            flexDir={"row"}
            justifyContent={"center"}
            className="gallery"
            overflowX={"scroll"}
            width={"1000px"}
            paddingY={5}
            paddingX={10}
            marginTop={2}
          >
            <div>
              <Image src="https://i.ibb.co/Y0LMBZF/p2.png" alt=""/>
              <Image src="https://i.ibb.co/VQFPs3z/p3.png" alt=""/>
              <Image src="https://i.ibb.co/D4ydGfc/p4.png" alt=""/>
              <Image src="https://i.ibb.co/SKx4YsR/p1.png" alt=""/>
            </div>
          </Flex>
          <Button id="nextBtn" bgColor="white" borderRadius={30} marginLeft={5} onClick={handleNextClick}>
            <ChevronRightIcon />
          </Button>
        </Flex>
      </Flex>
    </>
  );
}
