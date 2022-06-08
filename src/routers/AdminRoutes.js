const express = require('express');
const router = require('express').Router();
const EmpAdmin = require('../models/adminSch');



// Creating Admin

router.post('/admin', async(req, res) => {
    try {
        
        const Admin = new EmpAdmin(req.body);
        const createAdmin = await Admin.save();
        res.send(createAdmin);

    } catch (e) {
        res.send(e);
    }
});

// Getting admin Details 

router.get('/admin', async(req, res) => {
   try {
       const Admindata = await EmpAdmin.find();
       res.send(Admindata);
   } catch (e) {
       res.send(e);
   }
});

// Updating Employee Details
router.patch('/admin/:id', async(req, res) => {

    try {
        const AdminID = req.params.id;
        const AdminUpdate = await EmpAdmin.findByIdAndUpdate(AdminID, req.body, {
            new : true
        });

        res.send(AdminUpdate);

    } catch (error) {
        res.send(error);
    }

});

// Deleting Employee Details

router.delete('/admin/:id', async(req, res) => {
    try {
        const AdminID = req.params.id;
        const DeleteAdmin  = await EmpAdmin.findByIdAndDelete(AdminID);
        res.send(DeleteAdmin);
    } catch (error) {
        res.send(error);
    }
});


module.exports = router;