const express = require('express');

const app = express();
app.use(express.json());

const users = [];

function generateToken(){
    return Math.random()
}


app.post("/signup",function(req,res){
     const username = req.body.username;
     const password = req.body.password;

    users.push ({
        username: username,
        password: password
    })

    res.json({
        message:"You are signed in"
    })
});

app.post("/signin",function(req,res){
    const username = req.body.username;
     const password = req.body.password;

     const founduser = users.find(function(u)){
        if(founduser) {
            
       const token = generateToken();
        res.json ({
            token :token
        });
        } else {
            res.json({
                "Invalid username or password"
            });
        }
            
    
     }


});

app.listen(3000, ()=> {
    console.log("Server is running on localhost")
});