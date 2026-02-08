router.post('/login', (req,res)=>{
  const {username,password} = req.body;
  if(username=="john" && password=="1234"){
    return res.send({token:"123456"});
  }
  res.status(400).send("Invalid username/password");
});
