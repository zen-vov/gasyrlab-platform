"use client"
import React, { forwardRef, Ref } from 'react';
import { motion } from 'framer-motion';
import cn from 'classnames';

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  label: string;
}

const Button = forwardRef((props: IButton, ref: Ref<HTMLButtonElement>) => {
  const { className, label, ...rest } = props;
  return (
    <button
      ref={ref}
      className={cn(className, 'outline-none border-none')}
      {...rest}
    >
      {label}
    </button>
  );
});

const MButton = motion(Button);

if (process.env.NODE_ENV === 'development') {
  const componentName = MButton.displayName || MButton.name || 'Component';
  Button.displayName = `ForwardRef(${componentName})`;
}

export default MButton;