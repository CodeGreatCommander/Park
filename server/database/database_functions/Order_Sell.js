const {SellerSchema}=require("../Schema/UserSchema");
const Order_Sell=async (orgemail,password)=>{
    return await SellerSchema.findOne({orgemail:orgemail}).then((person)=>{
        //returning null if password wrong
        if(person.password!=password)return null;
        var data=[];
        for (i in person.order){
            if(i.active)data.concat(i);
        }
        return data; 
    })
};
module.exports={Order_Sell};