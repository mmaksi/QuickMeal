import React from "react";
import styled, { useTheme } from "styled-components/native";
import { Theme } from "@/features/restaurants/components/InfoCard.styles";

interface SpacerProps {
  position?: "top" | "left" | "right" | "bottom";
  size?: "small" | "medium" | "large";
  children?: React.ReactNode;
}

const sizeVariant: { [key: string]: number } = {
  small: 1,
  medium: 2,
  large: 3,
};

const positionVariant: { [key: string]: string } = {
  top: "marginTop",
  left: "marginLeft",
  right: "marginRight",
  bottom: "marginBottom",
};

const getVariant = (position: string, size: string, theme: Theme) => {
  const sizeIndex = sizeVariant[size];
  const property = positionVariant[position];
  const value = theme.space[sizeIndex];

  return `${property}:${value}`;
};

const SpacerView = styled.View<{ variant: string }>`
  ${(props) => props.variant}
`;

const Spacer: React.FC<SpacerProps> = ({
  position = "top",
  size = "small",
  children,
}) => {
  const theme = useTheme() as Theme;
  const variant = getVariant(position, size, theme);
  return <SpacerView variant={variant}>{children}</SpacerView>;
};

Spacer.defaultProps = {
  position: "top",
  size: "small",
};

export default Spacer;
