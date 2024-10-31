import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
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

  useEffect(() => {
    const fetchTodo = async () => {
      if (!todoId) return;

      const response = await getTodoById(todoId);
      reset({
        title: response?.title || "",
        content: response?.content || "",
      });
    };

    fetchTodo();
  }, [todoId, reset]);

  const onSubmit = async (data: FormData) => {
    if (!todoId) return;

    try {
      await updateTodo(todoId, data);
      navigate(`/todos/${todoId}`);
    } catch (error) {
      console.log("Todo 수정 실패", error);
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
