const express=require('express')
const app=express()
const PORT=process.env.PORT||4321
app.get('/',(req,res)=>{
    res.send('Hello! This is a sample App')
})

app.get('/hi',(req,res)=>{
    res.send(`Hi! ${req.query.name}`)
})

app.get('/bye',(req,res)=>{
    res.send(`Good Bye! ${req.query.name}`)
})
app.listen(PORT,()=>{
    console.log('http://localhost:4321'+PORT) 
})