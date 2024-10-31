import { Route, Routes } from "react-router-dom";

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

function App() {
  return (
    <Routes>
      <Route element={<RequireAuth />}>
        <Route path="/" element={<Todos />} />
        <Route path="/todos" element={<Todos />}>
          <Route element={<TodoLayout />}>
            <Route path=":todoId" element={<Todo />} />
            <Route path=":todoId/edit" element={<EditTodo />} />
            <Route path="new" element={<NewTodo />} />
          </Route>
        </Route>
      </Route>

      <Route element={<RedirectIfAuth />}>
        <Route element={<AuthLayout />}>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
