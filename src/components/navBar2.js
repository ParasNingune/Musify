import React from 'react';
import { Box, Image, Button, InputGroup, InputLeftElement, InputRightElement, Input, IconButton, Divider, Avatar } from '@chakra-ui/react';
import logo from "../assests/logo.png"
import { GrHomeRounded } from "react-icons/gr";
import { RiSearch2Line } from "react-icons/ri";
import { PiBrowserDuotone } from "react-icons/pi";
import { GrInstallOption } from "react-icons/gr";
import { FaRegBell } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

export default function NavBar2() {
  const navigate = useNavigate();

  const handleHomeRoute = () => navigate('/home');
  const handlePremiumRoute = () => navigate('/premium');
  const handleInstall = () => navigate('/install');

  return (
    <Box
      w="100%"
      h="71px"
      bg="black"
      display="flex"
      alignItems="center"
      justifyContent={"space-between"}
      paddingX={5}
      position="sticky"
      top={0}
      zIndex={10}
    >
      {/* Logo */}
      <Image
        src={logo}
        h="45px"
        w="45px"
        borderRadius="full"
        cursor="pointer"
        _hover={{ transform: 'scale(1.1)', transition: 'all 0.2s ease' }}
      />

      {/* Home Button */}
      <Button
      marginLeft='445'  
        bg="rgb(24,24,24)"
        borderRadius="full"
        height="50px"
        minW="50px"
        mx={2} // Adjust margin for closer spacing
        _hover={{ bg: 'gray.700', transform: 'scale(1.1)', transition: 'all 0.2s ease' }}
        onClick={handleHomeRoute}
      >
        <GrHomeRounded style={{ fontSize: '1.8rem', color: 'white' }} />
      </Button>

      {/* Search Bar */}
      <InputGroup
        bg="rgb(24,24,24)"
        borderRadius="full"
        height="50px"
        maxW="600px"
        flex="1"
        mx={2} // Adjust margin for closer spacing
      >
        <InputLeftElement height="100%">
          <IconButton
            icon={<RiSearch2Line />}
            color="gray.200"
            bg="transparent"
            fontSize="1.5rem"
            isRound
          />
        </InputLeftElement>
        <Input
          placeholder="What do you want to play?"
          color="white"
          fontSize="lg"
          fontWeight="400"
          border="none"
          _focus={{ boxShadow: 'none' }}
          borderRadius="full" // Make the input oval
        />
        <Divider orientation="vertical" height="60%" borderColor="gray.600" mx={3} />
        <InputRightElement>
          <IconButton
            icon={<PiBrowserDuotone />}
            color="gray.200"
            bg="transparent"
            fontSize="1.5rem"
            isRound
            _hover={{ color: 'white' }}
          />
        </InputRightElement>
      </InputGroup>

      {/* Action Buttons */}
      <Box display="flex" alignItems="center">
        <Button
          color="black"
          bg="white"
          borderRadius="full"
          px={6}
          fontSize="lg"
          fontWeight="bold"
          _hover={{ opacity: 0.9, transform: 'scale(1.05)', transition: 'all 0.2s ease' }}
          onClick={handlePremiumRoute}
        >
          Explore Premium
        </Button>

        <IconButton
          icon={<GrInstallOption />}
          color="gray.200"
          bg="transparent"
          fontSize="1.5rem"
          _hover={{ color: 'white', transform: 'scale(1.05)', transition: 'all 0.2s ease' }}
          ml={4}
          onClick={handleInstall}
        />

        <IconButton
          icon={<FaRegBell />}
          color="gray.200"
          bg="transparent"
          fontSize="1.5rem"
          _hover={{ color: 'white', transform: 'scale(1.05)', transition: 'all 0.2s ease' }}
          ml={4}
        />

        <Button
          bg="rgb(24,24,24)"
          borderRadius="full"
          p={0}
          ml={4}
          _hover={{ transform: 'scale(1.1)', transition: 'all 0.2s ease' }}
        >
          <Avatar
            name="Profile"
            size="sm"
            bg="purple.500"
          />
        </Button>
      </Box>
    </Box>
  );
}
