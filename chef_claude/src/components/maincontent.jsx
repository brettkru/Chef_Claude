export default function MainContent(){
    return (
        <main>
            <form className="add-ingredient-form" action="">
                <input 
                    aria-label="Add Ingredients"
                    type="text"
                    placeholder="e.g. Salt" 
                />
                <button>
                    Add Ingredient
                </button>
            </form>
        </main>
    )
}