import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Radio,
    RadioGroup,
    Stack,
    Text,
    useColorModeValue,
    useBreakpointValue,
    Image,
} from "@chakra-ui/react";
import NavBar2 from "../components/navBar2";

function PaymentPage() {
    return (
        <Flex direction="column" height="100vh" bg={useColorModeValue("gray.900", "gray.800")} color="white">
            {/* Navigation Bar */}
            <NavBar2 />

            {/* Main Content Area */}
            <Flex flex="1" p={8} overflowY="auto" direction="column">
                <Heading as="h1" size="2xl" mb={6} textAlign="center">
                    Payment Information
                </Heading>

                {/* User Information Section */}
                <Box mb={6} borderRadius="lg" bg={useColorModeValue("gray.800", "gray.700")} p={6}>
                    <Heading as="h3" size="lg" mb={4}>
                        Your Details
                    </Heading>
                    <FormControl mb={4}>
                        <FormLabel>Name</FormLabel>
                        <Input placeholder="Enter your name" variant="flushed" />
                    </FormControl>
                    <FormControl mb={4}>
                        <FormLabel>Email</FormLabel>
                        <Input type="email" placeholder="Enter your email" variant="flushed" />
                    </FormControl>
                </Box>

                {/* Payment Method Section */}
                <Box mb={6} borderRadius="lg" bg={useColorModeValue("gray.800", "gray.700")} p={6}>
                    <Heading as="h3" size="lg" mb={4}>
                        Payment Method
                    </Heading>
                    <RadioGroup defaultValue="credit">
                        <Stack spacing={4}>
                            <Radio value="credit" size="lg">
                                Credit/Debit Card
                            </Radio>
                            <Radio value="paypal" size="lg">
                                PayPal
                            </Radio>
                            <Radio value="googlePay" size="lg">
                                Google Pay
                            </Radio>
                        </Stack>
                    </RadioGroup>
                </Box>

                {/* Card Details Section */}
                <Box mb={6} borderRadius="lg" bg={useColorModeValue("gray.800", "gray.700")} p={6}>
                    <Heading as="h3" size="lg" mb={4}>
                        Card Details
                    </Heading>
                    <FormControl mb={4}>
                        <FormLabel>Card Number</FormLabel>
                        <Input placeholder="1234 5678 9012 3456" variant="flushed" />
                    </FormControl>
                    <Flex mb={4}>
                        <FormControl flex="1" mr={4}>
                            <FormLabel>Expiry Date</FormLabel>
                            <Input placeholder="MM/YY" variant="flushed" />
                        </FormControl>
                        <FormControl flex="1">
                            <FormLabel>CVV</FormLabel>
                            <Input placeholder="123" variant="flushed" />
                        </FormControl>
                    </Flex>
                </Box>

                {/* Summary Section */}
                <Box mb={6} p={4} bg="gray.800" borderRadius="md" boxShadow="md">
                    <Heading as="h3" size="lg" mb={4}>
                        Order Summary
                    </Heading>
                    <Text mb={2}>Plan: <strong>Individual</strong></Text>
                    <Text mb={2}>Price: <strong>$9.99/month</strong></Text>
                    <Text fontWeight="bold" fontSize="lg">Total: <strong>$9.99</strong></Text>
                </Box>

                {/* Confirm Payment Button */}
                <Button
                    colorScheme="green"
                    fontSize={32}
                    mt={4}
                    width="300px" // Adjust the width to your preference
                    _hover={{ bg: "green.600" }}
                    transition="background 0.3s ease"
                    alignSelf={'center'}
                >
                    Confirm Payment
                </Button>
            </Flex>
        </Flex>
    );
}

export default PaymentPage;
