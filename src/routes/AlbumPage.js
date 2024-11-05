import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Text,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import NavBar2 from "../components/navBar2"; // Assuming you have a navigation component
import Player from "../components/player"; // Assuming you have a player component

const AlbumPage = () => {
  const album = {
      title: "Aashiqui-2",
      artist: "Mithoon, Ankit Tiwari, Jeet Ganngili",
      releaseDate: "00/00/00",
      coverImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAAAR6clHVHXPYcGPoLaVbdbwBU9lnzhV2Pw&s",
      tracks: [
        { title: "Tum Hi Ho", artist: "Mithoon, Arijit Singh", duration: "4:21" },
        { title: "Sunn Raha Hai", artist: "Ankit Tiwari", duration: "6:30" },
        { title: "Chahun Main Ya Naa", artist: "Palak Muchhal, Arijit Singh", duration: "5:04" },
        { title: "Hum Mar Jayenge", artist: "Tulsi Kumar, Arijit Singh", duration: "5:06" },
        { title: "Meri Aashiqui", artist: "Palak Muchhal, Arijit Singh", duration: "4:26" },
        { title: "Piya Aaye Na", artist: "Tulsi Kumar, KK", duration: "4:46" },
        { title: "Bhula Dena", artist: "Mustafa Zahid", duration: "4:00" },
        { title: "Aasan Nahin Yahan", artist: "Arijit Singh", duration: "3:34" }
      ],
  };

  return (
      <Flex direction="column" height="100vh" bg={useColorModeValue("gray.900", "gray.800")} color="white">
          {/* Navigation Bar */}
          <NavBar2 />

          {/* Main Content Area */}
          <Flex flex="1" p={8} overflowY="auto" direction="column">
              {/* Album Header */}
              <Flex align="center" mb={10}>
                  <Image
                      src={album.coverImg}
                      alt={album.title}
                      boxSize="200px"
                      borderRadius="md"
                      mr={6}
                  />
                  <Box>
                      <Heading as="h1" size="2xl" mb={2}>
                          {album.title}
                      </Heading>
                      <Text fontSize="lg" mb={2}>
                          {album.artist}
                      </Text>
                      <Text fontSize="sm" color="gray.400">
                          Released: {album.releaseDate}
                      </Text>
                  </Box>
              </Flex>

              {/* Track List */}
              <Box>
                  <Heading as="h2" size="xl" mb={4}>
                      Tracklist
                  </Heading>
                  <SimpleGrid spacing={4}>
                      {album.tracks.map((track, index) => (
                          <Box
                              key={index}
                              p={4}
                              bg={'black'}
                              borderRadius="md"
                              display="flex"
                              justifyContent="space-between"
                              alignItems="center"
                          >
                              <Text>{track.title}</Text>
                              <Text color="gray.400">{track.duration}</Text>
                              <Button colorScheme="green" size="sm">
                                  Play
                              </Button>
                          </Box>
                      ))}
                  </SimpleGrid>
              </Box>
          </Flex>

          {/* Player Component at the Bottom */}
          <Box position="sticky" bottom="0" width="100%">
              <Player />
          </Box>
      </Flex>
  );
};

export default AlbumPage;
