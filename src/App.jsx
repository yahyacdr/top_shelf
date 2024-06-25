import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Landing from "./pages/Landing/Landing";
import AppLayout from "./ui/AppLayout";
import PublicStyles from "./styles/PublicStyles";
import Categories from "./pages/Categories/Categories";
import Product from "./pages/ProductPage/Product";

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
    <>
      <RouterProvider router={router} />
      <PublicStyles />
    </>
  );
}

export default App;
