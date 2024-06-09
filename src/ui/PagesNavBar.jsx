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
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 15px 0;
  column-gap: 48px;
  flex-wrap: wrap;
  padding-inline: 32px;
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
          className="pages-btns"
          disabled={true}
        >
          {pn}
        </Btn>
      ))}
    </StyledContainer>
  );
}
