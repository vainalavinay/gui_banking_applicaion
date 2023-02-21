import mongoose from "mongoose"
const userSchema = new mongoose.Schema({
    name:{type:String, required:true},
    pin:{type:String, required:true},
    accountnumber:{type:Number, required:true},
    balance:{type:Number,
    default:0}
})
const user = mongoose.model('user',userSchema)
export default user
