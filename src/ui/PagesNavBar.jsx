import styled from "styled-components";
import Btn from "./Btn";

const PagesNames = [
  "Shop All",
  "Flower",
  "Edibles",
  "Mushrooms",
  "Promotions/Bundles",
  "Support",
  "Rewards",
  "Blog",
];

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 75%;
  margin: 15px 0;
`;

export default function PagesNavBar() {
  return (
    <StyledContainer>
      {PagesNames.map((pn) => (
        <Btn
          size="small"
          variation="regular"
          shape="none"
          color="--dark-600"
          key={pn}
        >
          {pn}
        </Btn>
      ))}
    </StyledContainer>
  );
}
