import styled from "styled-components";

export const HowConatiner = styled.section`
  background-color: #171717;

  .heading-container {
    padding-top: 100px !important;
  }

  .heading {
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;
    /* identical to box height */

    color: #ffffff;
  }

  .sub-heading {
    font-weight: 500;
    font-size: 18px;
    line-height: 32px;
    /* or 178% */
    margin-top: 25px;
    color: #a3a3a3;
  }
`;

export const HowItWorksContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 0;
  margin-top: 90px;
  padding-bottom: 90px;

  .steps {
    display: flex;
    flex-direction: column;
    gap: 26px;
  }
`;

export const StepsContainer = styled.div`
  background: #262727;
  border-radius: 8px;
  cursor: pointer;
  padding: 30px;
  max-width: 540px;

  h2 {
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    /* identical to box height */
    margin-top: 21px;
    color: #ffffff;
  }

  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 32px;
    /* or 200% */
    margin-top: 10px;
    color: #a3a3a3;
  }
`;
