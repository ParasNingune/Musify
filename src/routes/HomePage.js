import React from 'react';
import NavBar2 from '../components/navBar2';
import { Box, VStack, SimpleGrid, Image, Text, Button, Heading } from '@chakra-ui/react';
import Player from '../components/player';
import MyLibrary from '../components/MyLibrary';
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
  const albums = [
    {
      title: "Aashiqui 2",
      artist: "Mithoon, Ankit Tiwari, Jeet Gannguli",
      image: "https://i.scdn.co/image/ab67616d0000b2736404721c1943d5069f0805f3",
      link: '/album'
    },
    {
      title: "Aaj Ki Raat (From 'Stree 2')",
      artist: "Sachin-Jigar, Amitabh Bhattacharya",
    },
    {
      title: "Sajni (From 'Laapataa Ladies')",
      artist: "Ram Sampath, Arijit Singh, Prashant Pandey",
    },
    {
      title: "GLORY",
      artist: "Yo Yo Honey Singh",
    },
    {
      title: "ANIMAL",
      artist: "Manan Bhardwaj, Vishal Mishra, Jaani",
    },
  ];

  const artists = [
    {
      name: "Arijit Singh",
      genre: "Artist",
      image: "https://i.scdn.co/image/ab676161000051745ba2d75eb08a2d672f9b69b7", // Replace with actual image URLs
    },
    {
      name: "Yo Yo Honey Singh",
      genre: "Artist",
    },
    {
      name: "Pritam",
      genre: "Artist",
    },
    {
      name: "Atif Aslam",
      genre: "Artist",
    },
    {
      name: "A.R. Rahman",
      genre: "Artist",
    },
    // More artists...
  ];

  const navigate = useNavigate();
  const handleAlbumClick = () => {
    navigate("/album");
  }

  const handleArtistClick = () => {
    navigate("/artist");
  }

  return (
    <Box
      width="100vw"
      height="100vh"
      bg="black"
      overflow="hidden"
    >
      <NavBar2 />

      {/* Left Box */}
      <Box display={{base: 'none', md: 'block'}}>
        <MyLibrary />
      </Box>

      {/* Main Body (Scrollable) */}
      <Box
        height={{ base: "auto", md: "calc(100vh - 150px)" }}
        width={{ base: "100%", md: "77%" }}
        bgGradient="linear(to-t, rgb(10,10,10), rgb(30,30,30))"
        position={{ base: "relative", md: "absolute" }}
        top={{ base: 0, md: 20 }}
        left={{ base: 0, md: 350 }}
        borderRadius={{ base: 0, md: 20 }}
        overflowY="auto"
        paddingBottom={10}
      >
        {/* Category Buttons */}
        <Box display="flex" gap={4} mt={5} ml={5} justifyContent="start" flexWrap="wrap">
          {['All', 'Music', 'Podcast'].map((category) => (
            <Button
              key={category}
              borderRadius="full"
              fontSize={{ base: "12px", md: "14px" }}
              fontWeight={700}
              backgroundColor="rgb(42,41,41)"
              color="white"
              px={4}
              py={2}
              _hover={{ bg: 'white', color: 'black' }}
            >
              {category}
            </Button>
          ))}
        </Box>

        {/* Popular Albums */}
        <Heading color="white" fontSize={{ base: "18px", md: "24px" }} mt={8} ml={5}>
          Popular Albums
        </Heading>

        <Box overflowX="auto" mt={5} mb={8} ml={3} overflowY="clip">
          <SimpleGrid
            columns={{ base: 2, sm: 3, md: 4, lg: 5 }}
            spacing={4}
            minWidth="1000px"
          >
            {albums.map((album, index) => (
              <VStack
                key={index}
                borderRadius="lg"
                boxShadow="lg"
                _hover={{ transform: "scale(1.05)", transition: "0.3s ease" }}
                overflow="hidden"
                onClick={handleAlbumClick}
              >
                <Image src={album.image} alt={album.title} boxSize={{ base: "140px", md: "220px" }} objectFit="cover" borderRadius={10}/>
                <VStack align="start" spacing={1} p={3} bg="gray.800" width="100%">
                  <Text fontWeight="bold" noOfLines={1} color="white" fontSize="lg">
                    {album.title}
                  </Text>
                  <Text fontSize="sm" color="gray.300" noOfLines={1}>
                    {album.artist}
                  </Text>
                </VStack>
              </VStack>
            ))}
          </SimpleGrid>
        </Box>

        {/* Popular Artists */}
        <Heading color="white" fontSize={{ base: "18px", md: "24px" }} mt={8} ml={5}>
          Popular Artists
        </Heading>

        <Box overflowX="auto" mt={5} mb={8} ml={3} overflowY="clip">
          <SimpleGrid
            columns={{ base: 2, sm: 3, md: 4, lg: 5 }}
            spacing={4}
            minWidth="1000px"
          >
            {artists.map((artist, index) => (
              <VStack
                key={index}
                borderRadius="lg"
                boxShadow="lg"
                _hover={{ transform: "scale(1.05)", transition: "0.3s ease" }}
                overflow="hidden"
                onClick={handleArtistClick}
              >
                <Image src={artist.image} alt={artist.name} boxSize={{ base: "140px", md: "220px" }} objectFit="cover" borderRadius={10}/>
                <VStack align="start" spacing={1} p={3} bg="gray.800" width="100%">
                  <Text fontWeight="bold" noOfLines={1} color="white" fontSize="lg">
                    {artist.name}
                  </Text>
                  <Text fontSize="sm" color="gray.300" noOfLines={1}>
                    {artist.genre}
                  </Text>
                </VStack>
              </VStack>
            ))}
          </SimpleGrid>
        </Box>

        {/* Upcoming Features */}
        <Box mt={10} p={6} bg="gray.700" borderRadius="lg" mx={5} textAlign="center" boxShadow="lg">
          <Heading color="white" fontSize={{ base: "18px", md: "20px" }} mb={4}>
            Upcoming Features
          </Heading>
          <Text color="gray.300">Exciting new features coming soon...</Text>
        </Box>
      </Box>

      {/* Player */}
      <Player />
    </Box>
  );
}