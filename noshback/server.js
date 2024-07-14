const express=require('express'); 
// const { default: mongoose } = require('mongoose');       
const app=express();   
const port =process.env.PORT || 5000; 
const cors = require('cors');

app.use(cors({
  origin: 'http://localhost:3000', // or the port your frontend is running on
  credentials: true
}));
const URL='mongodb+srv://ansh968517:cWnJ7jn9uoNmByev@cluster0.tp6czam.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
const mongoose=require('mongoose'); 
const bodyParser = require('body-parser');   
app.use(bodyParser.json()); 
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
const dotenv=require('dotenv'); 
dotenv.config();
mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log('Database connected successfully');
    })
    .catch(err => {
      console.error('Database connection error:', err);
});
app.use('/api',require('./routes/dishroutes'));  
app.get('/',(req,res)=>{
    res.send("hello friends ");
}) 
app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
}) 

