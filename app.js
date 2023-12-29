const Express = require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');

const User= require('./userModel');

const app=Express();

mongoose.connect('mongodb://127.0.0.1:27017/DGV-notes').then(()=>{
    console.log("Connected to database");
})

bodyParser.urlencoded({extended:false})
app.use(bodyParser.json());

app.listen(3000,()=>{
    console.log("Server is Running on port 3000");
})

app.get('/',(req,res)=>{
    res.send ("Hello World");
})

app.route('/api/notes')
    .get((req,res)=>{
        User.find().then((users)=>{
            res.send(users);
        }).catch((err)=>{
            res.send(err);
        })
    })
    .post((req,res)=>{
        if(req.body){
           return  User.create(req.body).then((user)=>{
                res.status(200).json({
                    status:'success',
                    data:req.body,
                })
            }).catch((err)=>{
                res.send(err);
            })
        }

        res.status(500).json({
            status:'error',
            error: 'req body cannot be empty',
        });
        
    })
    .put((req,res)=>{
        res.send("Put a Note");
    })
    .patch((req,res)=>{
        res.send("Patch a Note");
    })
    .delete((req,res)=>{
        res.send("Delete a Note");
    })