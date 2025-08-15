const mongoose= require ('mongoose')
const userSchema = new mongoose.Schema({
    username:{type:String,require:true,unique:true},
    password_hash:{type:String,enum:['admin','user'],default:'User'},
    email :{type:String,require:true,unique:true}

},{timestamps:true})
module.exports=mongoose.Schema('User',userSchema)