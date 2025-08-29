require('dotenv').config()

const express= require('express')
const cors= require ('cors')
const authRoutes = require ('./routes/auth')
const customerRoutes= require ('./routes/customers')
const caseRoutes= require('./routes/cases')

const app =express()

app.use(cors())
app.use (express.json())


// //routes


app.use('/api/auth',authRoutes)


app.use('/api/customers',customerRoutes)


app.use('/api/cases',caseRoutes)


// check

app.get('/',(req,res)=>{
    res.json({message:"CRM backend running"})

})
const asyncHandler = fn => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};
// error handling
app.use((err,req,res,next)=>{
    console.error(err.stack)
    res.status(500).json({"server error":err.message})
})
module.exports=app
