import styled from "styled-components";
import Heading from "../../ui/Heading";
import Filter from "../../ui/Filter";
import BuyCardsGrid from "../../ui/BuyCardsGrid";

const StyledItemsGridSection = styled.section`
  & h1 {
    color: var(--dark-800);
  }
  & > div:last-child {
    & > div {
      height: 568px;
    }
  }

  .cards-container {
    @media (max-width: 390px) {
      column-gap: 24px;
    }
  }
  .card-container {
    width: 291px;
    @media (max-width: 540px) {
      width: 45%;
    }
  }
  .label-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const FilterSection = styled.div`
  padding: 30px 0 0;
  width: 100%;
  margin-bottom: 96px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 960px;
  flex-wrap: wrap;
  height: 150px;
  & h3 {
    color: var(--dark-800);
    font-weight: 400;
    margin-bottom: 0;
  }
  & button {
    text-transform: capitalize;
  }
`;

export default function ItemsGridSection() {
  return (
    <StyledItemsGridSection>
      <BuyCardsGrid>
        <Heading as="h1">choose your weed</Heading>
        <FilterSection>
          <Heading as="h3">Filter by Interest</Heading>
          <Filter>
            <Filter.Pill content="flowers" active={true} />
            <Filter.Pill content="mushrooms" active={false} />
            <Filter.Pill content="concentrate" active={false} />
            <Filter.Pill content="edibles" active={false} />
            <Filter.Pill content="shop all weed" active={false} />
          </Filter>
        </FilterSection>
      </BuyCardsGrid>
    </StyledItemsGridSection>
  );
}
