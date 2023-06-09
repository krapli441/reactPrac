import React from "react";
import Recipe from "./Recipe.js";

function Menu({ recipes }) {
  return (
    <article>
      <header>
        <h1>맛있는 조리법.</h1>
      </header>
      <div className="recipes">
        {recipes.map((recipe, i) => {
          return <Recipe key={i} {...recipe} />;
        })}
      </div>
    </article>
  );
}

export default Menu;
