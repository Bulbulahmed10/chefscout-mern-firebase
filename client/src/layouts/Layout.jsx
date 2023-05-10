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
    fetch("http://localhost:4000/recipes")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  useEffect(() => {
    fetch("http://localhost:4000/chefs")
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
