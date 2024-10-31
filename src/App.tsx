import { Route, Routes } from "react-router-dom";

import RequireAuth from "./layouts/RequireAuth";
import RedirectIfAuth from "./layouts/RedirectIfAuth";
import AuthLayout from "./layouts/AuthLayout";

import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Todos from "./pages/Todos";

function App() {
  return (
    <Routes>
      <Route element={<RequireAuth />}>
        <Route path="/" element={<Todos />} />
        <Route path="/todos" element={<Todos />} />
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
