import { Link, LinkProps } from "react-router-dom";

function Button({
  className = "",
  children,
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`${className} hover:bg-primary-600 bg-primary-500 active:bg-primary-700 flex h-10 shrink-0 cursor-pointer items-center justify-center rounded-lg px-5 text-base font-medium text-white transition-colors disabled:cursor-default disabled:bg-gray-400`}
      {...rest}
    >
      {children}
    </button>
  );
}

function LinkButton({ className = "", children, ...rest }: LinkProps) {
  return (
    <Link
      className={`${className} hover:bg-primary-600 bg-primary-500 active:bg-primary-700 flex h-10 shrink-0 cursor-pointer items-center justify-center rounded-lg px-5 text-base font-medium text-white transition-colors disabled:cursor-default disabled:bg-gray-400`}
      {...rest}
    >
      {children}
    </Link>
  );
}

export { Button, LinkButton };
