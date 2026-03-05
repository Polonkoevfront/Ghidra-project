import cls from "./Button.module.scss";
import { FC, ReactNode } from "react";
import { classNames } from "../../lib/classNames";

type buttonVariant = "default" | "outline";
type buttonWidth = 154 | 155 | 214 | 250 | 276 | 292 | 295;
type buttonHeight = 48 | 52 | 55 | 56;

interface ButtonProps {
  children: ReactNode;
  variant?: buttonVariant;
  width?: buttonWidth;
  height?: buttonHeight;
  className?: string;
}

const variantClasses: Record<buttonVariant, string> = {
  default: cls.default,
  outline: cls.outline,
};

const widthClasses: Record<buttonWidth, string> = {
  154: cls.w154,
  155: cls.w155,
  214: cls.w214,
  250: cls.w250,
  276: cls.w276,
  292: cls.w292,
  295: cls.w295,
};

const heightClasses: Record<buttonHeight, string> = {
  48: cls.h48,
  52: cls.h52,
  55: cls.h55,
  56: cls.h56,
};

export const Button: FC<ButtonProps> = ({
  children,
  variant = "default",
  width = 154,
  height = 48,
  className = "",
  ...propsOthers
}) => {
  const classes = [
    variant && variantClasses[variant],
    width && widthClasses[width],
    height && heightClasses[height],
    className,
  ];

  return (
    <button className={classNames(cls.btn, {}, classes)}>{children}</button>
  );
};
