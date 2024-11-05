import React from 'react';
import { Box, Button, Text } from '@chakra-ui/react';
import { VscLibrary } from "react-icons/vsc";
import { IoMdAdd } from "react-icons/io";
import { GrFormNextLink } from "react-icons/gr";

export default function LeftBox() {
  return (
    <Box
      width={325}
      height={640}
      background="linear-gradient(145deg, rgba(10,10,10,1) 0%, rgba(40,40,40,1) 100%)"
      top={75}
      left={1}
      position="absolute"
      borderRadius={15}
      boxShadow="0 8px 16px rgba(0,0,0,0.7)"
      display="flex"
      flexDirection="column"
      alignItems="center"
      padding={5}
      transition="transform 0.3s ease"
      _hover={{ transform: 'scale(1.01)' }}
    >
      {/* First Group of Buttons */}
      <Box width="100%" display="flex" justifyContent="space-around" marginBottom={6}>
        <Button
          leftIcon={<VscLibrary fontSize={28} />}
          backgroundColor="transparent"
          color="gray.300"
          _hover={{ color: 'white', bg: 'rgba(255,255,255,0.1)' }}
          fontSize={18}
          width="80%"
          padding={5}
          borderRadius={12}
          boxShadow="0 4px 8px rgba(0,0,0,0.4)"
          transition="all 0.2s ease"
        >
          Your Library
        </Button>

        <Button
          leftIcon={<IoMdAdd fontSize={28} />}
          color="gray.300"
          backgroundColor="transparent"
          _hover={{ color: 'white', bg: 'rgba(255,255,255,0.1)' }}
          borderRadius="full"
          padding={5}
          boxShadow="0 4px 8px rgba(0,0,0,0.4)"
          transition="all 0.2s ease"
        />

        <Button
          leftIcon={<GrFormNextLink fontSize={32} />}
          color="gray.300"
          backgroundColor="transparent"
          _hover={{ color: 'white', bg: 'rgba(255,255,255,0.1)' }}
          borderRadius="full"
          padding={5}
          boxShadow="0 4px 8px rgba(0,0,0,0.4)"
          transition="all 0.2s ease"
        />
      </Box>

      {/* Second Group of Buttons */}
      <Box
        display="flex"
        flexDirection="row"    
        justifyContent="space-between"  
        width="90%"          
        marginBottom={6}
      >
        <Button
          borderRadius="full"
          height={12}
          width="48%"          
          bg="rgb(40,40,40)"
          color="white"
          fontSize={15}
          fontWeight="bold"
          _hover={{ color: 'black', bg: 'white' }}
          marginRight={2}      
          boxShadow="0 4px 8px rgba(0,0,0,0.4)"
          transition="all 0.2s ease"
        >
          Playlists
        </Button>

        <Button
          borderRadius="full"
          height={12}
          width="48%"          
          bg="rgb(40,40,40)"
          color="white"
          fontSize={15}
          fontWeight="bold"
          _hover={{ color: 'black', bg: 'white' }}
          marginLeft={2}       
          boxShadow="0 4px 8px rgba(0,0,0,0.4)"
          transition="all 0.2s ease"
        >
          Artists
        </Button>
      </Box>

      {/* Box at the bottom */}
      <Box
        width="100%"
        bg="rgb(30,30,30)"
        height={300}
        borderRadius={20}
        display="flex"
        justifyContent="center"
        alignItems="center"
        padding={4}
        boxShadow="0 8px 16px rgba(0,0,0,0.4)"
      >
        <Text fontSize="lg" color="gray.200" textAlign="center">
          Create your first Playlist
        </Text>
      </Box>
    </Box>
  );
}
