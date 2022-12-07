var express = require('express')
var cors = require('cors') // New
var app = express()

app.use(cors()) // New
app.use(express.json());

app.post('/validate', function(req,res){
 return res.json(req.body);
})

app.listen(9000);