import { Link, Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <main className="flex min-h-screen w-full items-center justify-center">
      <div className="m-5 flex w-full max-w-[500px] flex-col items-center justify-center gap-4 rounded-lg bg-white p-8 shadow">
        <header className="my-5">
          <Link className="text-4xl font-black text-gray-700" to="/">
            TODO APP
          </Link>
        </header>
        <Outlet />
      </div>
    </main>
  );
}

export default AuthLayout;
