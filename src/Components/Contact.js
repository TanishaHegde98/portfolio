import React from "react";
import ContactForm from "./ContactForm";

export default function Contact() {
  const contactDetails = {
    FullName: "Tanisha Hegde",
    Title: "Software Developer",
    email: "tanisha.hegde98@gmail.com",
  };
  return (
    <div className="grid lg:grid-cols-2 px-4 lg:px-0">
      <div className="col-span-1 lg:p-12 ">
        <h1 className="text-4xl font-bold font-serif text-[#e62e3f]">
          Contact
        </h1>
        <h1 className="font-bold text-3xl text-slate-700 mt-2">
          {contactDetails.FullName}
        </h1>
        <h2 className="font-bold text-xl text-slate-700 mt-2">
          {contactDetails.Title}
        </h2>
        <h2 className="font-bold text-xl text-slate-700 mt-2">
          {contactDetails.email}
        </h2>

        <h2 className="mt-14 text-slate-700 text-xl md:text-3xl font-serif italic">
          Need help with your Software products? Or want to scale up your
          Systems on Cloud? Contact me today !!
        </h2>
      </div>
      <ContactForm></ContactForm>
    </div>
  );
}
