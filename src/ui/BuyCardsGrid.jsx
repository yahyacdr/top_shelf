import PropTypes from "prop-types";
import BuyCard from "../features/BuyCard/BuyCard";
import Menu from "./Menu";
import { memo, useEffect } from "react";
import ContentLoadingAnimation from "./ContentLoadingAnimation";
import CartProvider from "../features/cart/cartContext";
import { fetchFilteredProducts, useFilter } from "../context/filterContext";
import Heading from "./Heading";
import { usePaginated } from "../context/paginationContext";
import { containsArray } from "../utils/helper";
import useSetPagination from "../hooks/useSetPagination";

// eslint-disable-next-line react/display-name
const BuyCardsGrid = memo(({ children, filterDefaultValue }) => {
  const { items, isLoading, currentFilter, dispatch } = useFilter();
  const { activeIndex } = usePaginated();

  useEffect(() => {
    dispatch({
      type: "SET_FILTER",
      payload: filterDefaultValue,
    });
  }, [dispatch, filterDefaultValue]);

  useEffect(() => {
    async function fetchData() {
      if (currentFilter) {
        dispatch({
          type: "SET_DATA",
          payload: await fetchFilteredProducts(currentFilter, dispatch),
        });
      }
    }
    fetchData();
  }, [currentFilter, dispatch]);

  useSetPagination(items);

  if (isLoading) return <ContentLoadingAnimation />;

  return (
    <>
      {children}
      <Menu.ItemCards distribution="grid" className="cards-container">
        {items.length ? (
          containsArray(items) ? (
            items[activeIndex].map((bc) => (
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
          )
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
  filterDefaultValue: PropTypes.object,
};

export default BuyCardsGrid;
