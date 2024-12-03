const express = require('express')
const app = express();
const bcrypt = require('bcrypt')

app.use(express.json());


const  users =[];

app.get('/users', (req, res) => {
    res.json(users)



}) 

app.post ('/users', async (req, res) =>{


try{
const  hashedPassword = await bcrypt.hash(req.body.password, 10);
const user = {name: req.body.name, password: hashedPassword};
    users.push(user);
    res.status(201).send()
}catch{
    res.status(500).send();
};


})



app.listen(3000)