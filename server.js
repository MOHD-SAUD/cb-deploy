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
<<<<<<< HEAD
app.get('/app',(req,res)=>{
    res.send('You are on main app')
})
app.listen(PORT,()=>{
    console.log('http://localhost:4321'+PORT) 
})
=======
app.listen(PORT,()=>{
    console.log('http://localhost:4321'+PORT) 
})
>>>>>>> be14413d7853bdfc233a9ea7511ec61da61802f5
