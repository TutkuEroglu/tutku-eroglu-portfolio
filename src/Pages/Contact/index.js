import React, { useState, useRef, useEffect } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { CSSTransition } from "react-transition-group";

const Contact = ({ scroll }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [formVis, setFormVis] = useState(false);

  const contactRef = useRef(null);
  const form = useRef();


  useEffect(() => {
    if (scroll) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [scroll]);



  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_d96xr13', 'template_p8nln0k', form.current, 'XU7xO-CLB1dBSjRGE')
      .then((result) => {}, 
      (error) => {});
  };


  return (
    <div className="contact" ref={contactRef}>
      <div className="contact-header">
        <span className="contact-text">İletişim</span>
      </div>



      <div className="social-btns">
        <a className="btn instagram" href="/" target="_blank">
          <i className="bi bi-instagram"></i>
        </a>
        <a className="btn linkedin" href="/">
          <i className="bi bi-linkedin"></i>
        </a>
        <a className="btn twitter" href="/">
          <i className="bi bi-twitter"></i>
        </a>
        <a className="btn github" href="/">
          <i className="bi bi-github"></i>
        </a>
        <div className="btn envelope" onClick={() => setFormVis(!formVis)}>
          <i class="bi bi-envelope"></i>
        </div>
      </div>


      <CSSTransition in={formVis} timeout={800} classNames="form-anim" unmountOnExit>
    <div className="container">
            <form className="form" ref={form} onSubmit={sendEmail}>
                <label className="form-label">
                    Adınız:
                    <input
                        className="form-input"
                        type="text"
                        value={name}
                        name="user_name"
                        onChange={(e) => setName(e.target.value)}
                        autoComplete="off"
                    />
                </label>

                <label className="form-label">
                    Email Adresiniz:
                    <input
                        className="form-input"
                        type="email"
                        value={email}
                        name="user_email"
                        onChange={(e) => setEmail(e.target.value)}
                        autoComplete="off"
                    />
                </label>

                <label className="form-label">
                    Mesajınız:
                    <textarea className="form-textarea" value={message} name="message" onChange={(e) => setMessage(e.target.value)} />
                </label>

                <button className="form-button" type="submit" value="Send">Gönder</button>
            </form>
        </div></CSSTransition>
    </div>
  );
};

export default Contact;
