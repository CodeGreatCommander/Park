const {UserSchema,SellerSchema}=require("../Schema/UserSchema");
const Passwordcheck=async (email,password)=>{
    return await UserSchema.findOne({email:email}).then((person)=>{
        if(person==null)return [false,false];
        else return [true,password==person.password];
    }).catch((err)=>{console.log(err);return[false,true];});
}
module.exports={Passwordcheck};