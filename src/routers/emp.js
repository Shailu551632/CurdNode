const express = require('express');
const router = require('express').Router();
const Employee = require('../models/empSchama');



// Creating Employees

router.post('/employee', async(req, res) => {
    try {
        
        const Employees = new Employee(req.body);
        const createEmployee = await Employees.save();
        res.send(createEmployee);

    } catch (e) {
        res.send(e);
    }
});

// Getting Employee Details 

router.get('/employee', async(req, res) => {
   try {
       const EmployeeData = await Employee.find();
       res.send(EmployeeData);
   } catch (e) {
       res.send(e);
   }
});

// Updating Employee Details
router.patch('/employee/:id', async(req, res) => {

    try {
        const EmpID = req.params.id;
        const UpdateEmployee = await Employee.findByIdAndUpdate(EmpID, req.body, {
            new : true
        });

        res.send(UpdateEmployee);

    } catch (error) {
        res.send(error);
    }

});

// Deleting Employee Details

router.delete('/employee/:id', async(req, res) => {
    try {
        const EmpID = req.params.id;
        const DelateEmployee  = await Employee.findByIdAndDelete(EmpID);
        res.send(DelateEmployee);
    } catch (error) {
        res.send(error);
    }
});


module.exports = router;