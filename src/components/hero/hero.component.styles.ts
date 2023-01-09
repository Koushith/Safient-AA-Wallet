//@ts-nocheck
import styled from "styled-components";
import HeroBackground from "../../assets/hero-background.png";

export const HeroSectionContainer = styled.header`
  position: relative;
  background-image: url(${HeroBackground});
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
  height: 100vh;
  width: 100%;

  .navbar {
    padding-top: 3rem;
    padding-bottom: 8rem;
  }

  .cta-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4rem;
    margin-top: 5.5rem;

    padding: 0 3rem;
  }

  .content {
    margin-top: -10rem;
  }

  .content h1 {
    font-weight: 800;
    font-size: 6rem;
    line-height: 6.8rem;
    color: #0f172a;
  }

  .content p {
    font-weight: 500;
    font-size: 1.8rem;
    line-height: 3.2rem;
    /* or 178% */
    margin-top: 3rem;
    color: #334155;
  }

  .hero-image {
    margin-bottom: 10rem;
  }

  .waitlist-form {
    margin-top: 2rem;
    display: flex;
    gap: 2rem;

    input {
      font-weight: 500;
      font-size: 1.4rem;
      line-height: 3.2rem;
      /* or 229% */
      height: 4rem;
      width: 30rem;
      background-color: transparent;
      padding-left: 1rem;
      display: flex;
      align-items: center;
      border: 1px solid #e5e5e5;
      border-radius: 4px;
      color: #525252;
    }

    button {
      background: #06b6d4;
      border-radius: 4px;
      border: none;
      font-weight: 600;
      font-size: 1.4rem;
      line-height: 1.7rem;
      padding: 1.2rem 2rem;
      cursor: pointer;
      color: #ffffff;
    }
  }

  @media (max-width: 768px) {
    .cta-container {
      flex-direction: column;
      padding: 4rem;
    }

    h1 {
      font-size: 5rem !important;
      line-height: 5rem !important;
      text-align: initial;
    }

    .hero-image {
      order: 1 !important;
      overflow: hidden !important;
    }
  }

  @media (max-width: 375px) {
    .cta-container {
      flex-direction: column;
      padding: 2rem !important;
    }
    .hero-image {
      padding: 4rem;
      width: 100%;
      overflow: hidden;
    }

    h1 {
      font-size: 3.6rem !important;
      line-height: 4rem !important;
      text-align: initial;
    }
    p {
      text-align: initial !important;
    }
    br {
      display: none;
    }
    .hero-image {
      display: none;
    }

    .waitlist-form {
      flex-direction: column;

      input {
        width: 100%;
      }
    }
  }
`;
