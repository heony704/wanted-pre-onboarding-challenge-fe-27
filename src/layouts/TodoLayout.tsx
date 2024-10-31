import { Outlet } from "react-router-dom";

import Card from "../components/Card";

function TodoLayout() {
  return (
    <section className="flex h-[500px] w-full max-w-[500px]">
      <Card className="w-full flex-col">
        <Outlet />
      </Card>
    </section>
  );
}

export default TodoLayout;
