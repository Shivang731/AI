Browser -> signup -> http request->saves in db

Sing in -> verify -> ***create token*** -> saved in browser

in the next steps 

we send tokens to -> facebook -> facebook replies acc to our ***token***

token -> can be used by anyone using postman

****Token is nothing just used for verify stuff****

**********
In each request token is send 

**The express won't parse until you use the express.json file**




| Signup | Save  |
| ------ | ----- |
| Signin | Token |
```
{

"username" : "shivang",

"password" :"124123"

}
```
make sure json is sensitive 

```
shivang@fedora:~/Auth$ node index.js
Server is running on localhost
[ { username: 'shivang', password: '124123' } ]
[
  { username: 'shivang', password: '124123' },
  { username: 'shib', password: '124123' }
]
[
  { username: 'shivang', password: '124123' },
  { username: 'shib', password: '124123', token: 0.165709199703451 }
]

```
**The user has two tokens

One with the browser what we can see 
One defo the server has (server copy) **

*We can use the token in future to if we want or if don't want we can generate a new token*

****The core rule: it's about intent, not what "feels natural."**

- **GET** = "give me information, don't change anything on the server"
- **POST** = "here's some data, do something with it / create or change something"
- **

##### /me
```
app.get("/me",function(req,res){

const token = req.headers.token;

let foundUser = null; //not a const cause foundUser is bound to change so a let

  

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
```