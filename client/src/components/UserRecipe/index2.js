import React, {useState} from "react";
import "./style.css";

const UserRecipe = () => {
    const [name, setName] = useState("")
  return (
    <div className="App" class="Add">
      <div>
        <h2>Add your own recipe.</h2>
      <form>
        <label name="RecipeName">Recipe Name</label>
        <input type="text" id ="RecipeName"
         value={name}
         onChange={(e) => setName (e.target.value)}
          />
          <br/>
          <label name="ingredients">Ingredients</label>
          <textarea type="text" id ="instructions"/>
          <br/>
        <label name="instructions">Cook Instructions</label>
        <textarea type="text" id="instructions"/>
        <br/>
        <input type="submit" class="buut"
        value="Submit"
        
        />
      </form>
    </div>
  </div>
  )
};

export default UserRecipe;