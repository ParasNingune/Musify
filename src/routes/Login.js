import React from 'react';
import {Box, Heading, Image, Button, Stack, FormControl, FormLabel, Input, InputGroup, InputRightElement, Link, Text} from "@chakra-ui/react"
import logo from '../assests/logo.png'
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useNavigate } from 'react-router-dom';

export default function Login() {

  const [show, setShow] = React.useState(false)
  const navigate = useNavigate();

  const handleClick = () => setShow(!show);

  const handleSignUp = () =>{
    navigate('/signup');
  }

  const handleLogIn = () => {
    navigate('/home')
  }

  return (
    <Box 
      w='100%'  
      h={1000}
      bgGradient="linear(to-b, rgb(41, 41, 41) , rgba(0, 0, 0) 75%)"
      display={'flex'}
      justifyContent={'center'}
      overflowY={'scroll'}
    >
      <Box
        w={734}
        h={851}
        mt={30}
        justifySelf={'center'}
        bgColor={'rgb(15,15,15)'}
        borderRadius={'8px'}
        pb={'32px'}
        display={'flex'}
        flexDirection={'column'}
      >
        <Image
          h={45}
          w={45}
          src={logo}
          alignSelf={'center'}
          mt={7}
        />
        <Heading
          color={'white'}
          fontWeight={800}
          fontSize={'2rem'}
          alignSelf={'center'}
          m={0.5}
          mt={2}
          mb={9}
        >
          Login in to Musify
        </Heading>

        <Stack 
          spacing={2} 
          width="325px" 
          alignSelf={'center'}
        >
          <Button 
            variant="ghost"
            leftIcon={<FcGoogle style={{fontSize:'25px'}}/>}
            color={'white'}
            size="lg"
            borderRadius={25}
            border="1px solid"
            borderColor="gray.500"
            _hover={{borderColor:'white'}}
            onClick={handleLogIn}
          >
            Continue with Google
          </Button>

          <Button 
            leftIcon={<FaFacebook style={{ backgroundColor: '#4285F4', borderRadius:50, fontSize:'30px'}}/>} 
            color={'white'}
            variant="ghost"
            size="lg"
            borderRadius={25}
            border="1px solid"
            borderColor="gray.500"
            _hover={{borderColor:'white'}}
          >
            Continue with Facebook
          </Button>

          <Button 
            leftIcon={<FaApple style={{fontSize:'30px'}}/>} 
            color={'white'}
            variant="ghost"
            size="lg"
            borderRadius={25}
            border="1px solid"
            borderColor="gray.500"
            _hover={{borderColor:'white'}}
          >
            Continue with Apple
          </Button>
          <Button 
            colorScheme="gray" 
            bgColor={'black'}
            color={'white'}
            variant="solid" 
            size="lg"
            borderRadius={25}
            border="1px solid"
            borderColor="gray.500"
            _hover={{borderColor:'white'}}
          >
            Continue with phone number
          </Button>
        </Stack>

        <Box 
          as='hr'
          borderColor={'gray.700'}
          role='presentation'
          width='72%'
          margin='32px auto 0'
        />

        <Stack
          width={'325px'}
          alignSelf={'center'}
          mt={8}
          spacing={4}
        >
          <FormControl>
            <FormLabel
              color={'white'}
              fontWeight={600}
            >
              Email or username
            </FormLabel>
            <Input 
              type='email' 
              size={'lg'}
              borderColor="gray.500"
              _hover={{borderColor:'white'}}
              placeholder='Email or username'
              focusBorderColor="white"
            />
          </FormControl>

          <FormControl>
            <FormLabel
              color={'white'}
              fontWeight={600}
            >
              Password
            </FormLabel>

            <InputGroup>
              <Input 
                type={show ? 'text' : 'password'}
                size={'lg'}
                borderColor="gray.500"
                color={'white'}
                _hover={{borderColor:'white'}}
                placeholder='Enter password'
                focusBorderColor="white"
              />
              <InputRightElement>
                <Button h="2rem" size="sm" onClick={handleClick} alignSelf={'center'} marginTop={2} marginRight={2} variant="ghost">
                  {show ? <ViewIcon boxSize="2rem" color={'gray.500'}/> : <ViewOffIcon boxSize="2rem" color={'white'}/>}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>

          <Button
            mt={2}
            borderRadius={25}
            size="lg"
            fontSize={18}
            fontWeight={800}
            color={'black'}
            bgColor={'rgb(101, 212, 110)'}
            _hover={{bgColor:'rgb(101, 212, 110)', transform:'scale(1.1)', transition:'all 0.1s ease-in-out'}}
            onClick={handleLogIn}
          >
            Log In
          </Button>

          <Link 
            color={'white'}
            fontWeight={700}
            _hover={{color:'rgb(101, 212, 110)'}}
            textDecoration="underline"
            alignSelf={'center'}
            mt={4}
          >
            Forgot your password?
          </Link>

          <Text
            alignSelf={'center'}
            color={'white'}
            fontWeight={600}
            mt={5}
          >
            Don't have an account?{' '}
            <Link color={'rgb(101, 212, 110)'} onClick={handleSignUp}>  
              Sign up for Spotify
            </Link>
          </Text>
        </Stack>

      </Box>
      <Box
        w={'100%'}
        h={75}
        bottom={0}
        mt={20}
        position={'absolute'}
        bgColor={'rgb(15,15,15)'}
        color={'white'}
        alignContent={'center'}
      >
        <Text
          textAlign={'center'}
          fontSize={12}
        >
          This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
        </Text>
      </Box>
      
    </Box>
  );
}