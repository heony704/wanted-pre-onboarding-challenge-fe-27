import { Children, cloneElement, forwardRef, isValidElement } from "react";
import { InformationCircleIcon } from "@heroicons/react/24/solid";

function Form({
  className = "",
  children,
  ...rest
}: React.FormHTMLAttributes<HTMLFormElement>) {
  return (
    <form
      className={`${className} flex w-full flex-col gap-4`}
      noValidate
      {...rest}
    >
      {children}
    </form>
  );
}

interface FormItemProps extends React.PropsWithChildren {
  id: string;
  isError?: boolean;
}

function FormItem({ id, isError = false, children }: FormItemProps) {
  const childrenWithId = Children.map(children, (child) => {
    if (isValidElement(child)) {
      if (child.type === "label" || child.type === FormLabel) {
        return cloneElement(child as React.ReactElement, { htmlFor: id });
      }
      if (child.type === "input") {
        return cloneElement(child as React.ReactElement, { name: id, id });
      }
      if (child.type === FormInput) {
        return cloneElement(child as React.ReactElement, {
          name: id,
          id,
          isError,
        });
      }
      if (child.type === FormErrorMessage) {
        return cloneElement(child as React.ReactElement, { isError });
      }
    }
    return child;
  });

  return <div className="flex flex-col gap-2">{childrenWithId}</div>;
}

function FormLabel({
  children,
  ...rest
}: React.LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label className="text-base font-semibold text-gray-700" {...rest}>
      {children}
    </label>
  );
}

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  isError?: boolean;
}

const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  ({ id, name, isError = false, ...rest }, ref) => {
    return (
      <input
        className={`h-11 w-full rounded-lg border px-4 text-base font-normal text-gray-700 outline-none placeholder:text-gray-400 focus:ring-1 ${isError ? "border-red-600 bg-red-50 focus:border-red-600 focus:ring-red-600" : "focus:border-primary-500 focus:ring-primary-500 border-gray-300 bg-gray-50"}`}
        id={id}
        name={name}
        ref={ref}
        {...rest}
      />
    );
  },
);

interface FormErrorMessageProps extends React.PropsWithChildren {
  isError?: boolean;
}

function FormErrorMessage({
  isError = false,
  children,
}: FormErrorMessageProps) {
  if (!isError) return null;

  return (
    <div className="flex items-start text-sm font-normal text-red-600">
      <InformationCircleIcon className="mr-1 h-5 w-5 shrink-0" />
      {children}
    </div>
  );
}

Form.Item = FormItem;
Form.Label = FormLabel;
Form.Input = FormInput;
Form.ErrorMessage = FormErrorMessage;

export default Form;
