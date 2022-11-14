const mongoose =  require("mongoose");

const actorSchema =  mongoose.Schema({
    firstName: String, 
    lastName: String,
    size: {h: Number, w: Number, uom: String},
    age: Number,
});

module.exports =  mongoose.model("Actor", actorSchema);
