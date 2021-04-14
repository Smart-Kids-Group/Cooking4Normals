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
        type: Array
    },
    instructions: {
        type: Array
    },
    href: {
        type: String
    },
    image: {
        type: String
    }

});

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;