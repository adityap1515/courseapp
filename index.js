const express = require('express');
const app = express();
app.use(express.json());
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken')
const JWT_SECRET = "heheh";

const { userRouter } = require('./user');
const { courseRouter } = require('./course');

const { adminRouter } = require('./admin');


    app.use( " /api/vl/user", userRouter);
    app.use("/api/v1/course", courseRouter);
    
    
    

    
    
    
    
    
    app.listen(3000) ;