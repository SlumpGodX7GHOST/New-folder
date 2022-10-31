const express = require('express');
const app = express();
const path = require('path');

// console. log(path.join(__dirname,"../public"));
const staticPath = path.join(__dirname,"../public")
app.use(express.static(staticPath))


app.get('/', function(req, res) {
  // res.send("helloo server");
});

app.listen(4000,()=>{

  console.log('Server started at port 4000')
});