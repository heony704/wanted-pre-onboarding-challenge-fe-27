function Button({
  className = "",
  children,
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`${className} hover:bg-primary-600 bg-primary-500 active:bg-primary-700 flex h-12 flex-shrink-0 cursor-pointer items-center justify-center rounded-lg px-5 text-base font-semibold text-white transition-colors disabled:cursor-default disabled:bg-gray-400`}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
