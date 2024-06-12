import styled from "styled-components";
import Heading from "../../ui/Heading";
import Filter from "../../ui/Filter";
import { filters } from "../../data/Static/StaticData";
import PropTypes from "prop-types";
import screens from "../../utils/screens";

const StyledFilterContainer = styled.section`
  background-color: var(--light-300);
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--light-600);
  margin-bottom: 24px;
  padding: 16px;
  @media (max-width: ${screens.m}) {
    &.filter-section {
      padding: 16px 3px;
    }
  }

  h4 {
    text-transform: capitalize;
    color: var(--dark-900);
    margin-bottom: 0;
  }
`;

export default function FilterSection({ isTabletView }) {
  return (
    <StyledFilterContainer className="filter-section">
      <Heading as="h4">shop</Heading>
      <Filter>
        {!isTabletView && (
          <Filter.SelectBox id="canibs" shape="pill">
            <Filter.Option value="filter" defaultValue>
              Filter
            </Filter.Option>
            {filters.map((filter, i) => (
              <Filter.Option key={i} value={filter}>
                {filter}
              </Filter.Option>
            ))}
          </Filter.SelectBox>
        )}
        <Filter.SelectBox shape="pill">
          <Filter.Option value="sort by lates" defaultValue>
            Sort By Lates
          </Filter.Option>
        </Filter.SelectBox>
      </Filter>
    </StyledFilterContainer>
  );
}

FilterSection.propTypes = {
  isTabletView: PropTypes.bool,
};
