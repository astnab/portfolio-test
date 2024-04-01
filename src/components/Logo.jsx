import { Flex, Box, Text, Image, Link, Button } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import "../index.css";

export default function Logo() {
    return (
        <Flex flexDir={"row"}>
            <img className="" 
            src="../public/avatar.png" alt="" />

            <Text>Astari Nabila</Text>

            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Twitter_Verified_Badge.svg/2048px-Twitter_Verified_Badge.svg.png" alt=""/>
        </Flex>
    )
}