import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import { Header, Navbar } from "../components";
import Loading from "../components/Loading";

const HomeLayout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <>
      <Header />
      <Navbar />

      {isLoading ? (
        <Loading />
      ) : (
        <main className="align-element">
          <Outlet />
        </main>
      )}
    </>
  );
};

export default HomeLayout;
