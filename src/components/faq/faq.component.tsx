import { SecondaryHeading } from "../primitives/text/text.component";
import {
  ConteintHeading,
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

export const FaqSection = () => {
  return (
    <FaqContainer>
      <FaqTitle>Frequently asked questions</FaqTitle>
      <SubTitle>
        If you have anything else you want to ask, reach out to us
      </SubTitle>

      <GridContainer>
        <FAQWrapper>
          <FaqHeading>Who should use Safient voucher?</FaqHeading>
          <StyledParagraph>
            Are you looking to gift crypto assets to someone? Do you want to
            send crypto to someone but don't have their wallet address? We got
            you covered 🤗. Safient Voucher can do it with ease and safety.
          </StyledParagraph>
        </FAQWrapper>
        <FAQWrapper>
          <FaqHeading>Who should use Safient voucher?</FaqHeading>
          <StyledParagraph>
            Are you looking to gift crypto assets to someone? Do you want to
            send crypto to someone but don't have their wallet address? We got
            you covered 🤗. Safient Voucher can do it with ease and safety.
          </StyledParagraph>
        </FAQWrapper>
        <FAQWrapper>
          <FaqHeading>Who should use Safient voucher?</FaqHeading>
          <StyledParagraph>
            Are you looking to gift crypto assets to someone? Do you want to
            send crypto to someone but don't have their wallet address? We got
            you covered 🤗. Safient Voucher can do it with ease and safety.
          </StyledParagraph>
        </FAQWrapper>
        <FAQWrapper>
          <FaqHeading>Who should use Safient voucher?</FaqHeading>
          <StyledParagraph>
            Are you looking to gift crypto assets to someone? Do you want to
            send crypto to someone but don't have their wallet address? We got
            you covered 🤗. Safient Voucher can do it with ease and safety.
          </StyledParagraph>
        </FAQWrapper>
      </GridContainer>
    </FaqContainer>
  );
};
