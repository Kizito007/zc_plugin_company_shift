require('dotenv').config()
const express = require('express');
const path = require('path');
const cors = require('cors');
const employees = require("./data/employees")

const app = express();

const PORT = process.env.PORT || 5356;


app.use(express.static(path.join(__dirname, "..", "client", "build")));

//app.use(express.static(path.join(__dirname, 'build')));

app.get('/api', (req,res)=> {
  return res.json({
    message: 'Employee Shift API Success!!!'
  })
})

app.get('/api/employees', (req,res)=> {
  return res.json(employees)
})



//render react app index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "client", "build", "index.html"));
});



app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));

