import React, { ReactNode } from "react";
import styled from "styled-components";

const StyledContainer = styled.section`
  max-width: 1296px;
  margin: 0 auto;
`;

interface ContainerProps {
  children: React.ReactNode;
}

export const Container = ({ children }: ContainerProps) => {
  return <StyledContainer>{children}</StyledContainer>;
};
