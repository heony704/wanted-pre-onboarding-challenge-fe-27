function Card({
  className,
  children,
  ...rest
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <article
      className={`${className} flex justify-start rounded-lg bg-white px-5 py-4 shadow`}
      {...rest}
    >
      {children}
    </article>
  );
}

export default Card;
