import { Flex, Link, Button, Text } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import "../index.css";

export default function AboutMe() {
  return (
    <>
      <Flex
        w={"100%"}
        // bgColor={"#A03F43"}
        flexDir={["column", "row"]}
        textAlign={"left"}
        padding={8}
        gap={"0.5rem"}
        marginTop={[10, 18, 20]}
        marginBottom={[0, 100]}
      >
        <Button
        display={{ base: "none", md: "flex" }}
          width={["100%"]}
          borderRadius={30}
          marginLeft={[4, 0]}
          marginBottom={[4, 0]}
          bgColor={"#5C5470"}
          color={"white"}
        >
          <Text marginRight={3} fontSize={["small", "large"]}>
            MORE ABOUT ME
          </Text>
          <ExternalLinkIcon />
        </Button>

        <Flex
          flexDir={"column"}
          gap={"1rem"}
          marginLeft={[5, 20]}
          marginRight={[5, 20]}
        >
          <Text fontSize={["small", "large"]} marginTop={[0,3]} marginBottom={[3]}>
            ABOUT ME
          </Text>
          <Text fontSize={["medium", "xx-large"]}>
            I am a web developer and a creative designer! I work at the intersection of
            curiosity, reasoning and imagination, which guide me to uncover
            insights, (re)frame problems and craft meaningful, future-oriented
            solutions. I am passionate about providing solutions to users by
            building accessible products.
          </Text>

          <Button
          width={["70%"]}
          borderRadius={30}
          marginTop={5}
          marginBottom={[5,0]}
          display={{ base: "flex", md: "none" }}
          bgColor={"#5C5470"}
          color={"white"}
        >
          <Text marginRight={3} fontSize={["small", "large"]}>
            MORE ABOUT ME
          </Text>
          <ExternalLinkIcon />
        </Button>
        </Flex>
      </Flex>
    </>
  );
}
