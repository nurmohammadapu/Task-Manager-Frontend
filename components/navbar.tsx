"use client"

import Link from "next/link"
import {
  Box,
  Flex,
  HStack,
  Text,
  Avatar,
  Button,
  Menu
} from "@chakra-ui/react"
import { ListTodo, User } from "lucide-react"
import LogoutButton from "@/components/auth/logout-button"

export default function Navbar() {


  // Temporary mock auth data
  const isAuthenticated = false
  const user = {
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    image: "",
  }

  // if (pathname === "/login" || pathname === "/signup") return null

  return (
    <Box as="header" bg="white" borderBottom="1px" borderColor="gray.200" w="100%">
      <Flex justify="space-between" align="center" h="64px" px={{ base: 4, md: 6 }} maxW="80%" mx="auto">
        {/* Logo */}
        <Link href="/" passHref>
          <HStack spacing={2} fontWeight="semibold" cursor="pointer">
            <Box boxSize={6}>
              <ListTodo size={24} />
            </Box>
            <Text fontSize="lg">TaskMaster</Text>
          </HStack>
        </Link>

        {/* Nav Links */}
        <HStack spacing={6} display={{ base: "none", md: "flex" }}>
          <Link href="/" passHref>
            <Button variant="link" fontSize="sm" _hover={{ textDecoration: "underline" }}>
              Home
            </Button>
          </Link>
          <Link href="/tasks" passHref>
            <Button variant="link" fontSize="sm" _hover={{ textDecoration: "underline" }}>
              Tasks
            </Button>
          </Link>
        </HStack>

        {/* Auth Buttons / Avatar Menu */}
        <HStack spacing={4}>
          {isAuthenticated ? (
            <Menu.Root>
              <Menu.Trigger asChild>
                <Button variant="ghost" borderRadius="full" p={0} minW={0}>
                  <Avatar size="sm" src={user?.image || "/placeholder.svg"} name={user?.firstName} />
                </Button>
              </Menu.Trigger>
              <Menu.Positioner>
                <Menu.Content>
                  <Box px={3} py={2}>
                    <Text fontWeight="bold" fontSize="sm">
                      {user?.firstName} {user?.lastName}
                    </Text>
                    <Text fontSize="xs" color="gray.500">
                      {user?.email}
                    </Text>
                  </Box>
                  <Menu.Separator />
                  <Menu.Item asChild>
                    <Link href="/profile">
                      <HStack>
                        <User size={16} />
                        <Text ml={2}>Profile</Text>
                      </HStack>
                    </Link>
                  </Menu.Item>
                  <Menu.Separator />
                  <Menu.Item asChild>
                    <Box>
                      <LogoutButton />
                    </Box>
                  </Menu.Item>
                </Menu.Content>
              </Menu.Positioner>
            </Menu.Root>
          ) : (
            <HStack spacing={2}>
              <Link href="/login" passHref>
                <Button variant="ghost">Login</Button>
              </Link>
              <Link href="/signup" passHref>
                <Button colorScheme="blue">Sign Up</Button>
              </Link>
            </HStack>
          )}
        </HStack>
      </Flex>
    </Box>
  )
}
