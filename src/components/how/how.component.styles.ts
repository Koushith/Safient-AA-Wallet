import styled from "styled-components";

export const HowConatiner = styled.section`
  background-color: #171717;

  .heading-container {
    padding-top: 10rem !important;
  }

  .heading {
    font-weight: 700;
    font-size: 3.2rem;
    line-height: 3.9rem;
    color: #ffffff;
  }

  .sub-heading {
    font-weight: 500;
    font-size: 1.8rem;
    line-height: 3.2rem;
    /* or 178% */
    margin-top: 2.5rem;
    color: #a3a3a3;
  }

  @media (max-width: 768px) {
    padding: 20px;
    .heading {
      font-size: 36px;
      line-height: 40px;
    }

    .sub-heading {
      font-size: 16px;
      line-height: 28px;
    }
    br {
      display: none;
    }
  }

  @media (max-width: 375px) {
    padding: 0 2rem;
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
    flex-wrap: wrap;
  }

  /* tab */
  @media (max-width: 768px) {
    /* padding: 0 2rem; */
    flex-direction: column;
    gap: 2rem;
    flex-wrap: wrap;

    .how-img {
      width: 100%;
      overflow: hidden;
    }
  }

  /* mobile */
  @media (max-width: 320px) {
    padding: 0rem !important;

    .how-img {
      width: 100%;
      overflow: hidden;
    }
  }
`;

export const StepsContainer = styled.div`
  background: #262727;
  border-radius: 8px;
  cursor: pointer;
  padding: 3rem;
  max-width: 54rem;

  h2 {
    font-weight: 700;
    font-size: 1.8rem;
    line-height: 22px;
    /* identical to box height */
    margin-top: 2.1rem;
    color: #ffffff;
  }

  p {
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 32px;
    /* or 200% */
    margin-top: 1rem;
    color: #a3a3a3;
  }

  /* mobile */
  @media (max-width: 320px) {
    padding: 2rem;
  }
`;
