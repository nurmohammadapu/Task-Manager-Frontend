"use client"

import { Box, Container, Flex, Heading, Text, VStack } from "@chakra-ui/react"
import LoginForm from "@/components/auth/login-form"

export default function LoginPage() {
  return (
    <Container maxW="full" height="100vh" centerContent>
      <Flex direction="column" justify="center" align="center" height="full" width="full">
        <Box width="full" maxW="350px" mx="auto">
          <VStack spacing={6} align="stretch">
            <Box textAlign="center">
              <Heading size="lg" mb={2}>
                Welcome back
              </Heading>
              <Text fontSize="sm" color="gray.500">
                Enter your email and password to sign in to your account
              </Text>
            </Box>
            <LoginForm />
          </VStack>
        </Box>
      </Flex>
    </Container>
  )
}
