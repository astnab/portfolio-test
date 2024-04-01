import { Flex, Link, Button } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons"
import Logo from "./Logo.jsx";
import "../index.css";

export default function Navbar() {


  return (
    <>
      <Flex
        justifyContent={"space-between"}
        alignItems={"center"}
        w={"100%"}
        h={"50px"}
        paddingX={[8, 20]}
        fontWeight={700}
        paddingY={10}
        marginTop={[0,5]}
        position={"sticky"}>


        <Link className="logopic"><img src="https://i.ibb.co/BsZtC2K/logo.png" alt="" /></Link>

        <Flex display={{ base: "none", md: "flex" }} gap={"5rem"} marginLeft={40}>
          <Link className="navline">ABOUT</Link>
          <Link className="navline">PORTFOLIO</Link>
          <Link className="navline">CONTACT</Link>
        </Flex>

        <Link
        display={{ base: "none", md: "flex" }}
        bgColor={"#B9B4C7"}
        color={"#352F44"}
        paddingX={5}
        paddingY={2}
        borderRadius={20}
        className="email"
        >astnab@gmail.com</Link>

        <Button display={{ base: "block", md: "none" }}
        bgColor="none">
          <HamburgerIcon />
        </Button>
      </Flex>
    </>
  );
}
