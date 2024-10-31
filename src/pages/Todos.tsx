import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { PlusIcon } from "@heroicons/react/24/solid";

import { getTodos } from "../api/todo";

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
    <div className="via-primary-200 flex min-h-screen w-full flex-col items-center bg-gradient-to-tr from-blue-200 to-pink-200 text-gray-700">
      <header className="flex h-20 w-full items-center justify-center px-10">
        <Link className="text-3xl font-bold" to="/">
          TODO APP
        </Link>
      </header>

      <main className="flex w-full justify-center gap-8 px-10 pb-10">
        <section className="flex w-full max-w-[500px] flex-col items-center">
          <div className="flex w-full shrink-0 items-end px-1">
            <p className="flex items-center">
              <span className="font-semibold text-gray-700">Total</span>
              <span className="text-primary-500 ml-3 flex h-5 w-5 items-center justify-center rounded bg-white bg-opacity-30 text-sm font-semibold">
                {todos.length}
              </span>
            </p>
            <Link
              className="text-primary-500 active:bg-primary-600 hover:bg-primary-500 hover:text-primary-100 ml-auto flex h-[30px] w-[30px] items-center justify-center rounded-md transition-colors"
              to="/todos/new"
            >
              <PlusIcon className="h-6 w-6 shrink-0" />
            </Link>
          </div>

          <div className="mt-3 flex w-full flex-col gap-3">
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
