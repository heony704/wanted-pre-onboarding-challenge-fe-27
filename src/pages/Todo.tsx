import { useNavigate, useParams } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { deleteTodo, getTodoById } from "../api/todo";

import { Button, LinkButton } from "../components/Button";

type Todo = Awaited<ReturnType<typeof getTodoById>>;

function Todo() {
  const { todoId } = useParams<{ todoId: string }>();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { data: todo, isLoading } = useQuery({
    queryKey: ["todos", todoId],
    queryFn: () => getTodoById(todoId!),
    enabled: !!todoId,
  });

  const deleteMutation = useMutation({
    mutationFn: () => deleteTodo(todoId!),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
      navigate("/todos");
    },
    onError: (error) => {
      console.log("Todo 삭제 실패", error);
    },
  });

  const handleDelete = async () => {
    if (todoId) {
      deleteMutation.mutate();
    }
  };

  if (isLoading) return <>...</>;

  return (
    <>
      <h2 className="line-clamp-1 shrink-0 text-2xl font-bold leading-10 text-gray-700">
        {todo?.title}
      </h2>
      <pre className="mt-2 grow overflow-auto whitespace-pre-wrap break-words text-gray-700">
        {todo?.content}
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
