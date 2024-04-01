import { Text, Box, Link, Flex, Divider } from "@chakra-ui/react";
import "../index.css";

export default function Footer() {
  return (
    <>
    <Divider w="100%"></Divider>
    <Flex
      flexDir={{ base: "column", md: "row" }}
      justifyContent={"space-between"}

      padding={8}
    //   bgColor={"grey"}
    >

      <Flex gap={[".5rem", "2rem"]}
      flexDir={["column", "row"]}>
        <Box fontSize={"small"}>
          <Text textAlign={"left"} fontWeight={700}>
            © 2024
          </Text>
          <Text textAlign={"left"} marginTop={1}>
            Astari Nabila
          </Text>
        </Box>

        <Box fontSize={"small"}>
          <Text textAlign={"left"} fontWeight={700}>
            Legal
          </Text>
          <Text textAlign={"left"} marginTop={1}>
            Privacy Policy
          </Text>
        </Box>

        <Box fontSize={"small"} display={{ base: "none", md: "block" }}>
          <Text textAlign={"left"} fontWeight={700}>
            Social
          </Text>
          <Text textAlign={"left"} marginTop={1}>
            Behance / Github
          </Text>
        </Box>

        <Box fontSize={"small"} display={{ base: "none", md: "block" }}>
          <Text textAlign={"left"} fontWeight={700}>
            Links
          </Text>
          <Text textAlign={"left"} marginTop={1}>
            Medium
          </Text>
        </Box>
      </Flex>

      <Flex letterSpacing={"2rem"} display={{ base: "none", md: "block" }}>
        <i class="fa-brands fa-github"></i>
        <i class="fa-brands fa-dribbble"></i>
        <i class="fa-brands fa-linkedin"></i>
        <i class="fa-brands fa-medium"></i>
      </Flex>


{/* MOBILE VIEW */}
      <Flex
        flexDir={"row"}
        textAlign={"left"}
        marginTop={2}
        fontSize="large"
        letterSpacing={10}
        display={{ base: "block", md: "none" }}
      >
        <i class="fa-brands fa-github"></i>
        <i class="fa-brands fa-dribbble"></i>
        <i class="fa-brands fa-linkedin"></i>
        <i class="fa-brands fa-medium"></i>
      </Flex>
    </Flex>
    </>
  );
}
