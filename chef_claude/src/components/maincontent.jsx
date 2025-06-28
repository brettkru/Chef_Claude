import React from "react";
import Recipe from "./clauderecipe";
import Ingredients from "./ingredients";
import { getRecipeFromChefClaude } from "../ai"

export default function MainContent() {
  // States
  const [myingredients, setMyIngredients] = React.useState([]);

  const [recipe, setRecipe] = React.useState(false);

  // Functions
  async function getRecipe() {
   const recipeMarkdown = await getRecipeFromChefClaude(myingredients)
   setRecipe(recipeMarkdown)
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
          getRecipe={getRecipe}
        />
      )}
      {recipe && <Recipe recipe={recipe} />}
    </main>
  );
}
