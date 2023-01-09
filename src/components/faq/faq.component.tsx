import { Container } from "../primitives/container/container.component";
import {
  StyledParagraph,
  SubTitle,
} from "../primitives/text/text.component.styles";
import {
  FaqContainer,
  FaqHeading,
  FaqTitle,
  FAQWrapper,
  GridContainer,
} from "./faq.component.styles";

const Faq = [
  {
    question: "Who should use Safient voucher?",
    answer:
      "Are you looking to gift crypto assets to someone? Do you want to send crypto to someone but don't have their wallet address? We got you covered 🤗. Safient Voucher can do it with ease and safety.",
  },
  {
    question: "Who should use Safient voucher?",
    answer:
      "Are you looking to gift crypto assets to someone? Do you want to send crypto to someone but don't have their wallet address? We got you covered 🤗. Safient Voucher can do it with ease and safety.",
  },
  {
    question: "Who should use Safient voucher?",
    answer:
      "Are you looking to gift crypto assets to someone? Do you want to send crypto to someone but don't have their wallet address? We got you covered 🤗. Safient Voucher can do it with ease and safety.",
  },
  {
    question: "Who should use Safient voucher?",
    answer:
      "Are you looking to gift crypto assets to someone? Do you want to send crypto to someone but don't have their wallet address? We got you covered 🤗. Safient Voucher can do it with ease and safety.",
  },
];

export const FaqSection = () => {
  return (
    <Container>
      <FaqContainer id="faq">
        <FaqTitle>Frequently asked questions</FaqTitle>
        <SubTitle>
          If you have anything else you want to ask, reach out to us
        </SubTitle>

        <GridContainer>
          {Faq.map((q, index) => (
            <FAQWrapper key={index}>
              <FaqHeading>{q.question}</FaqHeading>
              <StyledParagraph>{q.answer}</StyledParagraph>
            </FAQWrapper>
          ))}
        </GridContainer>
      </FaqContainer>
    </Container>
  );
};
