const express = require('express');
const Kyc =  require('../models/kycModel');
const router = express.Router();


// kyc form route 
router.get('/kycform', (req, res) => {
    res.render('kycc.pug')
})

//creating a parking
router.post('/regform', async (req, res) => {
    try{
        const customer = new Kyc(req.body);
        await customer.save();
        console.log(req.body)
        res.redirect('/api/kycform');
    }
    catch(error){
        res.status(404).render('kycc');
        console.log(error)}
});




module.exports = router 