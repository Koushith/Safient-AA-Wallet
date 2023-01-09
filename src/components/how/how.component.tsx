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
  const steps = [
    {
      title: "Own It",
      description:
        "Really do. Protect your assets from banks and businesses going, well, out of business",
    },
    {
      title: "Own It",
      description:
        "Really do. Protect your assets from banks and businesses going, well, out of business",
    },
    {
      title: "Own It",
      description:
        "Really do. Protect your assets from banks and businesses going, well, out of business",
    },
  ];

  return (
    <HowConatiner id="how">
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
          <img src={How} alt="how" className="how-img" />

          <div className="steps">
            {steps.map((s) => (
              <StepsContainer>
                <img src={Mobile} alt="steps" />

                <h2>{s.title}</h2>
                <p>{s.description}</p>
              </StepsContainer>
            ))}
          </div>
        </HowItWorksContainer>
      </Container>
    </HowConatiner>
  );
};
