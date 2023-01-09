import styled from "styled-components";
import { SecondaryHeading } from "../primitives/text/text.component";
import { ConteintHeading } from "../primitives/text/text.component.styles";

export const FaqContainer = styled.section`
  margin-bottom: 80px;
  padding: 20px;
  @media (max-width: 375px) {
    margin-bottom: 40px;
  }
`;

export const GridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 56px;
  justify-content: space-between;
  row-gap: 60px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 30px;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
  }

  @media (max-width: 375px) {
    margin-top: 40px;
  }
`;

export const FaqHeading = styled(ConteintHeading)`
  margin-bottom: 20px;
  @media (max-width: 375px) {
    font-size: 2rem;
  }
`;

export const FAQWrapper = styled.div`
  max-width: 530px;
`;

export const FaqTitle = styled.h2`
  font-weight: 700;
  font-size: 32px;
  line-height: 39px;
  /* identical to box height */
  margin-top: 70px;
  margin-bottom: 10px;
  color: #0f172a;
`;
