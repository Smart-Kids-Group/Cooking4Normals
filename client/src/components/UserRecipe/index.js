import React, {useState} from "react";

const UserRecipe = () => {
    const [name, setName] = useState("")
  return (
    <div className="App">
      <form>
        <label for="ingredients">Ingredients</label>
        <input type="text" id ="ingredients"
         value={name}
         onChange={(e) => setName (e.target.value)}
          />
          <br />
        <label for="instructions">Cook Instructions</label>
        <input type="text" id="instructions"/>
        <br/>
        <input type="submit"
        value="Submit"
        />
      </form>
    </div>
  )
};

export default UserRecipe;