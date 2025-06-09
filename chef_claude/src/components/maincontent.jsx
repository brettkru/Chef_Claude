import React from "react"

export default function MainContent() {

  const [myingredients, setMyIngredients] = React.useState([])


  const ingredientsList = myingredients.map((ingredient) => {
    return <li key={ingredient}>{ingredient}</li>;
  });

  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient");
    setMyIngredients(prevIngredientList => [...prevIngredientList, newIngredient])
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
      <ul>{ingredientsList}</ul>
    </main>
  );
}
