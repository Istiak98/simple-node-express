const express =require("express");
const cors=require('cors');

const app=express();
app.use(cors())

app.use(express.json())





const port= 5000;

app.get('/',(req,res)=>{
    res.send('Hello Istiak Ahmed Rajon this is second node')
});

const users=[
    {"id": 0,"name": "Shabana","email": "Sincere@april.biz"},
    {"id": 1,"name": "Shabnoor","email": "Sincere@april.biz"},
    {"id": 2,"name": "Sushmita","email": "Sincere@april.biz"},
    {"id": 3,"name": "Srabonty","email": "Sincere@april.biz"},
    {"id": 4,"name": "Sakib","email": "Sincere@april.biz"},
    {"id": 5,"name": "Soniya","email": "Sincere@april.biz"},
]

app.get('/users',(req,res)=>{
const search=   req.query.search;


//use query parameter

if(search){
const searchResult = users.filter(user=>user.name.toLocaleLowerCase().includes(search));
res.send(searchResult)
}
else{
    res.send(users)

}
})

//app.METHOD
app.post('/users',(req,res)=>{


    const newUser=req.body;
    newUser.id=users.length;

    users.push(newUser)
    console.log('hitting the post',req.body)
    // res.send(JSON.stringify(newUser))
    res.json(newUser)
})



app.get('/users',(req,res)=>{
    res.send(users)
})

//dynamic api

app.get('/users/:id',(req,res)=>{
    const id=req.params.id;
    const user=users[id]
   res.send(user)
})


app.get('/fruits',(req,res)=>{
    res.send(['mango','orange'])
})

app.get('/fruits/mangoes/fazli',(req,res)=>{
    res.send('ONk josssssss')
})



app.listen(port,()=>{
    console.log('Listing to port',port);
});



