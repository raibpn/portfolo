import React, { useRef, useState } from "react";
import "./index.css";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const Contact = () => {
  const transition = { duration: 2, type: "spring" };

  const form = useRef();
  const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("gmail", "template_e82x7qd", form.current, "6IvF93XE_oXLGv6CT")
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          form.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="contact-form">
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
          />
          <input
            type="email"
            name="user_email"
            className="user"
            placeholder="Email"
          />
          <textarea name="message" className="user" placeholder="Message" />
          <input type="submit" value="Send" className="button f-button" />
          <span>{done && "Thanks for Contacting me"}</span>
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
