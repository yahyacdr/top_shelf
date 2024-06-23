import PropTypes from "prop-types";
import { buyCards } from "../data/Static/StaticData";
import BuyCard from "../features/BuyCard/BuyCard";
import Menu from "./Menu";
import { memo } from "react";

// eslint-disable-next-line react/display-name
const BuyCardsGrid = memo(({ children }) => {
  return (
    <>
      {children}
      <Menu.ItemCards distribution="grid" className="cards-container">
        {buyCards.map((bc) => (
          <Menu.CardContainer
            key={bc.id}
            width="291px"
            className="card-container"
          >
            <BuyCard bc={bc} />
          </Menu.CardContainer>
        ))}
      </Menu.ItemCards>
    </>
  );
});

BuyCardsGrid.propTypes = {
  children: PropTypes.array,
};

export default BuyCardsGrid;
