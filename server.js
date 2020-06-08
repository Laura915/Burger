const express= require('express');
const PORT=process.env.Port || 8080;
const app = express()
 
app.get('*', function (req, res) {
  res.send('Hello World')
})
 
app.listen(PORT, () =>{
    console.log("Server listening on: http://localhost:"+ PORT);
});