export default function MainContent() {
  const ingredients = ["Chicken", "Oregano", "Tomatoes"];

  const ingredientsList = ingredients.map((ingredient) => {
    return <li key={ingredient}>{ingredient}</li>;
  });

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newIngredient = formData.get("ingredient");
    console.log(newIngredient);
    ingredients.push(newIngredient)
    console.log(ingredients)
  }
  return (
    <main>
      <form className="add-ingredient-form" onSubmit={handleSubmit}>
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
