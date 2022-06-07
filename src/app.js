const express = require('express');
require('./db/conn');
const Employee = require('./models/empSchama');
const EmpRouter = require('./routers/emp');
const app = express()

app.use(express.json())
app.use(EmpRouter);


const port = process.env.PORT || 3000;




app.listen(port, () => {
    console.log(`Server started on ${port}`);
});