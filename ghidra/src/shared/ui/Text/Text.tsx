import { FC, ReactNode } from "react";
import cls from "./Text.module.scss";
import { classNames } from "../../lib/classNames";

type AsType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
type FontSize = 24 | 26 | 36 | 40 | 46;
type FontWeight = 300 | 400 | 500 | 600 | 700;

interface TextProps {
  children: ReactNode;
  as?: AsType;
  fz?: FontSize;
  fw?: FontWeight;
  className?: string;
}

const fzClasses: Record<FontSize, string> = {
  "24": cls.fz24,
  "26": cls.fz26,
  "36": cls.fz36,
  "40": cls.fz40,
  "46": cls.fz46,
};
const fwClasses: Record<FontWeight, string> = {
  "300": cls.fw300,
  "400": cls.fw400,
  "500": cls.fw500,
  "600": cls.fw600,
  "700": cls.fw700,
};

export const Text: FC<TextProps> = ({
  children,
  as = "h2",
  fz = 36,
  fw = 700,
  className = "",
}) => {
  const classes = [fz && fzClasses[fz], fw && fwClasses[fw], className];

  const getAs = {
    h1: <h1 className={classNames("", {}, classes)}>{children}</h1>,
    h2: <h2 className={classNames("", {}, classes)}>{children}</h2>,
    h3: <h3 className={classNames("", {}, classes)}>{children}</h3>,
    h4: <h4 className={classNames("", {}, classes)}>{children}</h4>,
    h5: <h5 className={classNames("", {}, classes)}>{children}</h5>,
    h6: <h6 className={classNames("", {}, classes)}>{children}</h6>,
  };

  return getAs[as];
};
