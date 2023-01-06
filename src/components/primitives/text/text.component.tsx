import { ReactNode } from "react";
import { StyledSubHeading } from "./text.component.styles";

interface TextComponentProps {
  children: ReactNode;
}

export const Text = () => {
  return (
    <>
      <h1>jdjdjdjd</h1>
    </>
  );
};

export const SecondaryHeading = ({ children }: TextComponentProps) => {
  return <StyledSubHeading>{children}</StyledSubHeading>;
};
