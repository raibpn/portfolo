import React, { useRef, useState, useEffect } from "react";
import "./index.css";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const Contact = () => {
  const transition = { duration: 2, type: "spring" };

  const form = useRef();
  const [isDone, setIsDone] = useState(false);
  const [formvalue, setFormValue] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });
  const [formError, setFormError] = useState({});
  const [formValidated, setFormValidated] = useState(false);

  const handlevalidation = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formvalue, [name]: value });
  };

  useEffect(() => {
    console.log(formError);
    if (Object.keys(formError).length === 0 && isDone) {
      // console.log(formValue);
    }
  }, [formError]);

  const sendEmail = (e) => {
    e.preventDefault();
    setFormError(validateForm(formvalue));
    if ( Object.keys(formError).length === 0) {
      console.log("form validate inside send email 2:", formValidated);
      emailjs
        .sendForm(
          "gmail",
          "template_e82x7qd",
          form.current,
          "6IvF93XE_oXLGv6CT"
        )
        .then(
          (result) => {
            console.log(result.text);
            setIsDone(true);
            form.reset();
          },
          (error) => {
            console.log(error.text);
          }
        );
      console.log("set is done:", setIsDone);
    }
  };

  const validateForm = (value) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!value.user_name) {
      errors.user_name = "Please Enter Name";
    }

    if (!value.user_email) {
      errors.email = "Please Enter Email";
    } else if (!regex.test(value.user_email)) {
      errors.email = "Enter Valid Email";
    }
    if (!value.message) {
      errors.message = "Please Write Message";
    }
    return errors;
  };

  return (
    <div className="contact-form" id="contact">
      <motion.div
        initial={{ right: "12rem" }}
        whileInView={{ left: "0.5px" }}
        transition={transition}
        className="cont-left"
      >
        <span>Contact</span>
        <span>Me</span>
      </motion.div>
      <motion.div
        initial={{ left: "12rem" }}
        whileInView={{ left: "0.5px" }}
        transition={transition}
        className="cont-right"
      >
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="user_name"
            className="user"
            placeholder="Name"
            value={formvalue.user_name}
            onChange={handlevalidation}
          />
          <span>{formError.user_name}</span>
          <input
            type="email"
            name="user_email"
            className="user"
            placeholder="Email"
            value={formvalue.user_email}
            onChange={handlevalidation}
          />
          <span>{formError.email}</span>
          <textarea
            name="message"
            className="message"
            placeholder="Message"
            value={formvalue.message}
            onChange={handlevalidation}
          />
          <span>{formError.message}</span>
          <input type="submit" value="Send" className="button f-button" />
          <span>
            {Object.keys(formError).length === 0 && isDone
              ? "Thanks For Contacting Me"
              : null}
          </span>
          <div
            className="blur c-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;
