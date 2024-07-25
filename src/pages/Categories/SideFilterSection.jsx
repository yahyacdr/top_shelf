/* eslint-disable react/display-name */

import styled from "styled-components";
import Heading from "../../ui/Heading";
import Divider from "../../ui/Divider";
import Filter from "../../ui/Filter";
import { memo, useState } from "react";
import { formatCurrencyWithCommas } from "../../utils/helper";
import Btn from "../../ui/Btn";
import PostProvider, { usePost } from "../../context/postContext";

const filters = [
  {
    id: 1,
    name: "Sales",
    checked: false,
    quantity: Math.ceil(Math.random() * 1000),
  },
  {
    id: 2,
    name: "Cannabis",
    checked: true,
    quantity: Math.ceil(Math.random() * 1000),
  },
  {
    id: 3,
    name: "Pre-Rolls",
    checked: false,
    quantity: Math.ceil(Math.random() * 1000),
  },
  {
    id: 4,
    name: "CBD Oil",
    checked: false,
    quantity: Math.ceil(Math.random() * 1000),
  },
  {
    id: 5,
    name: "Magic Mushrooms",
    checked: false,
    quantity: Math.ceil(Math.random() * 1000),
  },
  {
    id: 6,
    name: "Extracts",
    checked: false,
    quantity: Math.ceil(Math.random() * 1000),
  },
  {
    id: 7,
    name: "Edibles",
    checked: false,
    quantity: Math.ceil(Math.random() * 1000),
  },
  {
    id: 8,
    name: "Vape Pens",
    checked: false,
    quantity: Math.ceil(Math.random() * 1000),
  },
  {
    id: 9,
    name: "Accessories",
    checked: false,
    quantity: Math.ceil(Math.random() * 1000),
  },
  {
    id: 10,
    name: "Bath & Body",
    checked: false,
    quantity: Math.ceil(Math.random() * 1000),
  },
  {
    id: 11,
    name: "Bundles",
    checked: false,
    quantity: Math.ceil(Math.random() * 1000),
  },
  {
    id: 12,
    name: "Wholesale",
    checked: false,
    quantity: Math.ceil(Math.random() * 1000),
  },
];

const orders = [
  {
    id: 1,
    name: "Default",
    checked: false,
  },
  {
    id: 2,
    name: "Review Count",
    checked: true,
  },
  {
    id: 3,
    name: "Popularity",
    checked: false,
  },
  {
    id: 4,
    name: "Average Rating",
    checked: false,
  },
  {
    id: 5,
    name: "Newness",
    checked: false,
  },
  {
    id: 6,
    name: "Price: Low to High",
    checked: false,
  },
  {
    id: 7,
    name: "Price: High to Low",
    checked: false,
  },
  {
    id: 8,
    name: "Random Products",
    checked: false,
  },
  {
    id: 9,
    name: "Product Name: A to Z",
    checked: false,
  },
];

const StyledSection = styled.section`
  grid-area: filter;
  padding: 16px;
  h4 {
    color: var(--dark-900);
    text-transform: capitalize;
    font-size: var(--font-size-medium-66);
    margin-bottom: 22px;
  }
  > span {
    margin-bottom: 20px;
  }
  > button {
    background-color: #f3fbf4;
    color: var(--green-200);
    border: none;
    font-size: var(--font-size-small-100);
    font-weight: 400;
    padding: 10px 32px;
    &:hover {
      border: none;
      background-color: #f3fbf4;
      color: var(--green-200);
      outline: none;
    }
  }
`;
const StyledFilterContainer = styled.div`
  margin-bottom: 40px;
  max-width: 272px;

  > p {
    color: var(--dark-300);
    font-size: var(--font-size-small-50);
    font-weight: 300;
    text-transform: uppercase;
    margin-bottom: 20px;
  }
  > button {
    font-size: var(--font-size-small-100);
    font-weight: 300;
    padding: 10px 32px;
    margin-top: 16px;
  }
`;

const ValueLabel = styled.span`
  padding: 5px 10px;
  color: var(--dark-900);
  border-radius: 100px;
  background-color: var(--light-600);
  font-size: var(--font-size-small-50);
`;

const ValueLabels = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SideFilterSection = memo(() => {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(50000);

  return (
    <PostProvider
      value={{
        minValue,
        maxValue,
        setMaxValue,
        setMinValue,
      }}
    >
      <StyledSection>
        <Heading as="h4">filters</Heading>
        <Divider width="100%" color="var(--light-600)" />
        <StyledFilterContainer>
          <p>product category</p>
          <Filter direction="vertical">
            {filters.map((filter) => (
              <Filter.Radio
                content={filter.name}
                name="categoryOption"
                id={`catOption${filter.id}`}
                quantity={filter.quantity}
                checked={filter.checked}
                key={filter.id}
              />
            ))}
          </Filter>
        </StyledFilterContainer>
        <StyledFilterContainer>
          <p>filter by price</p>
          <ValueLabels>
            <MinValueLabel />
            <MaxValueLabel />
          </ValueLabels>
          <Filter direction={"vertical"}>
            <Filter.MultiRange />
          </Filter>
          <Btn variation="primary" size="medium" shape="pill">
            Apply
          </Btn>
        </StyledFilterContainer>
        <StyledFilterContainer>
          <p>order by</p>
          <Filter direction="vertical">
            {orders.map((order) => (
              <Filter.Radio
                content={order.name}
                name="orderOption"
                id={`orderOption${order.id}`}
                checked={order.checked}
                key={order.id}
              />
            ))}
          </Filter>
        </StyledFilterContainer>
        <StyledFilterContainer>
          <p>filter by reviews</p>
          <Filter direction="vertical">
            {[5, 4, 3, 2, 1].map((i) => (
              <Filter.Check
                key={i}
                label={<Filter.StarReview starsNum={i} />}
              />
            ))}
          </Filter>
        </StyledFilterContainer>
        <Btn variation="secondary" size="medium" shape="pill">
          Clear Filters
        </Btn>
      </StyledSection>
    </PostProvider>
  );
});

const MinValueLabel = memo(() => {
  const { minValue } = usePost();
  return <ValueLabel>{formatCurrencyWithCommas(minValue)}</ValueLabel>;
});

const MaxValueLabel = memo(() => {
  const { maxValue } = usePost();
  return <ValueLabel>{formatCurrencyWithCommas(maxValue)}</ValueLabel>;
});

export default SideFilterSection;
