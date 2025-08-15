const mongoose = require('mongoose')
const caseScheme=new mongoose. Schema({
    title:{type:String,require:true},
    description:{type:String},
    customer:{type:mongoose.Schema.Types.ObjectId,ref:'Customer',require:true},
    assigned_to:{type:mongoose.Schema.Types.ObjectId,ref:'User'},
    priority:{type:String,enum:['low','medium','high'],default:'medium'},
    status:{type:String,enum:['open','in_progess','closed'],default:'open'}
  
}  ,{timestamps:true})
module.exports=mongoose.model('Case',caseScheme)