import React from "react"

export default function ingredients(props){
 
    const ingredientsList = props.myingredients.map((ingredient) => {
    return <li key={ingredient}>{ingredient}</li>;
  });

    return (
        <section>
          <h2>Ingredients on hand:</h2>
          <ul className="ingredients-list" aria-live="polite">
            {ingredientsList}
          </ul>
          {ingredientsList.length > 3 && (
            <div className="get-recipe-container">
              <div>
                <h3>Ready for a recipe?</h3>
                <p>Generate a recipe from your list of ingredients.</p>
              </div>
              <button
              onClick = {props.getRecipe}>Get a recipe</button>
            </div>
          )}
        </section>
    )
}