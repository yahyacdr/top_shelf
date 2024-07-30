/* eslint-disable react/display-name */

import styled from "styled-components";
import Heading from "../../ui/Heading";
import Filter from "../../ui/Filter";
import { filters } from "../../data/Static/StaticData";
import PropTypes from "prop-types";
import screens from "../../utils/screens";
import useWindowSize from "../../hooks/useWindowSize";
import { memo } from "react";

const StyledFilterContainer = styled.section`
  grid-area: section2;
  background-color: var(--light-300);
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--light-600);
  margin-bottom: 24px;
  padding: 16px;
  .filter-container {
    gap: 15px;
  }
  @media (max-width: ${screens.mobile.xm}) {
    &.filter-section {
      padding: 16px 0;
    }
  }

  @media (max-width: ${screens.mobile.m}) {
    .filter-container {
      justify-content: center;
    }
  }

  h4 {
    text-transform: capitalize;
    color: var(--dark-900);
    margin-bottom: 0;
  }
`;

const FilterSection = memo(() => {
  const isDesktopView = useWindowSize(962);

  return (
    <StyledFilterContainer className="filter-section">
      <Heading as="h4">shop</Heading>
      <Filter className="filter-container">
        {!isDesktopView && (
          <Filter.SelectBox id="categories" shape="pill">
            <Filter.Option value="filter" defaultValue>
              Filter
            </Filter.Option>
            {filters.map((filter, i) => (
              <Filter.Option key={i} value={filter.name} data-index={i}>
                {filter.name}
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
});

FilterSection.propTypes = {
  isTabletView: PropTypes.bool,
};

export default FilterSection;
