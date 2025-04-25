"use client"

import { Box, Container, Heading } from "@chakra-ui/react"
import TaskManager from "@/components/task-manager"


export default function TasksPage() {
  return (
    <Container maxW="container.lg" py={8} px={4}>
      <Heading as="h1" size="xl" mb={8}>
        Task Manager
      </Heading>
      <Box>
        <TaskManager />
      </Box>
    </Container>
  )
}
