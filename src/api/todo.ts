import instance from "./instance";

interface TodoRequest {
  title: string;
  content: string;
  priority?: "urgent" | "normal" | "low";
}

interface Todo {
  title: string;
  content: string;
  id: string;
  createdAt: string;
  updatedAt: string;
  priority?: "urgent" | "normal" | "low";
}

interface TodoResponse {
  data: Todo;
}

interface EmptyResponse {
  data: null;
}

interface TodosResponse {
  data: Todo[];
}

interface GetTodosParams {
  sort?: "createdAt" | "updatedAt" | "priority";
  order?: "asc" | "desc";
  priority?: "urgent" | "normal" | "low";
  keyword?: string;
  countOnly?: boolean;
}

export const getTodos = async (params?: GetTodosParams) => {
  const response = await instance.get<TodosResponse>("/todos", {
    params,
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

export const updateTodo = async (id: string, data: TodoRequest) => {
  const response = await instance.put<TodoResponse>(`/todos/${id}`, data, {
    withAuth: true,
  });

  return response.data.data;
};

export const deleteTodo = async (id: string) => {
  const response = await instance.delete<EmptyResponse>(`/todos/${id}`, {
    withAuth: true,
  });

  return response.data.data;
};
