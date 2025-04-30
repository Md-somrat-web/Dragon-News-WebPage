import React from "react";
import { Outlet } from "react-router";
import Header from "../componentes/Header";
import LetestNews from "../componentes/LetestNews";
import Navbar from "../componentes/Navbar";
import LeftAside from "../componentes/HomeLayout/LeftAside";

const HomeLayouts = () => {
  return (
    <div>
      <header>
        <Header></Header>
        <section className="w-11/12 mx-auto my-3">
          <LetestNews></LetestNews>
        </section>
        <nav className="w-11/12 mx-auto my-3">
          <Navbar></Navbar>
        </nav>
      </header>
      <main>
        <aside>
          <LeftAside></LeftAside>
        </aside>
        <section className="main">
          <Outlet></Outlet>
        </section>
        <section className="right_nav"></section>
      </main>
    </div>
  );
};

export default HomeLayouts;
