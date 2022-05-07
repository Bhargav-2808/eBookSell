import express from 'express';
import cors from 'cors';
import mangoos from 'mongoose';
import bodyParser from 'body-parser';
import route from './Server/route.js';
import path from 'path';


const app = express();
const PORT=6500;
const URL = 'mongodb+srv://ebook123:ebook123@ebookcell.snhrl.mongodb.net/ebookcell?retryWrites=true&w=majority'
const __dirname = path.resolve(path.dirname('')); 

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json({extended:true}));
app.use("/",route)
app.use(express.static(path.join("C:/projects/E-book-sell/ebooksell", '/public/images/uploads/')));
// app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.bodyParser({keepExtensions:true,uploadDir:path.join(__dirname,'/images/')}));

app.listen(PORT, ()=>{
    console.log("App is running");
})

mangoos.connect( URL, 
    {
        useNewUrlParser:true,
        useUnifiedTopology:true
        
    }).then( ()=>{
        //  console.log(__dirname);
        console.log("Connected to datatbase");
    }).catch((error)=>{
        console.log(error+' This error ocuured');
    })






// Database user : username ebook123 
//             : password ebook123


