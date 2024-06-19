import styled from "styled-components";
import Heading from "../../ui/Heading";
import Divider from "../../ui/Divider";
import Filter from "../../ui/Filter";

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
`;
const StyledFilterContainer = styled.div`
  > p {
    color: var(--dark-300);
    font-size: var(--font-size-small-50);
    font-weight: 300;
    text-transform: uppercase;
    margin-bottom: 20px;
  }
`;

export default function SideFilterSection() {
  return (
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
        <p>order by</p>
        <Filter direction={"vertical"}>
          <Filter.Range min={0} max={100} />
        </Filter>
      </StyledFilterContainer>
    </StyledSection>
  );
}
