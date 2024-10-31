import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import { signin } from "../api/auth";

import Form from "../components/Form";
import { Button } from "../components/Button";

interface FormData {
  email: string;
  password: string;
}

function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ mode: "onTouched" });
  const navigate = useNavigate();

  const onSubmit = async (data: FormData) => {
    try {
      await signin(data);
      navigate("/");
    } catch (error) {
      console.log("로그인 실패", error);
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Item id="email" isError={!!errors.email}>
        <Form.Label>이메일</Form.Label>
        <Form.Input
          type="email"
          placeholder="이메일을 입력해주세요"
          autoComplete="username"
          {...register("email", {
            required: "이메일을 입력해주세요.",
            pattern: {
              value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i,
              message: "잘못된 이메일 형식입니다.",
            },
          })}
        />
        <Form.ErrorMessage>{errors.email?.message}</Form.ErrorMessage>
      </Form.Item>

      <Form.Item id="password" isError={!!errors.password}>
        <Form.Label>비밀번호</Form.Label>
        <Form.Input
          type="password"
          placeholder="비밀번호를 입력해주세요"
          autoComplete="current-password"
          {...register("password", {
            required: "비밀번호를 입력해주세요.",
            minLength: {
              value: 8,
              message: "비밀번호를 8자 이상 입력해주세요.",
            },
          })}
        />
        <Form.ErrorMessage>{errors.password?.message}</Form.ErrorMessage>
      </Form.Item>

      <Button className="mt-2" type="submit" disabled={!isValid}>
        로그인
      </Button>
    </Form>
  );
}

export default SignIn;
