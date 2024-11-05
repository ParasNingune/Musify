import React from 'react'
import {Box, Heading, Image, Button, Stack, FormControl, FormLabel, Input, InputGroup, InputRightElement, Link, Text} from "@chakra-ui/react"
import logo from '../assests/logo.png'
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

export default function Signup() {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/login')
    }

    const handleSignUp = () => {
        navigate('/home')
    }
  return (
    <Box
        backgroundColor={'rgb(15,15,15)'}
        height={'100vh'}
        width={'100vw'}
        display={'flex'}
        justifyContent={'center'}
        overflowY={'scroll'}
    >
        <Box
            w={425}
            h={851}
            mt={4}
            justifySelf={'center'}
            bgColor={'rgb(15,15,15)'}
            borderRadius={'8px'}
            pb={'32px'}
            display={'flex'}
            flexDirection={'column'}
        >
            <Image
                h={50}
                w={50}
                src={logo}
                alignSelf={'center'}
                mt={7}
            />
            <Heading
                color={'white'}
                fontWeight={800}
                fontSize={'60'}
                alignSelf={'center'}
                m={0.5}
                mt={2}
                mb={4}
                textAlign={'center'}
            >
                Sign up to <br/>start listening 
            </Heading>

            <Stack
                width={'350px'}
                alignSelf={'center'}
                mt={8}
                spacing={4}
            >
                <FormControl
                    alignContent={'center'}
                >
                    <FormLabel
                        color={'white'}
                        fontWeight={800}
                        fontSize={16}
                    >
                        Email or username
                    </FormLabel>
                    <Input 
                        type='email' 
                        height={14}
                        width={'100%'}
                        borderColor="gray.500"
                        _hover={{borderColor:'white'}}
                        placeholder='name@domain.com'
                        focusBorderColor="white"
                    />
                </FormControl>
                <Link 
                    fontWeight={700}
                    fontSize={15}
                    color='rgb(101, 212, 110)'
                    textDecoration="underline"
                >
                    Use phone number instead.
                </Link>

                <Button
                    mt={3}
                    mb={4}
                    borderRadius={25}
                    height={50}
                    width={'100%'}
                    fontSize={18}
                    fontWeight={800}
                    color={'black'}
                    bgColor={'rgb(36, 211, 78)'}
                    onClick={handleSignUp}
                >
                    Sign Up
                </Button>
            </Stack>

            <Box 
                as='hr'
                borderColor={'gray.500'}
                role='presentation'
                width='100%'
                margin='32px auto 0'
            />

            <Stack 
                mt={10}
                spacing={2} 
                width="350px" 
                alignSelf={'center'}
            >
            <Button 
                variant="ghost"
                leftIcon={<FcGoogle style={{fontSize:'25px'}}/>}
                color={'white'}
                width={'100%'}
                height={55}
                borderRadius={25}
                border="1px solid"
                borderColor="gray.500"
                _hover={{borderColor:'white'}}
            >
                Continue with Google
            </Button>

            <Button 
                leftIcon={<FaFacebook style={{ backgroundColor: '#4285F4', borderRadius:50, fontSize:'30px'}}/>} 
                color={'white'}
                variant="ghost"
                width={'100%'}
                height={55}
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
                width={'100%'}
                height={55}
                borderRadius={25}
                border="1px solid"
                borderColor="gray.500"
                _hover={{borderColor:'white'}}
            >
                Continue with Apple
            </Button>
          </Stack>

        <Box 
            as='hr'
            borderColor={'gray.700'}
            role='presentation'
            width='90%'
            margin='32px auto 0'
        />

        <Text
            alignSelf={'center'}
            color={'gray.400'}
            fontSize={18}
            fontWeight={600}
            mt={5}
        >
            Already have an account?{' '}
            <Link color={'white'} onClick={handleLogin}>  
              Login here
            </Link>
        </Text>

        <Text
            textAlign={'center'}
            color={'gray.400'}
            fontSize={12}
            mt={6}
        >
            This site is protected by reCAPTCHA and the Google<br/>
            Privacy Policy and Terms of Service apply.
        </Text>
        </Box>
    </Box>
  )
}
