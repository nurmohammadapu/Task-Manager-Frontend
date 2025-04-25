"use client"

import { useState } from "react"
// import { useDispatch, useSelector } from "react-redux"
// import type { RootState } from "@/store"
import TaskForm from "@/components/task-form"
import TaskList from "@/components/task-list"
import TaskFilter from "@/components/task-filter"
import { Button, Grid, GridItem, VStack } from "@chakra-ui/react"
import { Plus } from "lucide-react"
import type { Task } from "@/types/task"
// import { setFilterCategory, setFilterStatus, setSearchQuery } from "@/store/filterSlice"

export default function TaskManager() {
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [taskToEdit, setTaskToEdit] = useState<Task | null>(null)
  // const dispatch = useDispatch()
  // const { tasks } = useSelector((state: RootState) => state.tasks)
  // const { category, status, searchQuery } = useSelector((state: RootState) => state.filter)

  const handleEditTask = (task: Task) => {
    setTaskToEdit(task)
    setIsFormOpen(true)
  }

  const handleCloseForm = () => {
    setIsFormOpen(false)
    setTaskToEdit(null)
  }

  const handleFilterChange = (_type: string, _value: string) => {
    // Redux logic is commented out
  }

  const handleSearchChange = (_query: string) => {
    // Redux logic is commented out
  }

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
            currentCategory="all"
            currentStatus="all"
            searchQuery=""
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
