const mongooes= require('mongoose')



const userSchema= new mongooes.Schema({
    name:String,
    email:String,
    password:String,
    phone:Number,
    job:String,
    age:Number,
    image:String
})



const User= new mongooes.model('user',userSchema)

module.exports=User;