const express=require('express');
const connectDB=require('./config/db');

const app=express();

//connect DataBase
connectDB();

app.get('/',(req,res)=>{
    res.send("API Running....");
});

app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

app.listen('3000',()=>{
    console.log('server started on port 3000');
});
