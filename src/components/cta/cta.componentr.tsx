import {
  Button,
  CTAContainer,
  CTAHeading,
  CTASubHeading,
} from "./cta.component.styles";

export const CTASection = () => {
  return (
    <CTAContainer>
      <CTAHeading> Stay in the loop</CTAHeading>
      <CTASubHeading>
        Join our Discord server to stay on top of our developments
      </CTASubHeading>
      <Button
        onClick={() => {
          window.open("https://discord.com/invite/ptDKn9RyRB");
        }}
      >
        Join now
      </Button>
    </CTAContainer>
  );
};
