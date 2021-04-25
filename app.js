const express = require("express");
const mongoose = require("mongoose");
const port = process.env.port || 5064;
const cors = require("cors")
const app = express();
const view = require("./components/view")
const ONLINE_DB ="mongodb+srv://chinonso:chinonso@cluster0.1tynp.mongodb.net/urgentkare?retryWrites=true&w=majority" 

//const con = mongoose.connection
//con.on("open", function(){
  //  console.log("server is listening...")
//})
mongoose
.connect(ONLINE_DB,{
    useCreateIndex: true,
    useFindAndModify:false,
    useNewUrlParser:true,
    useUnifiedTopology: true
})
.then(()=>{
    console.log(`Database is active`)
})

app.use(cors());
app.use(express.json());
app.use("/", require("./components/controller"))


app.listen(port,()=>{
    console.log(`port is listening`);
})

