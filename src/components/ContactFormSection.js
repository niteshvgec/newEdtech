import React from "react";
import ContactUsForm from "../core/ContactUsPage/ContactUsForm";


const ContactFormSection = () => {
    return (
      <div className="mx-auto">
        <h1 className="text-center text-4xl font-semibold">Get in Touch</h1>
        <p className="text-center text-richblack-300 mt-3">
          We&apos;d love to here for you, Please fill out this form.
        </p>
        <div className="mt-12 mx-auto">
          <ContactUsForm />
        </div>
      </div>
    );
  };


// const ContactFormSection=()=>{
//     return (
//         <div>
//             <h1 className="text-white text-4xl font-bold">Get in Touch</h1>
//             <p className="text-richblack-300">We'd love to here for you, Please fill out this form.</p>
//            <ContactUsForm></ContactUsForm>
//         </div>
//     )
// }
export default ContactFormSection;