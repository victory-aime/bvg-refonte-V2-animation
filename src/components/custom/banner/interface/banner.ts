import { Colors } from "_/theme/colors";
import { ReactNode } from "react";

export interface IBannerProps {
  imageSrc?: string;
  height?: { base?: string | number; lg?: string | number } | string;
  color?: keyof Colors;
  opacity?: number;
  children?: ReactNode;
  links?: {
    label: string;
    href: string;
    subMenu?: { label: string; href: string }[];
  }[];
  title?: string;
  animateText?: string;
  description?: string;
}
