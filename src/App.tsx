import { Route, Routes } from "react-router-dom";

import RequireAuth from "./layouts/RequireAuth";
import RedirectIfAuth from "./layouts/RedirectIfAuth";

import Todos from "./pages/Todos";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <Routes>
      <Route element={<RequireAuth />}>
        <Route path="/">
          <Route index element={<Todos />} />
        </Route>
      </Route>

      <Route element={<RedirectIfAuth />}>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Route>
    </Routes>
  );
}

export default App;
