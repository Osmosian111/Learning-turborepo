import express from "express";

const app = express()

app.use(express.json())

app.post("signin",(req,res)=>{res.send({msg:"signin"})});
app.post("signup",(req,res)=>{res.send({msg:"signup"})});
app.get("chat",(req,res)=>{res.send({msg:"signup"})});