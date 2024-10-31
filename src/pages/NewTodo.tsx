import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import { createTodo } from "../api/todo";

import { Button } from "../components/Button";
import Card from "../components/Card";
import Form from "../components/Form";

interface FormData {
  title: string;
  content: string;
}

function NewTodo() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ mode: "onTouched" });
  const navigate = useNavigate();

  const onSubmit = async (data: FormData) => {
    console.log(data);
    try {
      await createTodo(data);
      navigate("/todos");
    } catch (error) {
      console.log("Todo 만들기 실패", error);
    }
  };

  return (
    <Card className="flex h-[500px] w-full max-w-[500px]">
      <Form onSubmit={handleSubmit(onSubmit)}>
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
          추가하기
        </Button>
      </Form>
    </Card>
  );
}

export default NewTodo;
