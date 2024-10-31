import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";

import { getTodoById, updateTodo } from "../api/todo";

import { Button } from "../components/Button";
import Form from "../components/Form";

interface FormData {
  title: string;
  content: string;
}

function EditTodo() {
  const { todoId } = useParams<{ todoId: string }>();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<FormData>({
    mode: "onTouched",
  });
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { data: todo } = useQuery({
    queryKey: ["todos", todoId],
    queryFn: () => getTodoById(todoId!),
    enabled: !!todoId,
  });

  useEffect(() => {
    if (todo) {
      reset({
        title: todo.title || "",
        content: todo.content || "",
      });
    }
  }, [todo, reset]);

  const updateMutation = useMutation({
    mutationFn: (updatedData: FormData) => updateTodo(todoId!, updatedData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
      navigate(`/todos/${todoId}`);
    },
    onError: (error) => {
      console.log("Todo 수정 실패", error);
    },
  });

  const onSubmit = (data: FormData) => {
    if (todoId) {
      updateMutation.mutate(data);
    }
  };

  return (
    <Form className="h-full" onSubmit={handleSubmit(onSubmit)}>
      <Form.Item id="title" isError={!!errors.title}>
        <Form.Input
          placeholder="제목을 입력해주세요"
          {...register("title", {
            required: "제목을 입력해주세요.",
          })}
        />
      </Form.Item>

      <Form.Item className="grow" id="content" isError={!!errors.content}>
        <Form.Textarea
          className="h-full"
          placeholder="내용을 입력해주세요"
          {...register("content", {
            required: "내용을 입력해주세요.",
          })}
        />
      </Form.Item>

      <Button className="ml-auto w-[100px]" type="submit" disabled={!isValid}>
        수정하기
      </Button>
    </Form>
  );
}

export default EditTodo;
