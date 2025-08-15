const app =require('./app')
const connectDB = require('./config/db')

const PORT =process.env.PORT || 5000
//  start server 
connectDB(process.env.MONGO_URI || 'mongodb://localhost:27017/crm_db')
  .then(()=>{
    app.listen(PORT,()=>console.log(`server runnin on port ${PORT}`))
  })
  .catch((err)=>{
    console.error("failed to start server:",err)
  })