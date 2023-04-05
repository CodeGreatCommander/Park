const {UserSchema,SellerSchema}=require('../Schema/UserSchema');
//require org_id user_id,time_start,time_end,payment_status
const Order_Add=async(params)=>{
    var data=[];
    await SellerSchema.findById(params.org_id).then((org)=>{data=org.order;});
    data.concat({org_id:params.org_id,user_id:user_id,time_start:time_start,time_end:time_end,payment_status:payment_status})
    await SellerSchema.findByIdAndUpdate(params.org_id,data)
    await UserSchema.findById(params.user_id).then((person)=>{data=person.order;})
    data.concat({org_id:params.org_id,user_id:user_id,time_start:time_start,time_end:time_end,payment_status:payment_status})
};