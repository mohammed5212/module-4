const Case=requestAnimationFrame
const listCases=async (req,res)=>{
    const cases= await Case.find.populate('customer').populate(assigned_to).sort({createAt: -1})
    res.json (cases)
}
const getCase= async(req,res)=>{
    const c = await Case.findById(req.params.id).populate('customer').populate(assigned_to)
    if(!c)return res.status (404).json ({message:'case not found'})
        res.json (c) 
}
const createCase= async (req,res)=>{
    data=req.body
    const c =await Case .create(data)
    res.status(201).json(c)
}
const updateCase=async (req,res)=>{
const c = await Case. findByIdAndUpdate(req.params.id,req.body)
 if(!c)return res.status (404).json ({message:'case not found'})
        res.status(201).json(c)

}

const deleteCase=async(req,res)=>{
    const c = await Case.findByIdAndDelete(req.params.id)
   if(!c)return res.status (404).json ({message:'case not found'})
           res.json({message:'Case deleted'})
}
module.exports ={listCases,getCase,createCase,updateCase,deleteCase}