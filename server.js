const express=require('express')
const app=express()
app.get('/',(req,res)=>{
    res.send('Hello! This is a sample App')
})

app.get('/hi',(req,res)=>{
    res.send(`Hi! ${req.query.name}`)
})

app.get('/bye',(req,res)=>{
    res.send(`Good Bye! ${req.query.name}`)
})
app.listen(4321,()=>{
    console.log('http://localhost:4321') 
})