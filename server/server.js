import express from 'express';

import dotenv from 'dotenv';

import Connection from './database/db.js';

import defaultData from './defaultData.js';

import cors from 'cors';

import Router from './routes/route.js';

import cookieParser from 'cookie-parser';

import bodyParser from 'body-parser';

import { v4 as uuid} from 'uuid';

const app = express();

app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true}));
app.use('/',Router);


dotenv.config({path:'./config.env'});

const PORT = process.env.PORT || 8000;
const USERANAME= process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const URL = process.env.MONGODB_URL || `mongodb+srv://${USERANAME}:${PASSWORD}@cluster0.jjbsv2a.mongodb.net/?retryWrites=true&w=majority`

Connection(URL);

app.listen(PORT,()=>{
    console.log(`Server is listening at Port ${PORT}`);
});

// app.post('/setcookie',(req,res)=>{
//     res.cookie(`Cookie token name`,`encrypted cookie string Value`);
//     res.send('Cookie have been saved successfully');
// })

defaultData();
