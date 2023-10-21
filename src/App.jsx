import React, { Suspense, lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { store } from "../store.jsx";
import {
  About,
  Cart,
  Error,
  Landing,
  Login,
  Orders,
  Products,
  Register,
  SingleProduct,
} from "./pages";
import { ErrorElement } from "./components";
import { loader as landingLoader } from "./pages/Landing";
import { loader as singleProductLoader } from "./pages/SingleProduct";
import { loader as productsLoader } from "./pages/Products";
import Loading from "./components/Loading";
import { action as registerAction } from "./pages/Register";
import { action as loginAction } from "./pages/Login";
import { loader as checkoutLoader } from "./pages/Checkout.jsx";
import { action as loaderAction } from "./components/CheckoutForm.jsx";
import { loader as ordersLoader } from "./pages/Orders.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const HomeLoader = React.lazy(() => import("./pages/HomeLayout"));
const CheckoutComp = lazy(() => import("./pages/Checkout.jsx"));

const queryClient = new QueryClient({
  defaultOptions: {
    query: {
      staleTime: 1000 * 60 * 5,
    },
  },
});

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Suspense fallback={<Loading />}>
          <HomeLoader />
        </Suspense>
      ),
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Landing />,
          errorElement: <ErrorElement />,
          loader: landingLoader(queryClient),
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "products",
          element: <Products />,
          loader: productsLoader(queryClient),
        },
        {
          path: "product/:id",
          element: <SingleProduct />,
          errorElement: <ErrorElement />,
          loader: singleProductLoader(queryClient),
        },
        {
          path: "cart",
          element: <Cart />,
        },
        {
          path: "checkout",
          element: <CheckoutComp />,
          loader: checkoutLoader(store , queryClient),
          action: loaderAction(store),
        },
        {
          path: "orders",
          element: <Orders />,
          loader: ordersLoader(store , queryClient),
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
      errorElement: <Error />,
      action: loginAction(store),
    },
    {
      path: "/register",
      element: <Register />,
      errorElement: <Error />,
      action: registerAction,
    },
  ]);
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </>
  );
};

export default App;
