const Passwordcheck=async(email,password)=>{
    const {UserSchema,SellerSchema}= await require("../Schema/UserSchema");
    return UserSchema.findOne({email:email}).then((person)=>{
        if(person==null)return [false,false];
        else return [true,password==person.password];
    }).catch((err)=>{console.log(err);return[false,true];});
}
module.exports={Passwordcheck};