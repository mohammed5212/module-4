const Customer=require('../models/customer')

const listCustomers=async(req,res)=>{
    const customers =await Customer.find().sort({createAt:-1})
    res.json(customers)
}
const getCustomer=async(req,res)=>{
    const customer= await Customer.findById(req.params.id)
    if(!customer)return res.status(404).json({message:"customer not found"})
        res.json (customer)
}
const createCustomer=async(req,res)=>{
    const data=req.body
    const customer= await Customer.creat(data)
    res.status(201).json(customer)
}
const updateCustomer=async(req,res)=>{
    const customer= await Customer.findByIdAndUpdate(req.params.id,req.body({new:true}))
      if(!customer)return res.status(404).json({message:"customer not found"})
        res.json (customer)
}
const deleteCustomer=async (req,res)=>{
    const customer=await Customer.findByIdAndDelete(req.params.id)
    if(!customer)return res.status(404).json({message:"customer not found"})
        res.json (customer)
}
module.exports={listCustomers,getCustomer,updateCustomer,createCustomer,deleteCustomer}