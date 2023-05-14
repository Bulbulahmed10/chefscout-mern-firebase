import React, { createContext, useEffect, useState } from "react";
import Header from "../components/shared/header/Header";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/shared/footer/Footer";

export const RecipesAndChefsContext = createContext(null);
const Layout = () => {
  const location = useLocation();
  const [recipes, setRecipes] = useState([]);
  const [chefs, setChefs] = useState([]);
  useEffect(() => {
    fetch("https://chefscout.vercel.app/recipes")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  useEffect(() => {
    fetch("https://chefscout.vercel.app/chefs")
      .then((res) => res.json())
      .then((data) => setChefs(data));
  }, []);
  return (
    <RecipesAndChefsContext.Provider
      value={{ recipes, setRecipes, chefs, setChefs }}>
      <Header />
      <main className={location.pathname === "/" ? "mt-0" : "mt-[160px]"}>
        <Outlet />
      </main>
      <Footer />
    </RecipesAndChefsContext.Provider>
  );
};

export default Layout;
