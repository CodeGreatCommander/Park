import { UserSchema } from "../Schema/UserSchema";
const Order_Cus=async (email,password)=>{
    return await UserSchema.findOne({email:email}).then((person)=>{
        //returning null if password wrong
        if(person.password!=password)return null;
        var data=[];
        for (i in person.pastreservations){
            if(i.active)data.concat(i);
        }
        return data; 
    })
};
module.exports={Order_Cus};