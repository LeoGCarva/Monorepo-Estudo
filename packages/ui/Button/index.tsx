interface colorInterface {
  children: string;
  color?: "yellow" | "blue";
}

export const Button: React.FC<colorInterface> = ({
  children,
  color = "black",
}) => {
  return <button style={{ color: color }}>{children}</button>;
};
