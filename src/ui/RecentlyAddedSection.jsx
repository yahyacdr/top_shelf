import styled from "styled-components";
import Heading from "./Heading";
import Btn from "./Btn";
import { Filter } from "./Filter";
import { useState } from "react";
import Menu from "./Menu";
import { buyCards } from "../data/Static/StaticData";
import BuyCard from "../features/BuyCard/BuyCard";
import { Link } from "react-router-dom";

const StyledRecentlyAddedSection = styled.section`
  & h1 {
    color: var(--dark-800);
  }
  & > div:nth-child(2) {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 96px;
    padding: 30px 58px 0 0;
  }
  & > div:last-child {
    & > div {
      height: 568px;
    }
  }
  & a {
    font-size: inherit;
  }
  .view-all-btn {
    width: 66px;
  }
`;

const FilterSection = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
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

export default function RecentlyAddedSection() {
  const [active, setActive] = useState(true);
  let a = 1;
  if (a === 0) setActive(true);
  return (
    <StyledRecentlyAddedSection>
      <Heading as="h1">recently added</Heading>
      <div>
        <FilterSection>
          <Heading as="h3">Filter by Interest</Heading>
          <Filter>
            <Btn
              size="medium"
              variation="secondary"
              shape="pill"
              color={`${active ? "--green-900" : "--dark-300"}`}
              active={active}
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
        <Btn
          variation="regular"
          size="small"
          shape="none"
          color="--green-200"
          className="view-all-btn"
        >
          <Link to="/">View all</Link>
        </Btn>
      </div>
      <Menu.ItemCards distribution="grid">
        {buyCards.slice(4).map((bc) => (
          <Menu.CardContainer key={bc.id} width="291px">
            <BuyCard bc={bc} />
          </Menu.CardContainer>
        ))}
      </Menu.ItemCards>
    </StyledRecentlyAddedSection>
  );
}
