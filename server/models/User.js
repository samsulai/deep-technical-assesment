import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
   
    fullName: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
   
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    phone: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    gender: {
      type: String,
      required: true,
     
    },
    maritalStatus: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    password: {
      type: String,
      required: true,
      min: 5,
    },
   ResidenceType: {type: String},
   educationLevel: {type: String},
   employmentStatus: {type: String},
   employmentSector: {type: String},
   employmentDuration: {type: String},
   officeEmail: {
      type: String,
      max: 50,
      unique: true,
  },
 monthlyIncome: {type: String},
  loanRepayment: {type: String},
   twitter: {type: String},
    facebook: {type: String},
     instagram: {type: String},
},
  { timestamps: true }

);

const User = mongoose.model("User", UserSchema);
export default User;