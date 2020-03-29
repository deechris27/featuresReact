const express = require('express');
const fileUpload = require('express-fileupload');
const path = require('path');
const cors = require('cors');

const app = express();

app.use(fileUpload());

const whiteList = ['http://localhost:4000'];

let corsOptions = {
    origin: function(origin, callback){
        if(whiteList.indexOf(origin) !== -1){
            callback(null, true);
        } else{
            callback(new Error('Not Allowed by Cors'));
        }
    }
};

app.use(cors(corsOptions))

app.use((req,res, next)=>{
   res.header('Access-Control-Allow-Origin', "*");
   next();
})

app.get('/yoyo', (req, res)=>{
    res.json({"data": "yoyo success"});
});



app.post('/upload', (req,res)=>{

    if(req.files === null){
        res.status(400).json({msg: 'No file uploaded'});
    }

    const file = req.files.file;

   file.mv(`${path.join(__dirname, `../public/uploads/${file.name}`)}`, err=>{
       if(err){
           console.log(err);
           res.status(500).send(err)
       }

       res.status(200).json({filename: file.name, location: `uploads/${file.name}`})
   })
})


app.listen(5000, () => console.log('Server started.....'));