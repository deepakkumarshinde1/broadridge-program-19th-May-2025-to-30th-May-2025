import React from "react";
import HomeBlog from "./HomeBlog";

function HomePage() {
  let style = {
    width: "18rem",
  };
  return (
    <>
      <section className="row mt-4">
        <HomeBlog />
        <HomeBlog />
        <HomeBlog />
        <HomeBlog />
        <HomeBlog />
      </section>
    </>
  );
}

export default HomePage;
