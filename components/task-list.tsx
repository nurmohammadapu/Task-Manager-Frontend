"use client"

// import { useDispatch } from "react-redux"
// import { deleteTask, toggleTaskCompletion } from "@/store/tasksSlice" // Redux logic commented out for now
import type { Task } from "@/types/task"
import TaskItem from "@/components/task-item"
import { Box, Stack, AlertRoot, AlertIndicator, AlertContent, AlertTitle, AlertDescription, Button } from "@chakra-ui/react"
import { ClipboardList } from "lucide-react"

interface TaskListProps {
  tasks: Task[]
  onEditTask: (task: Task) => void
}

export default function TaskList({ tasks, onEditTask }: TaskListProps) {
  // const dispatch = useDispatch() // Dispatch logic commented out

  // const handleToggleCompletion = (id: string) => {
  //   dispatch(toggleTaskCompletion(id)) // Redux action commented out
  // }

  // const handleDeleteTask = (id: string) => {
  //   dispatch(deleteTask(id)) // Redux action commented out
  // }

  if (tasks.length === 0) {
    return (
      <Box>
      <AlertRoot status="info" variant="subtle" bg="gray.100" borderRadius="md" alignItems="start">
        <AlertIndicator>
          <ClipboardList size={20} />
        </AlertIndicator>
        <AlertContent>
          <AlertTitle>No tasks available yet!</AlertTitle>
          <AlertDescription>
            You can add tasks by clicking the &aposAdd Task&apos button.
          </AlertDescription>
        </AlertContent>
        <Button colorScheme="teal" variant="solid" mt={3}>
          Add Task
        </Button>
      </AlertRoot>
      </Box>

    )
  }

  return (
    <Stack spacing={4}>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          // onToggleCompletion={handleToggleCompletion} // Commented out
          onEditTask={onEditTask}
          // onDeleteTask={handleDeleteTask} // Commented out
        />
      ))}
    </Stack>
  )
}
