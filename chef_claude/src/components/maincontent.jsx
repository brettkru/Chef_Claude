import React from "react";

export default function MainContent() {
  const [myingredients, setMyIngredients] = React.useState([]);

  const ingredientsList = myingredients.map((ingredient) => {
    return <li key={ingredient}>{ingredient}</li>;
  });

  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient");
    setMyIngredients((prevIngredientList) => [
      ...prevIngredientList,
      newIngredient,
    ]);
  }
  return (
    <main>
      <form className="add-ingredient-form" action={addIngredient}>
        <input
          aria-label="Add Ingredients"
          type="text"
          placeholder="e.g. Salt"
          name="ingredient"
        />
        <button>Add Ingredient</button>
      </form>
      {myingredients.length > 0 && (
        <section>
          <h2>Ingredients on hand:</h2>
          <ul className="ingredients-list" aria-live="polite">
            {ingredientsList}
          </ul>
          <div className="get-recipe-container">
            <div>
              <h3>Ready for a recipe?</h3>
              <p>Generate a recipe from your list of ingredients.</p>
            </div>
            <button>Get a recipe</button>
          </div>
        </section>
      )}
    </main>
  );
}
