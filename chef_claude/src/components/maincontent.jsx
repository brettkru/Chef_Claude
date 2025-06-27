import React from "react";
import Recipe from "./clauderecipe";
import Ingredients from "./ingredients";

export default function MainContent() {
  // States
  const [myingredients, setMyIngredients] = React.useState([]);

  const [recipeShown, setRecipeShown] = React.useState(false);

  const ingredientsList = myingredients.map((ingredient) => {
    return <li key={ingredient}>{ingredient}</li>;
  });

  // Test
  console.log(import.meta.env.VITE_ANTHROPIC_API_KEY);

  // Functions
  function toggleRecipeShown() {
    setRecipeShown((prev) => !prev);
  }

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
        <Ingredients
          myingredients={myingredients}
          toggleRecipeShown={toggleRecipeShown}
        />
      )}
      {recipeShown && <Recipe />}
    </main>
  );
}
