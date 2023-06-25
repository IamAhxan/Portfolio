import Contact from "./Contact";
import React from "react";
import { contactData } from "../data";

console.log(contactData);
const Contacts = () => {
  return (
    <>
      <section class="contact" id="contact">
        <div class="title_div_center">
          <h2 class="title title_center">Get in Touch</h2>
        </div>
        <div class="row justify-content-around text-center contact-container container">
          {contactData.map((contact, index) => {
            return <Contact {...contact} key={contact.id} />;
          })}
        </div>
      </section>
    </>
  );
};

export default Contacts;
