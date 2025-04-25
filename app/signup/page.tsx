"use client"

import { Box, Container, Flex, Heading, Text, VStack } from "@chakra-ui/react"
import SignupForm from "@/components/auth/signup-form"

export default function SignupPage() {
  return (
    <Container maxW="full" height="100vh" centerContent>
      <Flex direction="column" justify="center" align="center" height="full" width="full">
        <Box width="full" maxW="450px" mx="auto">
          <VStack spacing={6} align="stretch">
            <Box textAlign="center">
              <Heading size="lg" mb={2}>
                Create an account
              </Heading>
              <Text fontSize="sm" color="gray.500">
                Enter your details below to create your account
              </Text>
            </Box>
            <SignupForm />
          </VStack>
        </Box>
      </Flex>
    </Container>
  )
}
