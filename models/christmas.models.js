import mongoose  from "mongoose";

const christmasScheme = new mongoose.Schema( {
    name: String,
    type: String,
    vegan: Boolean
} )

const ChristmasProduct = mongoose.model('ChristmasProduct', christmasScheme)

export default ChristmasProduct