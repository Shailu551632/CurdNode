const express = require('express');
require('./db/conn');
const Employee = require('./models/empSchama');
const EmpRouter = require('./routers/emp');
const Admin = require('./models/adminSch');
const AdminRouter = require('./routers/AdminRoutes');


const app = express()

app.use(express.json())
app.use(EmpRouter);
app.use(AdminRouter);



const port = process.env.PORT || 3000;




app.listen(port, () => {
    console.log(`Server started on ${port}`);
});



Employee.aggregate([
    {
      $lookup: {
        from: "admin",
        localField: "Emp_ID",
        foreignField: "Admin_ID",
        as: "department",
      },
    },
  

    {
      $unwind: "$department",
    },
  ])
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });