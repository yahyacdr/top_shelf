import PropTypes from "prop-types";
import BuyCard from "../features/BuyCard/BuyCard";
import Menu from "./Menu";
import { memo } from "react";
import ContentLoadingAnimation from "./ContentLoadingAnimation";
import useFetchProducts from "../hooks/useFetchProducts";
import CartProvider from "../features/cart/cartContext";

// eslint-disable-next-line react/display-name
const BuyCardsGrid = memo(({ children }) => {
  const { items, isLoading } = useFetchProducts();

  if (isLoading) return <ContentLoadingAnimation />;

  return (
    <>
      {children}
      <Menu.ItemCards distribution="grid" className="cards-container">
        {items.map((bc) => (
          <Menu.CardContainer
            key={bc.id}
            width="291px"
            className="card-container"
          >
            <CartProvider>
              <BuyCard bc={bc} />
            </CartProvider>
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
