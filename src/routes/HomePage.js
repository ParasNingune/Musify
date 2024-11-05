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
      height="100vh"  // Outer container should fill the full viewport height
      bg="black"
    >
      <NavBar2 />

      {/* Left Box */}
      <MyLibrary />

      {/* Main Body (Scrollable) */}
      <Box
        height="calc(100vh - 75px)"  // Adjust height to account for the fixed top components
        width="77%"
        bgGradient="linear(to-t, rgb(15,15,15), rgb(25,25,25))"
        position="absolute"
        top={75}
        left={350}
        borderRadius={20}
        overflowY="auto"  // Make the main body scrollable
        paddingBottom={10}  // Add bottom padding so content is not cut off
      >
        {/* Category Buttons */}
        <Box position="relative" paddingY={4}>
          <Button
            borderRadius={100}
            fontSize={14}
            fontWeight={800}
            size="sm"
            ml={5}
            backgroundColor="rgb(42,41,41)"
            color="white"
            _hover={{ backgroundColor: 'white', color: 'black' }}
          >
            All
          </Button>
          <Button
            borderRadius={100}
            fontSize={14}
            fontWeight={800}
            size="sm"
            ml={4}
            backgroundColor="rgb(42,41,41)"
            color="white"
            _hover={{ backgroundColor: 'white', color: 'black' }}
          >
            Music
          </Button>
          <Button
            borderRadius={100}
            fontSize={14}
            fontWeight={800}
            size="sm"
            ml={4}
            backgroundColor="rgb(42,41,41)"
            color="white"
            _hover={{ backgroundColor: 'white', color: 'black' }}
          >
            Podcast
          </Button>
        </Box>

        {/* Popular Albums */}
        <Heading
          color="white"
          fontSize={22}
          mt={8}
          ml={5}
          _hover={{ textDecoration: 'underline' }}
        >
          Popular Albums
        </Heading>

        <Box overflowX="auto" width="100%" overflowY={'clip'}>
          <SimpleGrid 
            columns={5} 
            spacing={1} 
            minWidth="1000px" 
            ml={3} 
            mt={5}
          >
            {albums.map((album, index) => (
              <VStack
                key={index}
                borderRadius="lg"
                overflow="hidden"
                boxShadow="md"
                _hover={{ transform: "scale(1.05)", transition: "0.2s" }}
                onClick={handleAlbumClick}
              >
                <Image src={album.image} alt={album.title} boxSize="225px" objectFit="cover" borderRadius={15}/>
                <VStack align="start">
                  <Text fontWeight="bold" noOfLines={2} color="white">
                    {album.title}
                  </Text>
                  <Text fontSize="sm" color="white">
                    {album.artist}
                  </Text>
                </VStack>
              </VStack>
            ))}
          </SimpleGrid>
        </Box>

        {/* Popular Artists */}
        <Heading
          color="white"
          fontSize={22}
          mt={8}
          ml={5}
          _hover={{ textDecoration: 'underline' }}
        >
          Popular Artists
        </Heading>

        <Box overflowX="auto" width="100%" overflowY={'clip'}>
          <SimpleGrid 
            columns={5} 
            spacing={1} 
            minWidth="1000px" 
            ml={3} 
            mt={5}
          >
            {artists.map((artist, index) => (
              <VStack
                key={index}
                borderRadius="lg"
                overflow="hidden"
                boxShadow="md"
                _hover={{ transform: "scale(1.05)", transition: "0.2s" }}
                onClick={handleArtistClick}
              >
                <Image src={artist.image} alt={artist.name} boxSize="225px" objectFit="cover" borderRadius={15}/>
                <VStack align="start">
                  <Text fontWeight="bold" noOfLines={2} color="white">
                    {artist.name}
                  </Text>
                  <Text fontSize="sm" color="white">
                    {artist.genre}
                  </Text>
                </VStack>
              </VStack>
            ))}
          </SimpleGrid>
        </Box>

        {/* Add space for new features */}
        <Box mt={10}>
          <Heading color="white" fontSize={22} ml={5} mb={4}>
            Upcoming Features (Future Expansion)
          </Heading>
          <Box
            height="200px"
            width="100%"
            bg="gray.700"
            borderRadius="lg"
            display="flex"
            alignItems="center"
            justifyContent="center"
            color="white"
          >
            New exciting features coming soon...
          </Box>
        </Box>
      </Box>

      {/* Player */}
      <Player />
    </Box>

  );
}
