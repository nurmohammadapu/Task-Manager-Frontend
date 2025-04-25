"use client"

import {
  Box,
  Heading,
  Input,
  InputGroup,
  Stack,
  Text,
  RadioGroup,
} from "@chakra-ui/react"


interface TaskFilterProps {
  onFilterChange: (type: string, value: string) => void
  onSearchChange: (query: string) => void
  currentCategory: string
  currentStatus: string
  searchQuery: string
}

const categories = [
  { label: "All", value: "all" },
  { label: "Work", value: "Work" },
  { label: "Personal", value: "Personal" },
  { label: "Other", value: "Other" },
]

const statuses = [
  { label: "All", value: "all" },
  { label: "Completed", value: "completed" },
  { label: "Pending", value: "pending" },
]

export default function TaskFilter({
  onFilterChange,
  onSearchChange,
  currentCategory,
  currentStatus,
  searchQuery,
}: TaskFilterProps) {
  return (
    <Box width="full" borderWidth={1} borderRadius="md" boxShadow="sm">
      <Box p={4}>
        <Heading size="md">Filter Tasks</Heading>
      </Box>
      <Box p={4}>
        <Stack spacing={6}>
          {/* Search Input */}
          <Box>
            <InputGroup>
              <Input
                aria-label="Search tasks"
                placeholder="Search tasks..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                size="md"
                variant="outline"
              />
            </InputGroup>
          </Box>

          {/* Category Filter */}
          <Box>
            <Text fontWeight="medium" mb={2}>
              Category
            </Text>
            <RadioGroup.Root
              value={currentCategory}
              onValueChange={(e) => onFilterChange("category", e.value)}
              orientation="vertical"
            >
              <Stack spacing={2}>
                {categories.map((item) => (
                  <RadioGroup.Item key={item.value} value={item.value}>
                    <RadioGroup.ItemHiddenInput />
                    <RadioGroup.ItemIndicator />
                    <RadioGroup.ItemText>{item.label}</RadioGroup.ItemText>
                  </RadioGroup.Item>
                ))}
              </Stack>
            </RadioGroup.Root>
          </Box>

          {/* Status Filter */}
          <Box>
            <Text fontWeight="medium" mb={2}>
              Status
            </Text>
            <RadioGroup.Root
              value={currentStatus}
              onValueChange={(e) => onFilterChange("status", e.value)}
              orientation="vertical"
            >
              <Stack spacing={2}>
                {statuses.map((item) => (
                  <RadioGroup.Item key={item.value} value={item.value}>
                    <RadioGroup.ItemHiddenInput />
                    <RadioGroup.ItemIndicator />
                    <RadioGroup.ItemText>{item.label}</RadioGroup.ItemText>
                  </RadioGroup.Item>
                ))}
              </Stack>
            </RadioGroup.Root>
          </Box>
        </Stack>
      </Box>
    </Box>
  )
}


