const express = require("express");
const mongoose = require("mongoose");

const route = require("./Route/index");

const PORT = 5500;
const HOSTNAME = "localhost";


const app = express();
app.use(express.json()); 

app.use('/', route);

//DB
const MongoAtlas = "mongodb+srv://admin:iUCHBgxWpiSgC5wp@zomato-1-clone.rpiglpq.mongodb.net/zomato-5?retryWrites=true&w=majority&appName=Zomato-1-clone";

mongoose.connect(MongoAtlas, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(res => {
        app.listen(PORT, HOSTNAME,  () => {
            console.log(`Server is running at https://${HOSTNAME}: ${PORT}`);
        });
    })
    .catch(err => console.log(err));
       