import React from "react";
import cn from "classnames";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Input: React.FC<InputProps> = ({ className, ...rest }) => {
  return (
    <input
      className={cn(className, "outline-none border-none bg-transparent")}
      {...rest}
    />
  );
};

export default Input;