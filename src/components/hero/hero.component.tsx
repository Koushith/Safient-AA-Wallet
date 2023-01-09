//@ts-nocheck

import { HeroSectionContainer } from "./hero.component.styles";
import HeroImage from "../../assets/hero-image.png";
import { Container } from "../primitives/container/container.component";
import { Navbar } from "../navbar/navbar.component";

export const HeroSection = () => {
  return (
    <HeroSectionContainer>
      <div className="navbar">{/* <Navbar /> */}</div>

      <Container>
        <div className="cta-container">
          <div className="content">
            <h1>The fastest crypto experience, ever!</h1>
            <p>
              Candide is an Ethereum wallet build as a public good. <br />
              Join our waiting list and be the first to try out our Beta
            </p>

            <div className="waitlist-form">
              <input type="text" placeholder="johndoe@safient.io" />
              <button>Join the waitlist</button>
            </div>
          </div>
          <div className="hero-image">
            <img src={HeroImage} alt="hero" />
          </div>
        </div>
      </Container>
    </HeroSectionContainer>
  );
};
