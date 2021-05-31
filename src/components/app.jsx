import "../styles/index.scss";
import React from "react";
import Content from "./content";

const App = () => {
  return (
    <>
      <section className="hero"></section>
      <main>
        <section>
          <h1>Oh Hi, React </h1>
        </section>
      </main>
      <Content />
    </>
  );
};

export default App;