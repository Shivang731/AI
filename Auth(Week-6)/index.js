const express = require('express');

const app = express();
app.use(express.json());

const users = [];

function generateToken() {
    return Math.random();
}

app.post("/signup", function(req, res) {
    const username = req.body.username;
    const password = req.body.password;

    users.push({
        username: username,
        password: password
    });

    res.json({
        message: "You are signed in"
    });
    console.log(users);
});

app.post("/signin", function(req, res) {
    const username = req.body.username;
    const password = req.body.password;

    const foundUser = users.find(function(u) {
        return u.username == username && u.password == password;
    });

    if (foundUser) {
        const token = generateToken();
        foundUser.token = token;
        res.json({
            token : token
        });
    } else {
        res.json({
            message: "Invalid username or password"
        });
    }
    console.log(users);
});

app.get("/me",function(req,res){
    const token = req.headers.token;
    let foundUser = null;  //not a const cause foundUser is bound to change so a let

    for(let i=0;i<users.length;i++){
        if(users[i].token == token){
            foundUser = users[i]
        }
    }
    if(foundUser){
        res.json({
            username : foundUser.username,
            password: foundUser.password
        })
    }else {
        res.json ({
            message : "token invalid"
        })
    }
})

app.listen(3000, () => {
    console.log("Server is running on localhost");
});