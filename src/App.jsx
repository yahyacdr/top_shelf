import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Landing from "./pages/Landing/Landing";
import AppLayout from "./ui/AppLayout";
import PublicStyles from "./styles/PublicStyles";
import Categories from "./pages/Categories/Categories";
import Product from "./pages/ProductPage/Product";

import store from "./store";
import { Provider } from "react-redux";
import PageNotFoundAnimation from "./ui/PageNotFoundAnimation";
import ErrorAnimation from "./ui/ErrorAnimation";
import Cart from "./pages/Cart/Cart";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <PageNotFoundAnimation />,
    children: [
      {
        path: "/",
        element: <Landing />,
        errorElement: <ErrorAnimation />,
      },
      {
        path: "/category",
        element: <Categories />,
        errorElement: <ErrorAnimation />,
      },
      {
        path: "/product",
        element: <Product />,
        errorElement: <ErrorAnimation />,
      },
      {
        path: "/cart",
        element: <Cart />,
        errorElement: <ErrorAnimation />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
      <PublicStyles />
    </Provider>
  );
}

export default App;
