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
    <div className="md:block hidden w-1/2">
      <div className="flex space-x-2  flex-end items-center  mb-10">

      <img className="" src="../assets/logo.jpg"/>
    
    
</div>
      <img className="" src="../assets/pablo.jpg"/>
    </div>
    <div className="md:w-1/2 px-8">
      <h2 className="font-bold text-3xl text-[#84077F] tracking-wide">Welcome!</h2>
      <p className="text-sm mt-1 text-[#84077F]">Enter details to login.</p>
      


      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input className="p-2  mt-8 rounded-sm border border-[#545F7D] text-[#545F7D]" type="email" name="Email" placeholder="Full Name" onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.email}/>
        
        <input className="p-2  rounded-sm border border-[#545F7D]" type="password" name="password" placeholder="Password" onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.password}/>
                  <div className="mt-3 text-xl flex justify-between items-center text-[#373737]">
        <p><a className=" text-sm text-[#84077F]">Forgot Password?</a></p>
        
      </div>
        
        
        
        <button className="bg-[#84077F] rounded-xl text-white py-2 hover:scale-105 duration-300">LOGIN</button>
      </form>

     
      
      

      
    </div>

    
    
  </div>
</section>
      )}
    </Formik>
  );
};

export default Form;