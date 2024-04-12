import React from "react";

type InputForEmailFromProps = {
  className?: string;
  classNameInput?: string;
  type: string;
  placeholder: string;
  name: string;
  required?: boolean
};

export default function InputForEmailForm({
  className = "w-1/2",
  classNameInput= "w-11/2",
  type = "text",
  placeholder,
  name,
  required= false
}: InputForEmailFromProps) {

  
  return (
    <div className={className}>
      <input
        required={required}
        type={type}
        placeholder={placeholder}
        name={name}
        className={`${classNameInput} dark:focus:border-pink-200 dark:border-zinc-600  font-bold outline-none focus:border-b-2 focus:border-purple-700 border-b-2 border-zinc-300  h-16 text-xl bg-transparent`}
      />
    </div>
  );
}
