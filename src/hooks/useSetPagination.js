import { useEffect } from "react";
import { containsArray } from "../utils/helper";
import { usePaginated } from "../context/paginationContext";
import { useFilter } from "../context/filterContext";

export default function useSetPagination(items) {
  const { activeIndex, dispatch: dispatchPage } = usePaginated();
  const { count } = useFilter();

  useEffect(() => {
    dispatchPage({
      type: "SET_IS_ARRAY",
      payload: containsArray(items),
    });
    if (containsArray(items))
      dispatchPage({
        type: "SET_COUNT",
        payload: count,
      });
    dispatchPage({
      type: "SET_TABS_COUNT",
      payload: items.length,
    });
  }, [count, items, dispatchPage]);

  useEffect(() => {
    if (containsArray(items)) {
      dispatchPage({
        type: "SET_TAB_LENGTH",
        payload:
          activeIndex > 0
            ? items
                .slice(0, activeIndex + 1)
                .reduce((acc, curr) => acc + curr.length, 0)
            : items[activeIndex].length,
      });
      dispatchPage({
        type: "SET_PREV_TAB_LENGTH",
        payload:
          activeIndex > 0
            ? items
                .slice(0, activeIndex)
                .reduce((acc, curr) => acc + curr.length, 0)
            : 1,
      });
    }
  }, [items, activeIndex, dispatchPage]);
}
