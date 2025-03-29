type ColorShades = {
  [key: number]: { value: string };
};

export type Colors = {
  primary: ColorShades;
  secondary: ColorShades;
  overlay: ColorShades;
};

const colors: Colors = {
  primary: {
    50: { value: "#ebebff" },
    100: { value: "#c5c6f1" },
    200: { value: "#9e9fe1" },
    300: { value: "#7979d3" },
    400: { value: "#2563EB" },
    500: { value: "#1A3C8A" },
    600: { value: "#2c2d87" },
    700: { value: "#1f2062" },
    800: { value: "#11123c" },
    900: { value: "#0C1043" },
  },
  secondary: {
    50: { value: "#fff1da" },
    100: { value: "#ffd8ae" },
    200: { value: "#ffbf7d" },
    300: { value: "#ffa64c" },
    400: { value: "#ff8c1a" },
    500: { value: "#F6A724" },
    700: { value: "#813f00" },
    800: { value: "#4f2500" },
    900: { value: "#200b00" },
  },
  overlay: {
    500: { value: "#000000" },
  },
};

const getColor = (color: keyof Colors = "primary", opacity: number = 500) =>
  colors[color]?.[opacity]?.value;

/**
 * Get the color with the specified opacity.
 * The color in the theme.
 * The opacity value (0 to 100).
 * @returns The RGBA color string with the specified opacity.
 */
const hexToRGB = (color: keyof Colors, alpha?: number, op?: number) => {
  const hex = getColor(color, op);
  const r = parseInt(hex?.slice(1, 3), 16);
  const g = parseInt(hex?.slice(3, 5), 16);
  const b = parseInt(hex?.slice(5, 7), 16);

  return `rgba(${r},${g},${b}${alpha ? `, ${alpha}` : ""})`;
};

export { colors, hexToRGB, getColor };
