import React from 'react';
import { Box, Image, Button, InputGroup, InputLeftElement, InputRightElement, Input, IconButton, Divider } from '@chakra-ui/react';
import logo from "../assests/logo.png"; // Fixed the asset path
import { GrHomeRounded } from "react-icons/gr";
import { RiSearch2Line } from "react-icons/ri";
import { PiBrowserDuotone } from "react-icons/pi";
import { useNavigate } from 'react-router-dom';

export default function NavBar1() {
  const navigate = useNavigate();

  const handleLogin = () => navigate('/login');
  const handleSignup = () => navigate('/signup');

  return (
    <Box
      w="100%"
      h={71}
      top={0}
      backgroundColor="black"
      display="flex"
      alignItems="center" // Center the items vertically
      paddingX={4} // Add some horizontal padding
      position="sticky" // Make the navbar sticky
      zIndex={1000} // Keep it above other elements
    >
      <Image
        h={45}
        w={45}
        src={logo}
        borderRadius="full"
        alt="Logo"
      />

      <InputGroup
        backgroundColor="rgb(30,30,30)"
        borderRadius="full"
        h={50}
        mx={4} // Margin between the home button and search bar
        flex="1" // Allow the input group to grow
        maxW={700}
        ml={300}
      >
        <InputLeftElement
          pointerEvents="none"
          h="100%"
          display="flex"
          justifyContent="center"
        >
          <IconButton
            icon={<RiSearch2Line />}
            color="gray.300"
            bg="transparent"
            _hover={{ color: "white" }}
            fontSize="1.5rem"
            isRound
          />
        </InputLeftElement>

        <Input
          placeholder="What do you want to play?"
          color="white"
          fontSize="xl"
          fontWeight="400"
          border="none"
          borderRadius="full"
          _focus={{ outline: "none", boxShadow: "none", border: "none" }}
        />

        <InputRightElement>
          <IconButton
            icon={<PiBrowserDuotone />}
            color="gray.300"
            bg="transparent"
            _hover={{ color: "white" }}
            fontSize="1.5rem"
            isRound
          />
        </InputRightElement>
      </InputGroup>

      <Box
        ml="auto" // Push the buttons to the right
        display="flex"
        alignItems="center"
      >
        <Button
          variant="link"
          color="gray.300"
          mr={4}
          fontWeight="medium"
          _hover={{ transform: 'scale(1.1)', transition: 'all 0.1s ease-in-out', fontWeight: 'bold' }}
          onClick={handleSignup}
        >
          Sign up
        </Button>

        <Button
          bg="white"
          color="black"
          borderRadius="full"
          px={6}
          height={50}
          fontWeight="bold"
          fontSize="lg"
          _hover={{ opacity: 0.9, transform: 'scale(1.05)', transition: 'all 0.2s ease-in-out' }}
          onClick={handleLogin}
        >
          Log in
        </Button>
      </Box>
    </Box>
  );
}
