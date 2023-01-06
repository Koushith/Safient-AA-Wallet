//@ts-nocheck
import styled from "styled-components";
import HeroBackground from "../../assets/hero-background.png";

export const HeroSectionContainer = styled.header`
  /* position: relative; */
  background-image: url(${HeroBackground});
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */

  .navbar {
    padding-top: 30px;
    padding-bottom: 80px;
  }

  .cta-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
    margin-top: 55px;
  }

  .content {
    margin-top: -100px;
  }

  .content h1 {
    font-weight: 800;
    font-size: 60px;
    line-height: 68px;
    color: #0f172a;
  }

  .content p {
    font-weight: 500;
    font-size: 18px;
    line-height: 32px;
    /* or 178% */
    margin-top: 30px;
    color: #334155;
  }

  .hero-image {
    margin-bottom: 100px;
  }

  .waitlist-form {
    margin-top: 20px;
    display: flex;
    gap: 20px;

    input {
      font-weight: 500;
      font-size: 14px;
      line-height: 32px;
      /* or 229% */
      height: 40px;
      width: 300px;
      background-color: transparent;
      padding-left: 10px;
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
      font-size: 14px;
      line-height: 17px;
      padding: 12px 20px;
      cursor: pointer;
      color: #ffffff;
    }
  }
`;
