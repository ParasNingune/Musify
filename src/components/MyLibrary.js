import React from 'react'
import { Box, VStack, SimpleGrid, Image, Text, Button, HStack } from '@chakra-ui/react';
import { VscLibrary } from "react-icons/vsc";
import { IoMdAdd } from "react-icons/io";
import { GrFormNextLink } from "react-icons/gr";

export default function MyLibrary() {

    const myList = [
        {
            label: "Liked Songs",
            title: "Playlist",
            image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da849d25907759522a25b86a3033",
            owner: "Anushka",
        },
        {
            label: "Junk",
            title: "Playlist",
            image: "https://i.pinimg.com/564x/87/99/59/879959c9e18729568156805fbb6c912b.jpg",
            owner: "Anushka",
        },
        {
            label: "AP Dillon",
            title: "Artist",
            image: "https://i.scdn.co/image/ab67616d00001e0210ab3f7ae5fd77a23c6a7322",
            owner: "AP Dillon",
        },
        {
            label: "Gym hits",
            title: "Playlist",
            image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84558cdc82ab9bcb107c5e9d93",
            owner: "Spotify",
        },
        {
            label: "Made for you",
            title: "Playlist",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZMMM2mWaSWieIJ8uYs2Ve2zxQEAUIBctIYw&s",
            owner: "Spotify",
        },
        {
            label: "Gym hits",
            title: "Playlist",
            image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84558cdc82ab9bcb107c5e9d93",
            owner: "Spotify",
        },
        {
            label: "Made for you",
            title: "Playlist. Spotify",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZMMM2mWaSWieIJ8uYs2Ve2zxQEAUIBctIYw&s",
            owner: "Spotify",
        },
        
    ]

  return (
    <Box
      width={325}
      height={640}
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
      width="300px"
      maxHeight="100vh"
      overflowY="auto"
      bg="blackAlpha.900"
      p={4}
      color="white"
    >
      <VStack spacing={4} align="stretch">
        {myList.map((item, index) => (
          <HStack
            key={index}
            _hover={{ backgroundColor: "blackAlpha.700" }}
            p={2}
            borderRadius="md"
          >
            <Image
              src={item.image}
              boxSize="50px"
              borderRadius="md"
              alt={item.title}
            />
            <VStack align="start" spacing={0}>
              <Text fontWeight="bold" fontSize="md" noOfLines={1}>
                {item.title}
              </Text>
              <Text fontSize="sm" color="gray.400">
                {item.type}
              </Text>
            </VStack>
          </HStack>
        ))}
      </VStack>
    </Box>
    </Box>
  );
}

