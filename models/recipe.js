const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

let recipeSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    ingredients: {
        type: String
    },
    instructions: {
        type: String
    }

});

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;