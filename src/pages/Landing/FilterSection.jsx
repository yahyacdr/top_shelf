/* eslint-disable react/display-name */
import { memo, useState } from "react";
import Heading from "../../ui/Heading";
import { CardFilterContext } from "../../utils/context";
import Filter from "../../ui/Filter";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledFilterSection = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 960px;
  flex-wrap: wrap;
  row-gap: 15px;
  column-gap: 30px;
  & h3 {
    color: var(--dark-800);
    font-weight: 400;
    margin-bottom: 0;
  }
  & button {
    text-transform: capitalize;
  }

  .filter {
    column-gap: 10px;
    flex-grow: 1;
  }
`;

const FilterSection = memo(({ contents, hasTitle = true }) => {
  const [currentFilter, setCurrentFilter] = useState(contents[0]);

  return (
    <StyledFilterSection>
      {hasTitle && <Heading as="h3">Filter by Interest</Heading>}
      <CardFilterContext.Provider value={{ currentFilter, setCurrentFilter }}>
        <Filter className="filter">
          {contents.map((content, i) => (
            <Filter.Pill key={i} content={content}>
              {content}
            </Filter.Pill>
          ))}
        </Filter>
      </CardFilterContext.Provider>
    </StyledFilterSection>
  );
});

FilterSection.propTypes = {
  contents: PropTypes.array,
  hasTitle: PropTypes.bool,
};

export default FilterSection;
