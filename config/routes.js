var db       = require('./db'); 				

module.exports= (app)=>{

    // POST LOGIN
    app.post('/login',(req,res)=>{
        let checkUsername = db.find(element=> element.username == req.body.username); 
        if(checkUsername){
        let checkPassword = db.find(element=> element.password == req.body.password); 
            if(checkPassword){
                res.send("success")
            }else{
                res.send("rong_password")
            }
        }else{
            res.send("rong_username");
        }
    })
    
    // POST SiNGUP
    app.post('/singup',(req,res)=>{
        db.push(req.body)
        res.send("user_created")
    })
}