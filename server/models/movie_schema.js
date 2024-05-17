import mongoose from "mongoose";


const movie_schema = new mongoose.Schema({



    name: { type: String, required: true },
    time: { type: [String], required: true },
    rating: { type: Number, required: true },

},{timestamps:true})


const movieModel =mongoose.model("Movie",movie_schema)

export default movieModel