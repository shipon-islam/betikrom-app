"use client";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  className?: string;
}

export default function Button({ title, className, ...rest }: ButtonProps) {
  return (
    <button
      className={`${className} bg-yellow-400 px-8 py-2 rounded-lg font-medium text-gray-900 hover:bg-yellow-300 transition-colors duration-300 capitalize`}
      {...rest}
    >
      {title}
    </button>
  );
}
