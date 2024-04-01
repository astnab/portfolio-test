import { Flex, Link, Button, Text } from "@chakra-ui/react";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import Footer from "./components/Footer.jsx";
import AboutMe from "./components/AboutMe.jsx";
import Portfolio from "./components/Portfolio.jsx"


function App() {


  return (
    <>
    <Flex  flexDir={"column"}>
      
      <Navbar />
      <Home />
      <Portfolio />
      <AboutMe />
      <Footer />
    </Flex>
    </>
  );
}

export default App;
