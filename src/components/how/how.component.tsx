//@ts-nocheck

import { Container } from "../primitives/container/container.component";
import {
  HowConatiner,
  HowItWorksContainer,
  StepsContainer,
} from "./how.component.styles";
import How from "../../assets/how.png";
import Mobile from "../../assets/icons/mobile.svg";

export const HowItWorks = () => {
  return (
    <HowConatiner>
      <Container>
        <div className="heading-container">
          <h2 className="heading">
            Every feature you need to win. Try it for yourself.
          </h2>
          <p className="sub-heading">
            SW was built for investors like you who play by their own rules and
            aren’t going to let <br /> SEC regulations get in the way of their
            dreams. If other investing tools are afraid <br /> to build it,
            Pocket has it.
          </p>
        </div>

        <HowItWorksContainer>
          <img src={How} alt="how" />

          <div className="steps">
            <StepsContainer>
              <img src={Mobile} alt="steps" />

              <h2>Own It</h2>
              <p>
                Really do. Protect your assets from banks and businesses going,
                well, out of business
              </p>
            </StepsContainer>

            <StepsContainer>
              <img src={Mobile} alt="steps" />

              <h2>Own It</h2>
              <p>
                Really do. Protect your assets from banks and businesses going,
                well, out of business
              </p>
            </StepsContainer>

            <StepsContainer>
              <img src={Mobile} alt="steps" />

              <h2>Own It</h2>
              <p>
                Really do. Protect your assets from banks and businesses going,
                well, out of business
              </p>
            </StepsContainer>
          </div>
        </HowItWorksContainer>
      </Container>
    </HowConatiner>
  );
};
