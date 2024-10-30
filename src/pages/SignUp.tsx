import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import { signup } from "../api/auth";

import Form from "../components/Form";

interface FormData {
  email: string;
  password: string;
}

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ mode: "onTouched" });
  const navigate = useNavigate();

  const onSubmit = async (data: FormData) => {
    try {
      await signup(data);
      navigate("/");
    } catch (error) {
      console.log("회원가입 실패", error);
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
      <button
        className="flex h-12 flex-shrink-0 cursor-pointer items-center justify-center rounded-lg bg-primary px-5 text-base font-semibold text-white disabled:cursor-default disabled:bg-gray-400"
        type="submit"
        disabled={!isValid}
      >
        회원가입
      </button>
    </Form>
  );
};

export default SignUp;
