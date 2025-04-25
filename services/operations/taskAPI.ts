import axios from 'axios';

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL + '/api/v1/task';

interface Task {
  _id: string;
  title: string;
  description: string;
  category: string;
  status: 'Completed' | 'Pending';
  user: string;
  createdAt: string;
}

interface CreateTaskParams {
  title: string;
  description?: string;
  category: 'Work' | 'Personal' | 'Other';
  status: 'Completed' | 'Pending';
  user: string;
}

interface UpdateTaskParams {
  title?: string;
  description?: string;
  category?: 'Work' | 'Personal' | 'Other';
  status?: 'Completed' | 'Pending';
}

export const taskApi = {
  // Get all tasks for a specific user
  async getTasks(userId: string): Promise<Task[]> {
    try {
      const response = await axios.get(`${baseURL}/${userId}`);
      return response.data.tasks;
    } catch (error) {
      console.error('Failed to get tasks', error);
      throw error;
    }
  },

  // Get a task by ID
  async getTaskById(taskId: string): Promise<Task> {
    try {
      const response = await axios.get(`${baseURL}/task/${taskId}`);
      return response.data.task;
    } catch (error) {
      console.error('Failed to get task', error);
      throw error;
    }
  },

  // Create a new task
  async createTask(params: CreateTaskParams): Promise<Task> {
    try {
      const response = await axios.post(baseURL, params);
      return response.data.task;
    } catch (error) {
      console.error('Failed to create task', error);
      throw error;
    }
  },

  // Update a task by ID
  async updateTask(taskId: string, params: UpdateTaskParams): Promise<Task> {
    try {
      const response = await axios.put(`${baseURL}/${taskId}`, params);
      return response.data.task;
    } catch (error) {
      console.error('Failed to update task', error);
      throw error;
    }
  },

  // Delete a task by ID
  async deleteTask(taskId: string): Promise<void> {
    try {
      await axios.delete(`${baseURL}/${taskId}`);
    } catch (error) {
      console.error('Failed to delete task', error);
      throw error;
    }
  },

  // Toggle task status (Completed/Pending)
  async toggleTaskStatus(taskId: string, status: 'Completed' | 'Pending'): Promise<Task> {
    try {
      const response = await axios.put(`${baseURL}/status/${taskId}`, { status });
      return response.data.task;
    } catch (error) {
      console.error('Failed to update task status', error);
      throw error;
    }
  },

  // Get tasks by category (Work, Personal, Other)
  async getTasksByCategory(userId: string, category: 'Work' | 'Personal' | 'Other'): Promise<Task[]> {
    try {
      const response = await axios.get(`${baseURL}/${userId}/category/${category}`);
      return response.data.tasks;
    } catch (error) {
      console.error('Failed to get tasks by category', error);
      throw error;
    }
  },

  // Get all pending tasks for a user
  async getPendingTasks(userId: string): Promise<Task[]> {
    try {
      const response = await axios.get(`${baseURL}/pending/${userId}`);
      return response.data.tasks;
    } catch (error) {
      console.error('Failed to get pending tasks', error);
      throw error;
    }
  },

  // Get all completed tasks for a user
  async getCompletedTasks(userId: string): Promise<Task[]> {
    try {
      const response = await axios.get(`${baseURL}/completed/${userId}`);
      return response.data.tasks;
    } catch (error) {
      console.error('Failed to get completed tasks', error);
      throw error;
    }
  },

  // Search tasks by title
  async searchTasks(query: string): Promise<Task[]> {
    try {
      const response = await axios.get(`${baseURL}/search`, { params: { query } });
      return response.data.tasks;
    } catch (error) {
      console.error('Failed to search tasks', error);
      throw error;
    }
  }
};
