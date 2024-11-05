import React from 'react'
import { Box, Button, Text } from '@chakra-ui/react';
import { VscLibrary } from "react-icons/vsc";
import { IoMdAdd } from "react-icons/io";
import { GrFormNextLink } from "react-icons/gr";

export default function LeftBox() {
  return (
    <Box
      width={325}
      height={750}
      background="linear-gradient(145deg, rgba(15,15,15,1) 0%, rgba(32,31,31,1) 100%)"
      top={75}
      left={1}
      position="absolute"
      borderRadius={15}
      boxShadow="0 8px 16px rgba(0,0,0,0.6)"
      display="flex"
      flexDirection="column"
      alignItems="center"
      padding={5}
    >
      {/* First Group of Buttons */}
      <Box width="100%" display="flex" justifyContent="space-around" marginBottom={4}>
        <Button
          leftIcon={<VscLibrary fontSize={32} />}
          backgroundColor={'transparent'}
          color={'gray.300'}
          _hover={{ color: 'white', bg: 'rgb(24,24,24)' }}
          fontSize={20}
          width="80%"
          padding={5}
          borderRadius={10}
          boxShadow="0 4px 8px rgba(0,0,0,0.3)"
        >
          Your Library
        </Button>

        <Button
          leftIcon={<IoMdAdd fontSize={30} />}
          color={'gray.300'}
          backgroundColor={'transparent'}
          _hover={{ color: 'white', bg: 'rgb(24,24,24)' }}
          borderRadius={50}
          padding={5}
          boxShadow="0 4px 8px rgba(0,0,0,0.3)"
        />

        <Button
          leftIcon={<GrFormNextLink fontSize={36} />}
          color={'gray.300'}
          backgroundColor={'transparent'}
          _hover={{ color: 'white', bg: 'rgb(24,24,24)' }}
          borderRadius={50}
          padding={5}
          boxShadow="0 4px 8px rgba(0,0,0,0.3)"
        />
      </Box>

      {/* Second Group of Buttons */}
      <Box
        display="flex"
        flexDirection="row"    
        justifyContent="space-between"  
        width="90%"          
        marginBottom={4}
      >
        <Button
          borderRadius={50}
          height={10}
          width="48%"          
          bg={'rgb(32,31,31)'}
          color={'white'}
          fontSize={16}
          fontWeight="bold"
          _hover={{ color: 'black', bg: 'white' }}
          marginRight={2}      
          boxShadow="0 4px 8px rgba(0,0,0,0.3)"
        >
          Playlists
        </Button>

        <Button
          borderRadius={50}
          height={10}
          width="48%"          
          bg={'rgb(32,31,31)'}
          color={'white'}
          fontSize={16}
          fontWeight="bold"
          _hover={{ color: 'black', bg: 'white' }}
          marginLeft={2}       
          boxShadow="0 4px 8px rgba(0,0,0,0.3)"
        >
          Artists
        </Button>
      </Box>

      {/* Box at the bottom */}
      <Box
        width="100%"
        bg={'rgb(24,24,24)'}
        height={300}
        borderRadius={25}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Text>Create your first Playlist</Text>
      </Box>
    </Box>
  );
}

