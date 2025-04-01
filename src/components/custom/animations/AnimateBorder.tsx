import React from "react";
import "./style/StarBorder.css";
import { useColorModeValue } from "_/components/ui/color-mode";

type StarBorderProps<T extends React.ElementType> =
  React.ComponentPropsWithoutRef<T> & {
    as?: T;
    className?: string;
    children?: React.ReactNode;
    color?: string;
    speed?: React.CSSProperties["animationDuration"];
  };

const AnimateStarBorder = <T extends React.ElementType = "button">({
  as,
  className = "",
  color = "white",
  speed = "6s",
  children,
  ...rest
}: StarBorderProps<T>) => {
  const Component = as || "button";

  // Définir le background selon le mode clair ou sombre
  const bgGradient = useColorModeValue(
    "white", // Mode clair
    "linear-gradient(to bottom, #060606, #111)" // Mode sombre
  );

  const borderColor = useColorModeValue("#ccc", "#222");

  return (
    <Component className={`star-border-container ${className}`} {...rest}>
      <div
        className="border-gradient-bottom"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
        }}
      ></div>
      <div
        className="border-gradient-top"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
        }}
      ></div>
      <div
        className="inner-content"
        style={{
          background: bgGradient,
          border: `1px solid ${borderColor}`,
        }}
      >
        {children}
      </div>
    </Component>
  );
};

export default AnimateStarBorder;
