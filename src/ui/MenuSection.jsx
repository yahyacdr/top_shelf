import styled from "styled-components";
import Heading from "./Heading";
import { Filter } from "./Filter";
import Btn from "./Btn";
import { useState } from "react";

const StyledMenuSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 50px 0;
  width: 100%;
`;

const FilterSection = styled.div`
  padding: 30px 0 0 50px;
  width: 100%;
`;

export default function MenuSection() {
  const [active, setActive] = useState(true);
  let a = 1;
  if (a == 0) setActive(true);
  return (
    <StyledMenuSection>
      <Heading
        as="h1"
        custom={{
          color: "var(--dark-900)",
          "text-align": "center",
          "max-width": "600px",
        }}
      >
        best dispensary to buy weed online in canada
      </Heading>
      <FilterSection>
        <Filter>
          <Btn
            size="medium"
            variation="secondary"
            shape="pill"
            color={`${active ? "--green-900" : "--dark-300"}`}
            active={active}
            custom={{ "max-width": "280px" }}
          >
            Best seller
          </Btn>
          <Btn
            size="medium"
            variation="secondary"
            shape="pill"
            color="--dark-300"
            custom={{ "max-width": "280px" }}
          >
            Bundles & Promotions
          </Btn>
          <Btn
            size="medium"
            variation="secondary"
            shape="pill"
            color="--dark-300"
            custom={{ "max-width": "280px" }}
          >
            On Sale
          </Btn>
        </Filter>
      </FilterSection>
    </StyledMenuSection>
  );
}
