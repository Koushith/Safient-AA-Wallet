//@ts-nocheck
import { Container } from "../primitives/container/container.component";
import {
  Features,
  FeaturesSectionContainer,
  FeaturesWrapper,
} from "./features.component.styles";
import Mobile from "../../assets/icons/mobile.svg";

export const FeaturesSection = () => {
  return (
    <FeaturesSectionContainer>
      <Container>
        <h2>Now is the time to build your portfolio.</h2>
        <p>
          With typical market returns, you have to start young to secure your
          future. With Pocket,
          <br /> it’s never too late to build your nest egg.
        </p>

        <FeaturesWrapper>
          <Features>
            <img src={Mobile} alt="icon" width={"32px"} />
            <h3>Invest any amount</h3>
            <p>
              Whether it’s $1 or $1,000,000, we can put your money to work for
              you.
            </p>
          </Features>

          <Features>
            <img src={Mobile} alt="icon" width={"32px"} />
            <h3>Invest any amount</h3>
            <p>
              Whether it’s $1 or $1,000,000, we can put your money to work for
              you.
            </p>
          </Features>

          <Features>
            <img src={Mobile} alt="icon" width={"32px"} />
            <h3>Invest any amount</h3>
            <p>
              Whether it’s $1 or $1,000,000, we can put your money to work for
              you.
            </p>
          </Features>

          <Features>
            <img src={Mobile} alt="icon" width={"32px"} />
            <h3>Invest any amount</h3>
            <p>
              Whether it’s $1 or $1,000,000, we can put your money to work for
              you.
            </p>
          </Features>

          <Features>
            <img src={Mobile} alt="icon" width={"32px"} />
            <h3>Invest any amount</h3>
            <p>
              Whether it’s $1 or $1,000,000, we can put your money to work for
              you.
            </p>
          </Features>

          <Features>
            <img src={Mobile} alt="icon" width={"32px"} />
            <h3>Invest any amount</h3>
            <p>
              Whether it’s $1 or $1,000,000, we can put your money to work for
              you.
            </p>
          </Features>
        </FeaturesWrapper>
      </Container>
    </FeaturesSectionContainer>
  );
};
