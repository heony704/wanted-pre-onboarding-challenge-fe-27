function Button({
  className = "",
  children,
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`${className} flex h-12 flex-shrink-0 cursor-pointer items-center justify-center rounded-lg bg-indigo-500 px-5 text-base font-semibold text-white disabled:cursor-default disabled:bg-gray-400`}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
