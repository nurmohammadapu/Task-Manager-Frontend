import Link from "next/link";
import { Button, Box, Container, Flex, Heading, Text, Grid,VStack, HStack } from "@chakra-ui/react";
import { ArrowRight, CheckCircle, ListTodo } from "lucide-react";


export default function Home() {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <main flex="1">
        <Box as="section" py={{ base: 12, md: 24 }} bg="gray.50">
          <Container maxW="container.xl">
            <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={12}>
              <VStack align="flex-start" spacing={6}>
                <Heading as="h1" size="2xl" fontWeight="bold" lineHeight="shorter">
                  Manage Your Tasks Efficiently
                </Heading>
                <Text fontSize="xl" color="gray.600" maxW="600px">
                  Stay organized, focused, and in control with our intuitive task management solution.
                </Text>
                <Link href="/tasks" passHref>
                  <Button size="lg" colorScheme="blue" rightIcon={<ArrowRight size={16} />}>
                    Get Started
                  </Button>
                </Link>
              </VStack>
              <Box position="relative">
                <Box p={6} bg="gray.200" borderRadius="md" shadow="lg">
                  <VStack align="flex-start" spacing={4}>
                    <HStack spacing={2}>
                      <CheckCircle size={20} color="green" />
                      <Text fontWeight="medium">Complete project proposal</Text>
                    </HStack>
                    <HStack spacing={2}>
                      <Box as="span" width="5" height="5" borderRadius="full" border="2px" borderColor="gray.400" />
                      <Text fontWeight="medium">Research new technologies</Text>
                    </HStack>
                    <HStack spacing={2}>
                      <Box as="span" width="5" height="5" borderRadius="full" border="2px" borderColor="gray.400" />
                      <Text fontWeight="medium">Schedule team meeting</Text>
                    </HStack>
                    <HStack spacing={2}>
                      <CheckCircle size={20} color="green" />
                      <Text fontWeight="medium">Update documentation</Text>
                    </HStack>
                  </VStack>
                </Box>
                <Box position="absolute" top="-6" left="-6" width="24" height="24" bg="blue.100" borderRadius="full" filter="blur(30px)" />
                <Box position="absolute" bottom="-6" right="-6" width="24" height="24" bg="blue.100" borderRadius="full" filter="blur(30px)" />
              </Box>
            </Grid>
          </Container>
        </Box>
        <Box as="section" py={{ base: 12, md: 24 }} bg="gray.100">
          <Container maxW="container.xl">
            <VStack spacing={6} textAlign="center">
              <Heading as="h2" size="xl" fontWeight="bold">
                Key Features
              </Heading>
              <Text fontSize="xl" color="gray.600" maxW="900px">
                Everything you need to stay organized and productive
              </Text>
            </VStack>
            <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={8} mt={12}>
              <Box p={6} bg="white" borderRadius="md" shadow="md" border="1px" borderColor="gray.200">
                <VStack align="center" spacing={4}>
                  <Box p={2} bg="blue.100" borderRadius="full">
                    <ListTodo size={24} color="blue" />
                  </Box>
                  <Heading as="h3" size="lg" fontWeight="bold">
                    Task Management
                  </Heading>
                  <Text color="gray.600" textAlign="center">
                    Create, edit, and delete tasks with ease. Organize your workflow efficiently.
                  </Text>
                </VStack>
              </Box>
              <Box p={6} bg="white" borderRadius="md" shadow="md" border="1px" borderColor="gray.200">
                <VStack align="center" spacing={4}>
                  <Box p={2} bg="blue.100" borderRadius="full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M8 2h8" />
                      <path d="M9 2v2.789a4 4 0 0 1-.672 2.219l-.656.984A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-9.789a4 4 0 0 0-.672-2.219l-.656-.984A4 4 0 0 1 15 4.788V2" />
                      <path d="M7 15a6.472 6.472 0 0 1 5 0 6.47 6.47 0 0 0 5 0" />
                    </svg>
                  </Box>
                  <Heading as="h3" size="lg" fontWeight="bold">
                    Categorization
                  </Heading>
                  <Text color="gray.600" textAlign="center">
                    Organize tasks into Work, Personal, and Other categories for better clarity.
                  </Text>
                </VStack>
              </Box>
              <Box p={6} bg="white" borderRadius="md" shadow="md" border="1px" borderColor="gray.200">
                <VStack align="center" spacing={4}>
                  <Box p={2} bg="blue.100" borderRadius="full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M10 2h4" />
                      <path d="M12 14v-4" />
                      <path d="M4 13a8 8 0 0 1 8-7 8 8 0 0 1 8 7 8 8 0 0 1-8 7 8 8 0 0 1-8-7z" />
                      <path d="M12 10v4" />
                    </svg>
                  </Box>
                  <Heading as="h3" size="lg" fontWeight="bold">
                    Status Tracking
                  </Heading>
                  <Text color="gray.600" textAlign="center">
                    Mark tasks as completed or pending to track your progress effectively.
                  </Text>
                </VStack>
              </Box>
            </Grid>
          </Container>
        </Box>
        <Box as="section" py={{ base: 12, md: 24 }} bg="gray.50">
          <Container maxW="container.xl">
            <VStack spacing={6} textAlign="center">
              <Heading as="h2" size="xl" fontWeight="bold">
                Ready to Get Started?
              </Heading>
              <Text fontSize="xl" color="gray.600" maxW="600px">
                Start managing your tasks efficiently today.
              </Text>
              <Link href="/tasks" passHref>
                <Button size="lg" colorScheme="blue" rightIcon={<ArrowRight size={16} />}>
                  Go to Task Manager
                </Button>
              </Link>
            </VStack>
          </Container>
        </Box>
      </main>
      <footer>
        <Container maxW="container.xl" py={4}>
          <Flex direction="column" align="center" justify="space-between" wrap="wrap" gap={4}>
            <Text fontSize="sm" color="gray.600">
              &copy; {new Date().getFullYear()} TaskMaster. All rights reserved.
            </Text>
            <HStack spacing={6}>
              <Link href="#" passHref>
                <Button variant="link" fontSize="sm" color="gray.600">
                  Terms
                </Button>
              </Link>
              <Link href="#" passHref>
                <Button variant="link" fontSize="sm" color="gray.600">
                  Privacy
                </Button>
              </Link>
            </HStack>
          </Flex>
        </Container>
      </footer>
    </Box>
  );
}
