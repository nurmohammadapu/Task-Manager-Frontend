"use client"


import type { Task } from "@/types/task"
import { formatDistanceToNow } from "date-fns"
import {
  Box,
  Flex,
  Text,
  Badge,
  Checkbox,
  Button,
  useDisclosure,
  Alert,
  CloseButton,
} from "@chakra-ui/react"
import { Edit, Trash2 } from "lucide-react"

interface TaskItemProps {
  task: Task
  onToggleCompletion: (id: string) => void
  onEditTask: (task: Task) => void
  onDeleteTask: (id: string) => void
}

export default function TaskItem({ task, onToggleCompletion, onEditTask, onDeleteTask }: TaskItemProps) {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Work":
        return "blue"
      case "Personal":
        return "green"
      case "Other":
        return "orange"
      default:
        return "gray"
    }
  }

  const handleDelete = () => {
    onDeleteTask(task.id)
    onClose()
  }

  return (
    <Box
      borderLeftWidth="4px"
      borderLeftColor={task.completed ? "green.500" : "blue.500"}
      borderWidth="1px"
      borderRadius="md"
      p={6}
    >
      <Flex gap={4} align="start">
        <Checkbox
          isChecked={task.completed}
          onChange={() => onToggleCompletion(task.id)}
          mt={1}
          colorScheme="green"
        />
        <Box flex="1">
          <Flex justify="space-between" align="center">
            <Text
              fontSize="lg"
              fontWeight="medium"
              textDecoration={task.completed ? "line-through" : "none"}
              color={task.completed ? "gray.500" : "inherit"}
            >
              {task.title}
            </Text>
            <Badge colorScheme={getCategoryColor(task.category)}>{task.category}</Badge>
          </Flex>
          <Text
            fontSize="sm"
            mt={1}
            color={task.completed ? "gray.500" : "gray.600"}
            textDecoration={task.completed ? "line-through" : "none"}
          >
            {task.description}
          </Text>
          <Text fontSize="xs" mt={2} color="gray.500">
            Updated {formatDistanceToNow(new Date(task.updatedAt), { addSuffix: true })}
          </Text>
        </Box>
      </Flex>
      <Flex justify="flex-end" gap={2} mt={4}>
        <Button size="sm" variant="ghost" onClick={() => onEditTask(task)} leftIcon={<Edit size={16} />} >
          Edit
        </Button>
        <Button
          size="sm"
          variant="ghost"
          colorScheme="red"
          onClick={onOpen}
          leftIcon={<Trash2 size={16} />}
        >
          Delete
        </Button>
      </Flex>

      {isOpen && (
        <Alert.Root status="error" variant="solid" borderRadius="md" p={4} mt={4}>
          {/* Custom Icon: Replace with your own or default for error */}
          <Alert.Indicator>
            {/* You can place any custom icon here or use Chakra's default */}
            <Trash2 size={20} />
          </Alert.Indicator>

          <Alert.Content>
            <Alert.Title>Are you sure?</Alert.Title>
            <Alert.Description>
              This action cannot be undone. This will permanently delete the task.
            </Alert.Description>
          </Alert.Content>

          <CloseButton position="absolute" right="8px" top="8px" onClick={onClose} />
          <Button colorScheme="red" onClick={handleDelete} ml={3} mt={2}>
            Delete
          </Button>
          <Button variant="outline" onClick={onClose} ml={3} mt={2}>
            Cancel
          </Button>
        </Alert.Root>
      )}
    </Box>
  )
}
