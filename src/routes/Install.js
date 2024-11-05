import {
    Box,
    Button,
    Flex,
    Heading,
    Image,
    Text,
    useColorModeValue,
    SimpleGrid,
} from "@chakra-ui/react";
import NavBar2 from "../components/navBar2";

function Install() {
    return (
        <Flex direction="column" height="100vh" bg={"black"} color="white">
            {/* Navigation Bar */}
            <NavBar2 />

            {/* Main Content Area */}
            <Flex flex="1" p={8} overflowY="auto" direction="column">
                {/* Hero Section */}
                <Box textAlign="center" mb={10}>
                    <Heading as="h1" size="2xl" mb={4}>
                        Download Musify
                    </Heading>
                    <Text fontSize="lg" mb={6}>
                        Enjoy music wherever you go. Download the app now!
                    </Text>
                    <Button colorScheme="green" size="lg"  target="_blank">
                        Download Now
                    </Button>
                </Box>

                {/* Features Section */}
                <Box mb={10}>
                    <Heading as="h2" size="xl" textAlign="center" mb={6}>
                        Why Download Musify?
                    </Heading>
                    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                        <FeatureCard
                            title="Ad-Free Listening"
                            description="Enjoy uninterrupted music without ads."
                        />
                        <FeatureCard
                            title="Offline Playback"
                            description="Download your favorite songs and listen offline."
                        />
                        <FeatureCard
                            title="High Quality Audio"
                            description="Experience your music in high quality."
                        />
                        <FeatureCard
                            title="Create and Share Playlists"
                            description="Make your playlists and share with friends."
                        />
                    </SimpleGrid>
                </Box>

                {/* Download Options Section */}
                <Box mb={10} textAlign="center">
                    <Heading as="h2" size="xl" mb={6}>
                        Get Musify on Any Device
                    </Heading>
                    <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={10}>
                        <DownloadCard
                            platform="Windows"
                            imgSrc="https://cdn.pixabay.com/photo/2018/05/08/21/29/windows-3384024_1280.png"
                            downloadLink="https://www.spotify.com/in-en/download/windows/"
                        />
                        <DownloadCard
                            platform="macOS"
                            imgSrc="https://i.pinimg.com/474x/77/f0/33/77f033d90e28c29dc6ce7006e66d0caa.jpg"
                            downloadLink="https://www.spotify.com/in-en/download/mac/"
                        />
                        <DownloadCard
                            platform="Linux"
                            imgSrc="https://i.pinimg.com/736x/f9/b7/60/f9b76091fd7d47c630439d84a930d6f5.jpg"
                            downloadLink="https://www.spotify.com/in-en/download/android/"
                        />
                    </SimpleGrid>
                </Box>

                {/* Footer Section */}
                <Box textAlign="center">
                    <Text fontSize="sm" color="gray.400">
                        Musify © 2024 All rights reserved.
                    </Text>
                </Box>
            </Flex>
        </Flex>
    );
}

const FeatureCard = ({ title, description }) => (
    <Box
        p={6}
        borderWidth="1px"
        borderRadius="lg"
        bg={useColorModeValue("gray.800", "gray.700")}
        boxShadow="lg"
    >
        <Heading as="h3" size="lg" mb={2}>
            {title}
        </Heading>
        <Text>{description}</Text>
    </Box>
);

const DownloadCard = ({ platform, imgSrc, downloadLink }) => (
    <Box
        p={4}
        borderWidth="1px"
        borderRadius="lg"
        bg={useColorModeValue("gray.800", "gray.700")}
        boxShadow="lg"
        textAlign="center"
        display="flex"
        flexDirection="column" // Ensure items stack vertically
        alignItems="center" // Center horizontally
        justifyContent="center" // Center vertically
    >
        <Image src={imgSrc} alt={platform} mb={4} boxSize="100px" />
        <Heading as="h4" size="md" mb={2}>
            {platform}
        </Heading>
        <Button colorScheme="green" size="sm" as="a" href={downloadLink} target="_blank">
            Download
        </Button>
    </Box>
);

export default Install;
