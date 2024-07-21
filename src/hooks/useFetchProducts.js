import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../features/products/productsSlice";
import { fetchProductsWithFilter } from "../features/filter/filterSlice";

export default function useFetchProducts(filter, isFiltered = false) {
  const dispatch = useDispatch();
  useEffect(() => {
    if (isFiltered) {
      dispatch(fetchProductsWithFilter(filter));
    } else {
      dispatch(fetchProducts());
    }
  }, [dispatch, isFiltered, filter]);
  const store = isFiltered ? "filter" : "products";
  const data = useSelector((state) => state[store]);

  return data;
}
