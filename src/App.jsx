import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Landing from "./pages/Landing/Landing";
import AppLayout from "./ui/AppLayout";
import PublicStyles from "./styles/PublicStyles";
import Categories from "./pages/Categories/Categories";
import Product from "./pages/ProductPage/Product";

import store from "./store";
import { Provider } from "react-redux";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Landing />,
      },
      {
        path: "/category",
        element: <Categories />,
      },
      {
        path: "/product",
        element: <Product />,
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
