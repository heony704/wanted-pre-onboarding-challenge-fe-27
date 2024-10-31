import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { deleteTodo, getTodoById } from "../api/todo";

import { Button, LinkButton } from "../components/Button";

type Todo = Awaited<ReturnType<typeof getTodoById>>;

function Todo() {
  const { todoId } = useParams<{ todoId: string }>();
  const navigate = useNavigate();
  const [todo, setTodo] = useState<Todo>(null);

  useEffect(() => {
    const fetchTodo = async () => {
      if (!todoId) return;

      const response = await getTodoById(todoId);
      setTodo(response);
    };

    fetchTodo();
  }, [todoId]);

  const handleDelete = async () => {
    if (!todoId) return;

    try {
      await deleteTodo(todoId);
      navigate("/todos");
    } catch (error) {
      console.log("Todo 삭제 실패", error);
    }
  };

  if (!todo) return <>...</>;

  return (
    <>
      <h2 className="line-clamp-1 shrink-0 text-2xl font-bold leading-10">
        {todo.title}
      </h2>
      <pre className="mt-2 grow overflow-auto whitespace-pre-wrap break-words">
        {todo.content}
      </pre>

      <div className="mt-4 flex justify-end gap-3">
        <Button className="w-[100px]" type="button" onClick={handleDelete}>
          삭제하기
        </Button>
        <LinkButton to={`/todos/${todoId}/edit`} className="w-[100px]">
          수정하기
        </LinkButton>
      </div>
    </>
  );
}

export default Todo;
