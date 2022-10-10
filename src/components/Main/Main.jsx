import React, { createContext } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
export const TeamContext = createContext([]);
const Main = () => {
  const team = useLoaderData();
  return (
    <div>
      <TeamContext.Provider value={team}>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
      </TeamContext.Provider>
    </div>
  );
};

export default Main;
