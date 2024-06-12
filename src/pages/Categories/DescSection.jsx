import styled from "styled-components";
import Heading from "../../ui/Heading";

const StyledDescContainer = styled.section`
  padding: 16px;
  h4 {
    color: var(--green-200);
    font-weight: 500;
    text-transform: capitalize;
    margin-bottom: 16px;
  }

  p {
    color: var(--dark-300);
    font-size: var(--font-size-small-100);
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 0px;
  }
`;

export default function DescSection() {
  return (
    <StyledDescContainer>
      <Heading as="h4">cannabis</Heading>
      <p>
        Here at WestCoastSupply’s “ cannabis section, we showcase the best
        Indica, Hybrid, and Sativa medical cannabis strain selections at the
        best prices online. You can be assured that all our strains go through a
        strict screening process to ensure that all your cannabis needs are
        top-quality. All of our flowers are sourced from reputable growers,
        based in British Columbia, Canada. We have hige grade selection comes
        from growers that produce AAAA+ quality cannabis flowers and have many
        years of experience in the cannabis industry. You are guaranteed to be
        receiving high-quality flowers at the best prices online with our
        unbeatable sales!
      </p>
    </StyledDescContainer>
  );
}
