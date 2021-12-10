const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

//configuratuion
const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded());

//connection to database
//search "mongoose.connect() on internet then you will get this url = 'mongodb://localhost:27017/myLoginRegisterDB' "

mongoose.connect("mongodb://localhost:27017/AuthenticationDB2", 
{
    useNewUrlparser: true,
    useUnifiedTopology: true
}, () => console.log("DB connected...."));

// Create schema
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    date: Date,
    address: String,
    select: String
});

// Create Model
const User = new mongoose.model("User", userSchema);

// Crete Routes
//Registration Route
app.post("/register", (req, res) => {
    // const name = req.body.name;
    // const email = req.body.email;
    // const password = req.body.password;
    // const address = req.body.address;

    const {name, email, password, date, address, select} = req.body;

    //if email is already present in database = user already registered
    User.findOne({email: email}, (err, user) => {
        if(user){
            res.send({message: "user already registered"})
        }else{
            const user = new User({
                // name:name,
                // email:email,
                // password: password,
                // date:date,
                // address:address

                //SHORTHAND PROPERTY
                name, 
                email,
                password,
                date,
                address,
                select
            })
            user.save((err) => {
                if(err){
                    res.send(err);
                }else{
                    res.send({message: "successfully registered"})
                }
            })
        }
    })
})


//Login Route
app.post("/login", (req, res) => {
    const {email, password} = req.body;
    User.findOne({email:email}, (err, user) => {
        if(user){
            if(password === user.password)
            {
                res.send({message: "Login successfully", user: user})
            }else{
                res.send({message: "wrong password"})
            }
        }else{
            res.send({message: "Invalid username/password"})
        }
    })
})


//Get user names list
// app.get("/names/:id", (req, res) => {
//     User.find({}, (err, result) => {
//         if(err){
//             console.log(err);
//         }else{
//             res.send(result);
//         }
//     })
// })


app.listen(3001, () => console.log("successfully connect to port 3001.."));

//Route
// app.get('/', (req, res) => {
//     res.send("Tanuj you are successfully connected to our database");
// })