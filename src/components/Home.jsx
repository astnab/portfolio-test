import { Text, Link, Flex } from "@chakra-ui/react";
import "../index.css";

export default function Home() {
  return (
    <Flex flexDir={"column"} textAlign={"left"} padding={[8, 20]} gap={"0.5rem"}
    marginTop={[8, 18, 20]}
    marginBottom={[10,100]} position={"relative"}>

      <Text fontSize={["large", "xx-large"]} fontWeight={900} color={"#B9B4C7"}>
        HELLO, MY NAME IS ASTA,
      </Text>
      <Text fontSize={["xx-large", "90px"]} color={"#352F44"} className="textcustom-1" fontWeight={1000}>
        I make websites.
      </Text>

      <Text fontSize={["larger", "xx-large"]}
      marginRight={[0,60]}
      >
        I am a full-stack web developer and a creative designer based in
        <Link className="headerlink" color="#5C5470" href="#"> Jakarta, Indonesia
        </Link> and I write about web design processes on my 
        <Link className="headerlink" color="#5C5470" href="#"> blog.</Link>
      </Text>
    </Flex>
  );
}
