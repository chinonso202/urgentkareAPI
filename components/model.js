const mongoose = require ("mongoose")
const schemaStructure = mongoose.Schema({
    item:{
        type: "string",
        require:true,
        unique:[true, "this item already exist"]
    },
    price:{
        type:"string",
        required:true,
        unique:[true, "price must be accurate"]
    }
})
module.exports = mongoose.model("stocklist",schemaStructure)
