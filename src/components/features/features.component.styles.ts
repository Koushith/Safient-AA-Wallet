import styled from "styled-components";

export const FeaturesSectionContainer = styled.section`
  padding: 70px 0;

  h2 {
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;
    /* identical to box height */

    text-align: center;

    color: #0f172a;
  }

  p {
    font-weight: 500;
    font-size: 18px;
    line-height: 32px;
    /* or 178% */

    text-align: center;
    margin-top: 10px;
    color: #334155;
  }

  @media (max-width: 768px) {
    padding: 20px;
    .heading {
      font-size: 36px;
      line-height: 40px;
      text-align: inherit;
    }

    .sub-heading {
      font-size: 16px;
      line-height: 28px;
      text-align: inherit;
    }
    br {
      display: none;
    }
  }

  @media (max-width: 375px) {
    padding: 0 2rem;
    margin-top: 60px;
  }
`;

export const FeaturesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 50px;
  margin: 120px 0px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    margin-top: 60px;
  }

  @media (max-width: 450px) {
    grid-template-columns: 1fr;

    gap: 20px;
    margin-top: 20px;
  }
`;

export const Features = styled.div`
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  max-width: 354px;
  padding: 22px;
  cursor: pointer;

  h3 {
    font-weight: 600;
    font-size: 14px;
    line-height: 32px;
    /* identical to box height, or 229% */
    color: #0f172a;
    margin-top: 10px;
  }

  p {
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    /* or 171% */
    margin-top: 2px;
    color: #334155;
    text-align: initial;
  }

  transition: all 0.3s ease 0s;

  &:hover {
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }
`;
