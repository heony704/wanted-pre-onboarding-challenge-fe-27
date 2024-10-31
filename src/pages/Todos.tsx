import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

import { getTodos } from "../api/todo";

import { LinkButton } from "../components/Button";
import Card from "../components/Card";

type Todo = Awaited<ReturnType<typeof getTodos>>[number];

function Todos() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const response = await getTodos();
      setTodos(response);
    };

    fetchTodos();
  }, []);

  return (
    <div className="flex min-h-screen w-full flex-col items-center bg-gradient-to-tr from-blue-200 via-indigo-200 to-pink-200 text-gray-700">
      <header className="flex h-20 w-full items-center justify-center px-10">
        <Link className="text-3xl font-bold" to="/">
          TODO APP
        </Link>
      </header>

      <main className="flex w-full justify-center gap-8 px-10 pb-10">
        <section className="flex w-full max-w-[500px] flex-col items-center">
          <LinkButton to="/todos/new" className="w-[100px]">
            Create
          </LinkButton>

          <div className="mt-4 flex w-full flex-col gap-3">
            {todos.map(({ id, title }) => (
              <Link key={id} to={`/todos/${id}`}>
                <Todo content={title} />
              </Link>
            ))}
          </div>
        </section>
        <Outlet />
      </main>
    </div>
  );
}

function Todo({ content }: { content: string }) {
  return (
    <Card className="w-full bg-opacity-80 transition-colors hover:bg-opacity-100">
      <pre className="line-clamp-2 whitespace-pre-wrap text-base font-normal text-gray-700">
        {content}
      </pre>
    </Card>
  );
}

export default Todos;
