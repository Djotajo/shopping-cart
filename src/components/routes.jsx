import App from "../App.jsx";
import Home from "./displayHome.jsx";
import Shop from "./displayShop.jsx";
import Cart from "./displayCart.jsx";
import ErrorPage from "./errorPage.jsx";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <ErrorPage />,
  },
];

export default routes;
