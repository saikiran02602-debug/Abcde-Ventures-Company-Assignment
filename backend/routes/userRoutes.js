const router = require('express').Router();
const User = require('../models/User');

router.get('/', async(req,res)=>{
  res.send(await User.find());
});

module.exports = router;
