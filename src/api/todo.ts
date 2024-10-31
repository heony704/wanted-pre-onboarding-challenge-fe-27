import instance from "./instance";

interface TodoRequest {
  title: string;
  content: string;
}

interface Todo {
  title: string;
  content: string;
  id: string;
  createdAt: string;
  updatedAt: string;
}

interface TodoResponse {
  data: Todo | null;
}

interface TodosResponse {
  data: Todo[];
}

export const getTodos = async () => {
  const response = await instance.get<TodosResponse>("/todos", {
    withAuth: true,
  });

  return response.data.data;
};

export const getTodoById = async (id: string) => {
  const response = await instance.get<TodoResponse>(`/todos/${id}`, {
    withAuth: true,
  });

  return response.data.data;
};

export const createTodo = async (data: TodoRequest) => {
  const response = await instance.post<TodoResponse>("/todos", data, {
    withAuth: true,
  });

  return response.data.data;
};

export const updateTodo = async (data: TodoRequest) => {
  const response = await instance.put<TodoResponse>("/todos", data, {
    withAuth: true,
  });

  return response.data.data;
};

export const deleteTodo = async (id: string) => {
  const response = await instance.delete<TodoResponse>(`/todos/${id}`, {
    withAuth: true,
  });

  return response.data.data;
};
