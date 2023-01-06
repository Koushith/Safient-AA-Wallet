import styled from "styled-components";
import { SecondaryHeading } from "../primitives/text/text.component";

export const CTAContainer = styled.section`
  background-color: #171717;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 50px;
  min-height: 443px;
`;

export const CTAHeading = styled.h2`
  color: #fff !important;
  font-weight: 700;
  font-size: 32px;
  line-height: 39px;
  text-align: center;
`;

export const CTASubHeading = styled.p`
  font-size: 18px;
  line-height: 32px;
  /* identical to box height, or 178% */

  text-align: center;
  margin-top: 30px;
  margin-bottom: 30px;
  color: #d4d4d4;
`;

export const Button = styled.button`
  padding: 14px 30px;
  background: #06b6d4;
  font-weight: 600;
  color: #fff;
  border-radius: 4px;
  font-size: 14px;
  line-height: 17px;
  border: none;
  cursor: pointer;
`;
