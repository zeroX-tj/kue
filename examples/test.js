
var kue = require('../')
    , express = require('express');

// create our job queue

var jobs = kue.createQueue()
    , Job = kue.Job;

var app = express();
app.use(kue.app);
app.listen(3000);
console.log('UI started on port 3000');