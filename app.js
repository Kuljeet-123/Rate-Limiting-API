const express = require('express');
const app = express();
const universities = require('./universities');
const rateLimt = require('express-rate-limit');

const limiter = rateLimt({
    max: 5,
    windowMs: 10000,
    standardHeaders: true,
    legacyHeaders: true,
})

app.get('/universities', limiter, (req, res)=>{
    res.send({
        status:'Success',
        universities: universities
    })
})

app.listen(9000, () => console.log('Listen on port 9000'));