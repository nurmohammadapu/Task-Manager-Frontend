"use client"

import { useState } from "react"
// import { useDispatch, useSelector } from "react-redux" // Redux logic commented out for now
// import type { RootState } from "@/store" // Redux types commented out
import TaskForm from "@/components/task-form"
import TaskList from "@/components/task-list"
import TaskFilter from "@/components/task-filter"
import { Button, Grid, GridItem, VStack } from "@chakra-ui/react"
import { Plus } from "lucide-react"
import type { Task } from "@/types/task"
// import { setFilterCategory, setFilterStatus, setSearchQuery } from "@/store/filterSlice" // Redux actions commented out

export default function TaskManager() {
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [taskToEdit, setTaskToEdit] = useState<Task | null>(null)
  // const dispatch = useDispatch() // Dispatch logic commented out
  // const { tasks } = useSelector((state: RootState) => state.tasks) // Redux state selection commented out
  // const { category, status, searchQuery } = useSelector((state: RootState) => state.filter) // Redux state selection commented out

  const handleEditTask = (task: Task) => {
    setTaskToEdit(task)
    setIsFormOpen(true)
  }

  const handleCloseForm = () => {
    setIsFormOpen(false)
    setTaskToEdit(null)
  }

  const handleFilterChange = (type: string, value: string) => {
    // if (type === "category") {
    //   dispatch(setFilterCategory(value)) // Redux action commented out
    // } else if (type === "status") {
    //   dispatch(setFilterStatus(value)) // Redux action commented out
    // }
  }

  const handleSearchChange = (query: string) => {
    // dispatch(setSearchQuery(query)) // Redux action commented out
  }

  // Sample filteredTasks data (for now using placeholder data)
  const filteredTasks: Task[] = [] // Placeholder for filtered tasks

  return (
    <Grid templateColumns={{ base: "1fr", lg: "1fr 3fr" }} gap={6}>
      <GridItem>
        <VStack position="sticky" top={4} spacing={6} align="stretch">
          <Button onClick={() => setIsFormOpen(true)} size="lg" width="full" leftIcon={<Plus size={18} />}>
            Add New Task
          </Button>
          <TaskFilter
            onFilterChange={handleFilterChange}
            onSearchChange={handleSearchChange}
            currentCategory="all" // Placeholder value
            currentStatus="all" // Placeholder value
            searchQuery="" // Placeholder value
          />
        </VStack>
      </GridItem>
      <GridItem>
        {isFormOpen ? (
          <TaskForm onClose={handleCloseForm} taskToEdit={taskToEdit} />
        ) : (
          <TaskList tasks={filteredTasks} onEditTask={handleEditTask} />
        )}
      </GridItem>
    </Grid>
  )
}
