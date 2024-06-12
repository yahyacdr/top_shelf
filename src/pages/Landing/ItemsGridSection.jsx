import styled from "styled-components";
import Heading from "../../ui/Heading";
import Filter from "../../ui/Filter";
import Btn from "../../ui/Btn";
import { useState } from "react";
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
  const [active, setActive] = useState(true);
  let a = 1;
  if (a === 0) setActive(true);
  return (
    <StyledItemsGridSection>
      <BuyCardsGrid>
        <Heading as="h1">choose your weed</Heading>
        <FilterSection>
          <Heading as="h3">Filter by Interest</Heading>
          <Filter>
            <Btn
              size="medium"
              variation="secondary"
              shape="pill"
              color={`${active ? "--green-900" : "--dark-300"}`}
              active="active"
              custom={{ "max-width": "280px" }}
            >
              flowers
            </Btn>
            <Btn
              size="medium"
              variation="secondary"
              shape="pill"
              color="--dark-300"
              custom={{ "max-width": "280px" }}
            >
              mushrooms
            </Btn>
            <Btn
              size="medium"
              variation="secondary"
              shape="pill"
              color="--dark-300"
              custom={{ "max-width": "280px" }}
            >
              concentrate
            </Btn>
            <Btn
              size="medium"
              variation="secondary"
              shape="pill"
              color="--dark-300"
              custom={{ "max-width": "280px" }}
            >
              edibles
            </Btn>
            <Btn
              size="medium"
              variation="secondary"
              shape="pill"
              color="--dark-300"
              custom={{ "max-width": "280px" }}
            >
              shop all weed
            </Btn>
          </Filter>
        </FilterSection>
      </BuyCardsGrid>
    </StyledItemsGridSection>
  );
}
