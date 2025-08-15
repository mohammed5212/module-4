const mongoose= require ('mongoose')
const userSchema = new mongoose.Schema({
    username:{type:String,required:true,unique:true},
    password_hash:{type:String,enum:['admin','user'],default:'user'},
    email :{type:String,required:true,unique:true}

},{timestamps:true})
module.exports=mongoose.Schema('User',userSchema)