import React from 'react'
import { Box, Link, Image, Button,InputGroup, InputLeftElement, InputRightElement, Input, IconButton, Divider} from '@chakra-ui/react';
import logo from '../assests/logo.png'
import { GrHomeRounded } from "react-icons/gr";
import { RiSearch2Line } from "react-icons/ri";
import { PiBrowserDuotone } from "react-icons/pi";
import { useNavigate } from 'react-router-dom';

export default function NavBar1() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  }

  const handleSignup = () => {
    navigate('/signup');
  }
  return (
    <Box
      w='100%'
      h={71}
      top={0}
      backgroundColor={'black'}
      display={'flex'}
    >
      <Image
        h={45}
        w={45}
        marginLeft={7}
        alignSelf={'center'}
        src={logo}
        borderRadius={50}
      />

      <Button
        marginLeft='445'  
        alignSelf='center' 
        borderRadius={50}
        backgroundColor={'rgb(24,24,24)'}
        height={50}
        _hover={{bgColor:'rgb(24,24,24)', transform:'scale(1.1)', transition:'all 0.1s ease-in-out'}}
      >
        <GrHomeRounded style={{ fontSize: '2rem', color: 'white'}}/>
      </Button>

      <InputGroup
        backgroundColor="rgb(24,24,24)" 
        borderRadius="50" 
        height={50}
        alignSelf={'center'}
        marginLeft={3}
        width={535}
      >
        <InputLeftElement
          pointerEvents="none"
          height="100%"
          display="flex"
          justifyContent="center"
          alignContent={'center'}
          marginLeft={2}
        >
          <IconButton
            icon={<RiSearch2Line />}
            color="gray.200"
            bg="transparent"
            _hover={{ color: "white" }}
            fontSize={'1.5rem'}
            isRound={true}
            size="lg"
          />
        </InputLeftElement>

        <Input
          height={50}
          placeholder="What do you want to play?"
          color="white"
          fontSize={20}
          fontWeight={400}
          border="none"
          width={400}
          marginLeft={5}
          _focus={{outline: "none", boxShadow: "none", border: "none"}}
        />

        <Divider 
          orientation="vertical"
          height="70%" 
          color="white" 
          alignSelf={'center'}
          marginLeft={10}
        />

        <InputRightElement>
          <IconButton
            icon={<PiBrowserDuotone />}
            top={1}
            color="gray.200"
            bg="transparent"
            _hover={{ color: "white" }}
            fontSize={'1.5rem'}
            isRound={true}
            size="lg"
            right={5}
          />
        </InputRightElement>

      </InputGroup>

      <Box
        right={2}
        position={'absolute'}
        bg={'transparent'}
        alignSelf={'center'}
        backgroundColor={'black'}
        hh={71}
      >
        {/* <Link
          color={'white'}
          fontSize={14}
          fontWeight={500}
          _hover={{ transform:'scale(1.2)', transition:'all 0.1s ease-in-out'}}
        >
          Sign Up
        </Link> */}
        <Button 
          variant="link" 
          color="gray.300" 
          mr={4}
          _hover={{ transform:'scale(1.1)', transition:'all 0.1s ease-in-out', fontWeight:'800'}}
          onClick={handleSignup}
        >
          Sign up
        </Button>

        <Button
          bg="white"
          color="black"
          borderRadius="full"
          width={40}
          height={55}
          fontWeight="bold"
          fontSize={20}
          _hover={{ opacity: 0.8, transform:'scale(1.1)', transition:'all 0.1s ease-in-out' }}
          onClick={handleLogin}
        >
          Log in
        </Button>
      </Box>
    </Box>
  )
}
