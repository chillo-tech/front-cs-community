import React from "react";

const FormTextInput = ({
  register,
  errors,
  errorMessage,
  placeholder,
  name,
  label,
  type = "text",
  errorName,
}: {
  placeholder?: string;
  type?: "text" | "email" | "textarea";
  errorMessage: string;
  name: string;
  label: string;
  register: Function;
  errors?: any;
  errorName?: string;
}) => {
  return (
    <div className="flex flex-col">
      <label>{label}</label>
      {type === "textarea" ? (
        <textarea
          className="py-1 px-2 text-black rounded-md"
          placeholder={placeholder}
          {...register(name)}
          rows={3}
        />
      ) : (
        <input
          className="py-1 px-2 text-black rounded-md"
          type={type}
          placeholder={placeholder}
          {...register(name)}
        />
      )}
      <p className="text-rose-800 text-sm">
        {errors && errors[errorName || name] && errorMessage}
      </p>
    </div>
  );
};

export { FormTextInput };
