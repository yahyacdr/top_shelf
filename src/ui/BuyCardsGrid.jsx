import PropTypes from "prop-types";
import BuyCard from "../features/BuyCard/BuyCard";
import Menu from "./Menu";
import { memo } from "react";
import ContentLoadingAnimation from "./ContentLoadingAnimation";
import useFetchProducts from "../hooks/useFetchProducts";
import CartProvider from "../features/cart/cartContext";
import { useFilter } from "../context/filterContext";
import Heading from "./Heading";

// eslint-disable-next-line react/display-name
const BuyCardsGrid = memo(({ children }) => {
  const { currentFilter } = useFilter();
  const { items, isLoading } = useFetchProducts(currentFilter.filter, true);

  if (isLoading) return <ContentLoadingAnimation />;

  return (
    <>
      {children}
      <Menu.ItemCards distribution="grid" className="cards-container">
        {items.length ? (
          items.map((bc) => (
            <Menu.CardContainer
              key={bc.id}
              width="291px"
              className="card-container"
            >
              <CartProvider>
                <BuyCard bc={bc} />
              </CartProvider>
            </Menu.CardContainer>
          ))
        ) : (
          <Heading
            as="h2"
            style={{
              color: "var(--dark-900)",
              textAlign: "center",
              marginInline: "auto",
            }}
          >
            Unfortunately {currentFilter.name} are not available!
          </Heading>
        )}
      </Menu.ItemCards>
    </>
  );
});

BuyCardsGrid.propTypes = {
  children: PropTypes.array,
};

export default BuyCardsGrid;
