import {
    Box,
    Flex,
    Heading,
    Text,
    Button,
    SimpleGrid,
    useColorModeValue,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Icon,
    Image,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons"; // For checkmarks
import NavBar2 from "../components/navBar2";
import MyLibrary from "../components/MyLibrary";
import Player from "../components/player";
import { useNavigate } from "react-router-dom";

function PremiumPage() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/payment')
    }
    return (
        <Flex direction="column" height="100vh" bg={'black'} color="white">
            {/* NavBar */}
            <NavBar2 />

            {/* Main Content Area */}
            <Flex flex="1" overflow="hidden">
                {/* Left Sidebar */}
                <Box width={{ base: "100%", md: "350px" }} display={{ base: "none", md: "block" }}>
                    <MyLibrary />
                </Box>

                {/* Page Content */}
                <Box flex="1" p={8} overflowY="auto">
                    {/* Hero Section */}
                    <Flex
                        direction={{ base: "column", md: "row" }}
                        justify="space-between"
                        align="center"
                        p={8}
                        bg="blue.700"
                        borderBottomRadius="xl"
                    >
                        <Box flex="1" p={8}>
                            <Heading as="h1" size="2xl" mb={4}>
                                Get Premium. Free for 1 month.
                            </Heading>
                            <Text fontSize="lg" mb={6}>
                                Enjoy ad-free music listening, offline playback, and more.
                            </Text>
                            
                            <Text fontSize="sm">Offer valid for new users only.</Text>
                        </Box>
                        
                    </Flex>

                    {/* Scrollable Pricing Section */}
                    <Box p={8} bg="gray.900" maxHeight="400px" overflowY="auto">
                        <Heading as="h2" size="xl" textAlign="center" mb={6}>
                            Pick your Premium
                        </Heading>
                        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
                            {/* Pricing Cards */}
                            {["Individual", "Duo", "Family", "Student"].map((plan, index) => (
                                <Box
                                    key={plan}
                                    p={6}
                                    borderWidth="1px"
                                    borderRadius="md"
                                    bg="gray.800"
                                    boxShadow="lg"
                                >
                                    <Heading as="h3" size="md" mb={4}>
                                        {plan}
                                    </Heading>
                                    <Text mb={4}>${[9.99, 12.99, 14.99, 4.99][index]}/month after offer period</Text>
                                    <Text mb={4}>{[1, 2, 6, 1][index]} account{[2, 6].includes(index) ? "s" : ""}</Text>
                                    <Button colorScheme="green" width="full" onClick={handleClick}>
                                        Get Started
                                    </Button>
                                </Box>
                            ))}
                        </SimpleGrid>
                    </Box>

                    {/* Comparison Table Section */}
                    <Box mt={12} p={8} bg="gray.800" borderRadius="xl" height={700} overflowY={'auto'}>
                        <Heading as="h2" size="xl" textAlign="center" mb={6}>
                            Experience the difference
                        </Heading>
                        <Text textAlign="center" mb={6}>
                            Go Premium and enjoy full control of your listening. Cancel anytime.
                        </Text>

                        <Table variant="simple" colorScheme="gray" size="lg">
                            <Thead>
                                <Tr>
                                    <Th>Features</Th>
                                    <Th textAlign="center">Musify's Free Plan</Th>
                                    <Th textAlign="center">Premium</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {[
                                    "Ad-free music listening",
                                    "Download songs",
                                    "Play songs in any order",
                                    "High quality audio",
                                    "Listen with friends in real-time",
                                    "Organize listening queue"
                                ].map(feature => (
                                    <Tr key={feature}>
                                        <Td>{feature}</Td>
                                        <Td textAlign="center">—</Td>
                                        <Td textAlign="center">
                                            <Icon as={CheckIcon} color="green.400" />
                                        </Td>
                                    </Tr>
                                ))}
                            </Tbody>
                        </Table>
                    </Box>
                </Box>
            </Flex>

            {/* Player Component at the Bottom */}
            <Box position="sticky" bottom="0" width="100%">
                <Player />
            </Box>
        </Flex>
    );
}

export default PremiumPage;
