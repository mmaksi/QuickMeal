import styled from "styled-components/native";
import { Theme } from "@/features/restaurants/components/InfoCard.styles";

interface TextProps {
  variant?: "body" | "label" | "caption" | "error" | "hint";
  theme: Theme;
}

const defaultTextStyles = (theme: Theme) => `
  font-family: ${theme.fonts.body};
  font-weight: ${theme.fontWeights.regular};
  color: ${theme.colors.text.primary};
  flex-wrap: wrap;
  margin-top: 0px;
  margin-bottom: 0px;
`;

const body = (theme: Theme) => `
    font-size: ${theme.fontSizes.body};
`;

const label = (theme: Theme) => `
    font-family: ${theme.fonts.heading};
    font-size: ${theme.fontSizes.body};
    font-weight: ${theme.fontWeights.medium};
`;

const caption = (theme: Theme) => `
    font-size: ${theme.fontSizes.caption};
    font-weight: ${theme.fontWeights.bold};
`;

const error = (theme: Theme) => `
    color: ${theme.colors.text.error};
`;

const hint = (theme: Theme) => `
    font-size: ${theme.fontSizes.body};
`;

const variants: { [key: string]: (theme: Theme) => string } = {
  body,
  label,
  caption,
  error,
  hint,
};

const Text = styled.Text<TextProps>`
  ${({ theme }) => defaultTextStyles(theme)}
  ${({ variant, theme }) => variant && variants[variant](theme)}
`;

Text.defaultProps = {
  variant: "body",
};

export default Text;
