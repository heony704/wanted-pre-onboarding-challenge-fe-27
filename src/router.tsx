import { createBrowserRouter } from "react-router-dom";

import RequireAuth from "./layouts/RequireAuth";
import RedirectIfAuth from "./layouts/RedirectIfAuth";
import AuthLayout from "./layouts/AuthLayout";
import TodoLayout from "./layouts/TodoLayout";

import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Todos from "./pages/Todos";
import Todo from "./pages/Todo";
import EditTodo from "./pages/EditTodo";
import NewTodo from "./pages/NewTodo";

const router = createBrowserRouter([
  {
    element: <RequireAuth />,
    children: [
      { path: "/", element: <Todos /> },
      {
        path: "/todos",
        element: <Todos />,
        children: [
          {
            element: <TodoLayout />,
            children: [
              { path: ":todoId", element: <Todo /> },
              { path: ":todoId/edit", element: <EditTodo /> },
              { path: "new", element: <NewTodo /> },
            ],
          },
        ],
      },
    ],
  },
  {
    element: <RedirectIfAuth />,
    children: [
      {
        element: <AuthLayout />,
        children: [
          { path: "/signin", element: <SignIn /> },
          { path: "/signup", element: <SignUp /> },
        ],
      },
    ],
  },
]);

export default router;
