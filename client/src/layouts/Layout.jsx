import React, { useState } from "react";
import Header from "../components/shared/header/Header";
import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Footer from "../components/shared/footer/Footer";
import Loading from "../components/Loading/Loading";

const Layout = () => {
  const navigationState = useNavigation();
  console.log(navigationState.state);
  const location = useLocation();
  if (navigationState.state === "loading") {
    
    return <Loading />;
  } else {
    return (
      <div>
        <Header />
        <main className={location.pathname === "/" ? "mt-0" : "mt-[160px]"}>
          <Outlet />
        </main>
        <Footer />
      </div>
    );
  }
};

export default Layout;
