"use client"

import React, { useEffect, useState } from "react"
import { v4 as uuidv4 } from "uuid"
// import { addTask, updateTask } from "@/store/tasksSlice"

import {
  Box,
  Button,
  Input,
  Textarea,
  Select,
  Switch,
  Heading,
  HStack,
  VStack,
  Flex,
  Spacer,
  IconButton,
  Field
} from "@chakra-ui/react"

import { RxCross2 } from "react-icons/rx"
import type { Task } from "@/types/task"

interface TaskFormProps {
  onClose: () => void
  taskToEdit: Task | null
}

export default function TaskForm({ onClose, taskToEdit }: TaskFormProps) {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [category, setCategory] = useState("Work")
  const [completed, setCompleted] = useState(false)
  const [errors, setErrors] = useState({ title: "", description: "" })

  useEffect(() => {
    if (taskToEdit) {
      setTitle(taskToEdit.title)
      setDescription(taskToEdit.description)
      setCategory(taskToEdit.category)
      setCompleted(taskToEdit.completed)
    }
  }, [taskToEdit])

  const validateForm = () => {
    let isValid = true
    const newErrors = { title: "", description: "" }

    if (!title.trim()) {
      newErrors.title = "Title is required"
      isValid = false
    }

    if (!description.trim()) {
      newErrors.description = "Description is required"
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return

    const taskData: Task = {
      id: taskToEdit ? taskToEdit.id : uuidv4(),
      title,
      description,
      category,
      completed,
      createdAt: taskToEdit ? taskToEdit.createdAt : new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }

    // taskToEdit ? dispatch(updateTask(taskData)) : dispatch(addTask(taskData))
    onClose()
  }

  return (
    <Box bg="#fff" rounded="lg" shadow="md" p={6} w="full">
      <Flex align="center" mb={4}>
        <Heading size="md">{taskToEdit ? "Edit Task" : "Add New Task"}</Heading>
        <Spacer />
        <IconButton
          aria-label="Close"
          icon={<RxCross2 />}
          size="sm"
          variant="ghost"
          onClick={onClose}
        />
      </Flex>

      <form onSubmit={handleSubmit}>
        <VStack spacing={4} align="stretch">
          <Field.Root>
            <Field.Label htmlFor="title">Title</Field.Label>
            <Input
              id="title"
              placeholder="Enter task title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            {errors.title && <Field.ErrorText>{errors.title}</Field.ErrorText>}
          </Field.Root>

          <Field.Root>
            <Field.Label htmlFor="description">Description</Field.Label>
            <Textarea
              id="description"
              placeholder="Enter task description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
            />
            {errors.description && <Field.ErrorText>{errors.description}</Field.ErrorText>}
          </Field.Root>

          <Field.Label htmlFor="category">Category</Field.Label>
          <Select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="Work">Work</option>
            <option value="Personal">Personal</option>
            <option value="Other">Other</option>
          </Select>

          <Field.Label display="flex" alignItems="center">
            <Switch
              id="completed"
              isChecked={completed}
              onChange={(e) => setCompleted(e.target.checked)}
              mr={2}
            />
            Mark as completed
          </Field.Label>

          <HStack justify="flex-end">
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue" type="submit">
              {taskToEdit ? "Update Task" : "Add Task"}
            </Button>
          </HStack>
        </VStack>
      </form>
    </Box>
  )
}
