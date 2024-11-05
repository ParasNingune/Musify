// import React from 'react'
// import NavBar2 from '../components/navBar2';
// import { Box, HStack, VStack, Spacer, Image, Text, Button, Heading } from '@chakra-ui/react';
// import { IoChevronBackCircle } from "react-icons/io5";
// import MyLibrary from '../components/MyLibrary';
// import { FaPlay } from "react-icons/fa";
// import { IoIosAddCircle } from "react-icons/io";
// import { IoIosMore } from "react-icons/io";
// import Player from '../components/player';

// export default function ArtistPage() {

//         const albums = [
//             {
//                 title: "Tum Hi Ho",
//                 artist: "Mithoon, Arijit Singh",
//                 duration: "4:21"
//             },
//             {
//                 title: "Raabta",
//                 artist: "Pritam, Arijit Singh",
//                 duration: "4:23"
//             },
//             {
//                 title: "Tera Hone Laga Hoon",
//                 artist: "Pritam, Arijit Singh, Alisha Chinai",
//                 duration: "4:30"
//             },
//             {
//                 title: "Kabira",
//                 artist: "Pritam, Arijit Singh, Harshdeep Kaur",
//                 duration: "4:20"
//             },
//             {
//                 title: "Channa Mereya",
//                 artist: "Pritam, Arijit Singh",
//                 duration: "5:22"
//             },
//             {
//                 title: "Binte Dil",
//                 artist: "Pritam, Arijit Singh",
//                 duration: "4:37"
//             },
//             {
//                 title: "Phir Mohabbat",
//                 artist: "Pritam, Arijit Singh, Mohd. Irfan, Mithoon",
//                 duration: "5:09"
//             },
//             {
//                 title: "Main Tera Boyfriend",
//                 artist: "Arijit Singh, Neha Kakkar",
//                 duration: "3:21"
//             },
//             {
//                 title: "Hasi",
//                 artist: "Amaal Mallik, Arijit Singh",
//                 duration: "4:23"
//             },
//             {
//                 title: "Muskurane",
//                 artist: "Arijit Singh",
//                 duration: "4:50"
//             },
//             {
//                 title: "Agar Tum Saath Ho",
//                 artist: "A.R. Rahman, Arijit Singh, Alka Yagnik",
//                 duration: "4:40"
//             },
//             {
//                 title: "Tujhe Kitna Chahne Lage",
//                 artist: "Mithoon, Arijit Singh",
//                 duration: "4:20"
//             },
//             {
//                 title: "O Saathi",
//                 artist: "Atif Aslam, Arijit Singh",
//                 duration: "4:05"
//             },
//             {
//                 title: "Kashmir Main Tu Kanyakumari",
//                 artist: "A.R. Rahman, Arijit Singh",
//                 duration: "3:50"
//             },
//             {
//                 title: "Dil Diyan Gallan",
//                 artist: "Pritam, Arijit Singh",
//                 duration: "4:02"
//             },
//             {
//                 title: "Yeh Fitoor Mera",
//                 artist: "A.R. Rahman, Arijit Singh",
//                 duration: "5:01"
//             }
//         ];
      

//   return (
//     <Box
//         width={'100vw'}
//         height={'100vh'}
//         bg={'black'}
//     >
//         <NavBar2 />

//         <MyLibrary />

//         <Box
//             height={'calc(100vh - 75px - 100px)'} // Adjust height to account for player
//             width={'75vw'}
//             bgGradient="linear(to-t, rgb(15,15,15), rgb(25,25,25))"
//             position="absolute"
//             top={75}
//             left={350}
//             borderRadius={20}
//             overflowY="auto"
//             paddingBottom={10}
//             display={'flex'}
//             flexDirection={'column'}
//         >
//             <Box
//                 height='500px'
//                 width={'96%'}
//                 position={'absolute'}
//                 top={5}
//                 left={5}
//                 borderRadius={15}
//             >
//                 <Image
//                     src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMVx5T23dg3DSK_Wcj3Kq-gK-rPfvuEvoTXw&s'
//                     style={{
//                         // objectFit: 'cover',        // Replaces the commented objectFit line
//                         backgroundRepeat: 'no-repeat',
//                         height: '100%',
//                         width: '100%',
//                         filter: 'blur(2px)'       // Correct syntax for the blur filter in JSX
//                       }}
//                 />

//                 <Button
//                     position={'absolute'}
//                     top={2}
//                     borderRadius={50}
//                     backgroundColor={'transparent'}
//                     _hover={{bgColor:'transparent', transform:'scale(1.1)', transition:'all 0.1s ease-in-out'}}
//                 >
//                     <IoChevronBackCircle style={{fontSize: '3rem', color:' white'}}/>
//                 </Button>

//             </Box>

//             <Box
//                 width={'90%'}
//                 position={'absolute'}
//                 top={530}
//                 left={10}
//                 borderRadius={15}
//                 display={'flex'}
//                 flexDirection={'row'}
//                 //backgroundColor={'white'}
//             >
//                 <FaPlay style={{fontSize: '2rem', color:' white', marginLeft:'5'}}/>

//                 <IoIosAddCircle style={{fontSize: '2.5rem', color:' white', marginLeft:'5', marginTop:'-4'}} />

//                 <IoIosMore style={{fontSize: '2.5rem', color:' white', marginLeft:'5', marginTop:'-4'}} />

//             </Box>

//             <Box
//                 height={400}
//                 width={'96%'}
//                 position={'absolute'}
//                 top={570}
//                 left={5}
//                 borderRadius={15}
//                 overflowX={'clip'}
//                 overflowY={'auto'}
//             >
//                 <Heading margin={3} color={'white'}>Popular Songs</Heading>
//                 {albums.map((album, index) => (
//                 <HStack
//                     key={index}
//                     borderRadius="lg"
//                     overflow="hidden"
//                     boxShadow="md"
//                     _hover={{ transform: "scale(1.05)", transition: "0.2s" }}
//                     margin={2}
//                     padding={3}
//                     bg="gray.800" // Background color
//                     spacing={4}  // Spacing between the number and text
//                 >
//                     <Text
//                     fontSize="2xl"  // Font size for the number
//                     fontWeight="bold"
//                     color="white"
//                     width="40px"  // Adjust width for better alignment
//                     textAlign="center"
//                     >
//                     {index + 1}  {/* Display the index as a number (1-based) */}
//                     </Text>
                    
//                     <VStack align="start" spacing={1}>
//                     <Text fontWeight="bold" noOfLines={2} color="white" fontSize="lg">
//                         {album.title}
//                     </Text>
//                     <Text fontSize="sm" color="gray.300">
//                         {album.artist}
//                     </Text>
//                     </VStack>

//                     <Spacer /> {/* Pushes the duration to the far right */}
                    
//                     <Text fontSize="sm" color="gray.300"> {/* Duration on the far right */}
//                     {album.duration}
//                     </Text>
//                 </HStack>
//                 ))}
//             </Box>
//         </Box>
//         <Player />
//     </Box>
//   )
// }


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
        title: "Aarjit Singh",
        releaseDate: "00/00/00",
        coverImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMVx5T23dg3DSK_Wcj3Kq-gK-rPfvuEvoTXw&s",
        tracks: [
            {
                title: "Tum Hi Ho",
                artist: "Mithoon, Arijit Singh",
                duration: "4:21"
            },
            {
                title: "Raabta",
                artist: "Pritam, Arijit Singh",
                duration: "4:23"
            },
            {
                title: "Tera Hone Laga Hoon",
                artist: "Pritam, Arijit Singh, Alisha Chinai",
                duration: "4:30"
            },
            {
                title: "Kabira",
                artist: "Pritam, Arijit Singh, Harshdeep Kaur",
                duration: "4:20"
            },
            {
                title: "Channa Mereya",
                artist: "Pritam, Arijit Singh",
                duration: "5:22"
            },
            {
                title: "Binte Dil",
                artist: "Pritam, Arijit Singh",
                duration: "4:37"
            },
            {
                title: "Phir Mohabbat",
                artist: "Pritam, Arijit Singh, Mohd. Irfan, Mithoon",
                duration: "5:09"
            },
            {
                title: "Main Tera Boyfriend",
                artist: "Arijit Singh, Neha Kakkar",
                duration: "3:21"
            },
            {
                title: "Hasi",
                artist: "Amaal Mallik, Arijit Singh",
                duration: "4:23"
            },
            {
                title: "Muskurane",
                artist: "Arijit Singh",
                duration: "4:50"
            },
            {
                title: "Agar Tum Saath Ho",
                artist: "A.R. Rahman, Arijit Singh, Alka Yagnik",
                duration: "4:40"
            },
            {
                title: "Tujhe Kitna Chahne Lage",
                artist: "Mithoon, Arijit Singh",
                duration: "4:20"
            },
            {
                title: "O Saathi",
                artist: "Atif Aslam, Arijit Singh",
                duration: "4:05"
            },
            {
                title: "Kashmir Main Tu Kanyakumari",
                artist: "A.R. Rahman, Arijit Singh",
                duration: "3:50"
            },
            {
                title: "Dil Diyan Gallan",
                artist: "Pritam, Arijit Singh",
                duration: "4:02"
            },
            {
                title: "Yeh Fitoor Mera",
                artist: "A.R. Rahman, Arijit Singh",
                duration: "5:01"
            }
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
                        <Text fontSize="sm" color="gray.400">
                            DOB: {album.releaseDate}
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
                                <Text>{track.artist}</Text>
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
  