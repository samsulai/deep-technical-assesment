import { useState } from "react";
import { Formik } from "formik";
import * as yup from "yup";

const registerSchema = yup.object().shape({
  fullName: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  phone: yup.string().required("required"),
  gender: yup.string().required("required"),
  maritalStatus: yup.string().required("required"),
  password: yup.string().required("required"),
  
});

const initialValuesRegister = {
  fullName: "",
  email: "",
  phone: "",
  gender: "",
  maritalStatus: "",
  password: "",
}
const Form = () => {
 const register = async (values, onSubmitProps) => {
    // this allows us to send form info with image
    const savedUserResponse = await fetch('http://localhost:3001/auth/register', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    const savedUser = await savedUserResponse.json();
    onSubmitProps.resetForm();

    
  };
const handleFormSubmit = async (values, onSubmitProps) => {
    await register(values, onSubmitProps);
  };
  return (
    <Formik
      onSubmit={handleFormSubmit}
      initialValues={initialValuesRegister}
      validationSchema={registerSchema}
    >
      {({
        values,
        errors,
        touched,
        handleBlur,
        handleChange,
        handleSubmit,
        setFieldValue,
        resetForm,
      }) => (

    <section className=" min-h-screen flex items-center justify-center mx-auto">
  
  <div className=" flex max-w-[1350px] p-5 items-center justify-between  ">
    
    <div className="md:w-1/2 px-8">
      <h2 className="font-semibold text-lg text-[#373737]">SIGN UP</h2>
      <p className="text-xl mt-1 text-[#373737]">Sign up with your social Network</p>
      <div className="flex space-x-2 mt-2">
<div className="">
      <img className="" src="../assets/google.jpg"/>
    </div>
    <div className="">
      <img className="" src="../assets/facebook.png"/>
    </div>
</div>
<p className="text-[#373737] text-xl font-bold">Or the form below</p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input className="p-2  mt-8 rounded-sm border border-[#FF7900] text-[#373737]" type="text" name="fullName" placeholder="Full Name" onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.fullName}/>
        <input className="p-2  rounded-sm border border-[#FF7900]" type="email" name="email" placeholder="Email Adress" onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.email}/>
        <input className="p-2  rounded-sm border border-[#FF7900]" type="text" name="phone" placeholder="Phone Number" onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.phone}/>
        <select
            className="p-2  rounded-sm border border-[#FF7900]"
            name="gender"
            id="gender"
            placeholder="Gender"
            onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.gender}
          >
          <option value="">Gender</option>
          
            <option value="Male">
             Male
            </option>
            <option value="Female">Female</option>
          
          </select>
        <select
            className="p-2  rounded-sm border border-[#FF7900]"
            name="maritalStatus"
            id="maritalStatus"
            placeholder="MaritalStatus"
            onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.maritalStatus}
          >
          <option value="">MaritalStatus</option>
          
            <option value="Single">
             Single
            </option>
            <option value="Female">Married</option>
            <option value="Female">Divorced</option>
          
          </select>
        <input className="p-2  rounded-sm border border-[#FF7900]" type="password" name="password" placeholder="Password" onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.password}/>
        <button className="bg-[#84077F] rounded-xl text-white py-2 hover:scale-105 duration-300">SIGN UP</button>
      </form>

     
      
      

      <div className="mt-3 text-xl flex justify-between items-center text-[#373737]">
        <p className=" text-xl">Already have an account? Sign In</p>
        
      </div>
    </div>

    
    <div className="md:block hidden w-1/2">
      <div className="flex space-x-2  flex-end items-center justify-end mb-10">
<div className="">
      <img className="" src="../assets/logo.jpg"/>
    </div>
    <div className="">
      <p className="text-[#84077F] text-4xl font-bold uppercase">Deep technology</p>
    </div>
</div>
      <img className="" src="../assets/cuate.jpg"/>
    </div>
  </div>
</section>
      )}
    </Formik>
  );
};

export default Form;