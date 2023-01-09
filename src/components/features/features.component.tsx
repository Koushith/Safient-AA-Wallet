//@ts-nocheck
import { Container } from "../primitives/container/container.component";
import {
  Features,
  FeaturesSectionContainer,
  FeaturesWrapper,
} from "./features.component.styles";

const features = [
  {
    icon: require("../../assets/icons/mobile.svg").default,
    heading: "Invest any amount",
    description:
      "Whether it’s $1 or $1,000,000, we can put your money to work for you.",
  },
  {
    icon: require("../../assets/icons/mobile.svg").default,
    heading: "Invest any amount",
    description:
      "Whether it’s $1 or $1,000,000, we can put your money to work for you.",
  },
  {
    icon: require("../../assets/icons/mobile.svg").default,
    heading: "Invest any amount",
    description:
      "Whether it’s $1 or $1,000,000, we can put your money to work for you.",
  },
  {
    icon: require("../../assets/icons/mobile.svg").default,
    heading: "Invest any amount",
    description:
      "Whether it’s $1 or $1,000,000, we can put your money to work for you.",
  },
  {
    icon: require("../../assets/icons/mobile.svg").default,
    heading: "Invest any amount",
    description:
      "Whether it’s $1 or $1,000,000, we can put your money to work for you.",
  },
  {
    icon: require("../../assets/icons/mobile.svg").default,
    heading: "Invest any amount",
    description:
      "Whether it’s $1 or $1,000,000, we can put your money to work for you.",
  },
];

export const FeaturesSection = () => {
  return (
    <FeaturesSectionContainer id="features">
      <Container>
        <h2 className="heading">Now is the time to build your portfolio.</h2>
        <p className="sub-heading">
          With typical market returns, you have to start young to secure your
          future. With Pocket,
          <br /> it’s never too late to build your nest egg.
        </p>

        <FeaturesWrapper>
          {features.map((f, index) => (
            <Features key={index}>
              <img src={f.icon} alt="icon" width={"32px"} />
              <h3>{f.heading}</h3>
              <p>{f.description}</p>
            </Features>
          ))}
        </FeaturesWrapper>
      </Container>
    </FeaturesSectionContainer>
  );
};
