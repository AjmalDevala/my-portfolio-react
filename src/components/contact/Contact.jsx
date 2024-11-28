import { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import "./contact.css";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          toast.success("Message sent successfully!");
          e.target.reset();
        },
        () => {
          toast.error("Sorry, this didn't work!");
        }
      );
  };

  return (
    <>
      <Helmet>
        <title>Contact Ajmal U - Full Stack Developer | MERN Stack</title>
        <meta
          name="description"
          content="Get in touch with Ajmal U, a full-stack developer specializing in MERN stack, for collaborations, queries, or job opportunities."
        />
        <meta
          name="keywords"
          content="contact, Ajmal U, Ajmaldevala,devala Full Stack Developer, MERN Stack, JavaScript, React, Node.js, MongoDB, developer contact"
        />
        <meta
          property="og:title"
          content="Contact Ajmal U - Full Stack Developer | MERN Stack"
        />
        <meta
          property="og:description"
          content="Get in touch with Ajmal U, a full-stack developer specializing in MERN stack. Reach out for collaborations, queries, or job opportunities."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourwebsite.com/contact" />
        <meta
          property="og:image"
          content="https://yourwebsite.com/yourimage.jpg"
        />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "ContactPage",
              "name": "Ajmal U - Contact",
              "url": "https://yourwebsite.com/contact",
              "description": "Contact Ajmal U for collaborations, inquiries, and job opportunities in full-stack development using the MERN stack."
            }
          `}
        </script>
      </Helmet>

      <section className="contact section" id="contact">
        <Toaster position="top-center" />
        <h2 className="section__title">Get in touch</h2>
        <span className="section__subtitle"> </span>

        <div className="contact__container container grid">
          <div className="contact__content">
            <h3 className="contact__title">Connect with me</h3>
            <div className="contact__info">
              <div className="contact__card">
                <i className="bx bx-mail-send contact__card-icon"></i>
                <h3 className="contact__card-title">Email</h3>
                <a
                  href="mailto:ajmaldevala@gmail.com"
                  className="contact__button"
                  alt="Email Ajmal U"
                >
                  ajmaldevala@gmail.com
                  <i className="uil uil-angle-double-right contact__button-icon"></i>
                </a>
              </div>

              <div className="contact__card">
                <i className="bx bxl-whatsapp contact__card-icon"></i>
                <h3 className="contact__card-title">Whatsapp</h3>
                <a
                  href="https://api.whatsapp.com/send?phone=+917598700502&text=Hello, more information!"
                  className="contact__button"
                  alt="WhatsApp Ajmal U"
                >
                  +91 759 8700 502
                  <i className="uil uil-angle-double-right contact__button-icon"></i>
                </a>
              </div>

              <div className="contact__card">
                <i className="bx bxl-linkedin contact__card-icon"></i>
                <h3 className="contact__card-title">Linkedin</h3>
                <a
                  href="https://www.linkedin.com/in/ajmal-devala/"
                  className="contact__button"
                  alt="LinkedIn Ajmal U"
                >
                  @Ajmal U
                  <i className="uil uil-angle-double-right contact__button-icon"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="contact__content">
            <h3 className="contact__title">Write me your Message</h3>
            <h3 className="contact__title">Don't be shy, just say hi to me.</h3>

            <form ref={form} onSubmit={sendEmail} className="contact__form">
              <div className="contact__form-div">
                <label className="contact__form-tag" htmlFor="name">
                  Name
                </label>
                <input
                  required
                  type="text"
                  name="to_name"
                  id="name"
                  className="contact__form-input"
                  placeholder="Insert your name"
                  alt="Name"
                />
              </div>

              <div className="contact__form-div">
                <label className="contact__form-tag" htmlFor="email">
                  Email
                </label>
                <input
                  required
                  type="email"
                  name="from_email"
                  id="email"
                  className="contact__form-input"
                  placeholder="Insert your email"
                  alt="Email"
                />
              </div>

              <div className="contact__form-div contact__form-area">
                <label className="contact__form-tag" htmlFor="message">
                  Message
                </label>
                <textarea
                  required
                  name="message"
                  id="message"
                  cols={20}
                  rows={10}
                  className="contact__form-input"
                  placeholder="Write your Message"
                  alt="Message"
                />
              </div>

              <button type="submit" className="button button--flex">
                Send Message
                <svg
                  className="button__icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352ZM7.63988 7.33525C4.85988 8.26525 3.86988 9.36525 3.86988 10.0852C3.86988 10.8052 4.85988 11.9052 7.63988 12.8252L10.1599 13.6652C10.3799 13.7352 10.5599 13.9152 10.6299 14.1352L11.4699 16.6552C12.3899 19.4352 13.4999 20.4252 14.2199 20.4252C14.9399 20.4252 16.0399 19.4352 16.9699 16.6552L19.7999 8.16525C20.3099 6.62525 20.2199 5.36525 19.5699 4.71525C18.9199 4.06525 17.6599 4.17525 16.1599 4.88525L7.63988 7.33525Z"
                    fill="#fff"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>

        {/* Support Section */}
        <div className="footer__support">
          <h3 className="footer__support-title">Support:</h3>
          <div className="footer__support-buttons">
            <a href="https://www.buymeacoffee.com/ajmaldevala">
              <img
                src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
                height="20"
                width="150"
                alt="ajmaldevala"
                className="footer__support-img"
              />
            </a>
            <a href="https://ko-fi.com/ajmaldevala">
              <img
                src="https://cdn.ko-fi.com/cdn/kofi3.png?v=3"
                height="20"
                width="160"
                alt="ajmaldevala"
                className="footer__support-img"
              />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
