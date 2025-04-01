import { Text, TextProps } from "@chakra-ui/react";
import React from "react";
import { TextVariant, TextWeight } from "./interface/base-text";
import { useColorModeValue } from "_/components/ui/color-mode";

interface BaseTextProps extends TextProps {
  variant?: TextVariant | { base: TextVariant; md: TextVariant };
  weight?: TextWeight;
}

export const BaseText: React.FC<BaseTextProps> = ({
  variant = TextVariant.M,
  weight = TextWeight.Regular,
  children,
  ...props
}) => {
  const textColor = useColorModeValue("black", "whiteAlpha.800");
  const sizeMap: Record<TextVariant, string> = {
    [TextVariant.H1]: "32px",
    [TextVariant.H2]: "28px",
    [TextVariant.H3]: "24px",
    [TextVariant.L]: "20px",
    [TextVariant.XL]: "18px",
    [TextVariant.M]: "16px",
    [TextVariant.S]: "14px",
    [TextVariant.XS]: "12px",
  };

  const weightMap: Record<TextWeight, string> = {
    [TextWeight.THIN]: "thin",
    [TextWeight.ExtraLight]: "extralight",
    [TextWeight.Light]: "light",
    [TextWeight.Regular]: "normal",
    [TextWeight.Medium]: "medium",
    [TextWeight.SemiBold]: "semibold",
    [TextWeight.Bold]: "bold",
    [TextWeight.ExtraBold]: "extrabold",
    [TextWeight.Black]: "black",
  };

  return (
    <Text
      lineHeight={"2"}
      color={textColor}
      fontSize={
        typeof variant === "object"
          ? { base: sizeMap[variant.base], md: sizeMap[variant.md] }
          : sizeMap[variant]
      }
      fontWeight={weightMap[weight]}
      {...props}
    >
      {children}
    </Text>
  );
};
