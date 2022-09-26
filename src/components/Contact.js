import { Helmet } from "react-helmet";

// Footer
import Footer from "../components/Footer";
// Stylesheet
import "./Contact.css";

// images
import man from "../images/man.png";
const Contact = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Contact Us | Williams Limited</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta
          name="description"
          content="Contact Us Page For William SASS website"
        />
      </Helmet>
      <div className="contact">
        <div className="contact-header">
          <h1>Talk with our sales team. We're here to help.</h1>
        </div>
        <div className="inner-contact">
          <div className="contact-details">
            <img src={man} alt="man" />
            <div className="contact-text">
              <h2>Have a question?</h2>
              <p className="first-para">
                Are you looking more in-depth information about Williams?
              </p>
              <p className="second-para">
                Or perhaps you have a specific question about our product's
                project management or collaboration features?
              </p>
              <p className="third-para">
                Please provide your details and a Williams representative will
                get in touch with you as soon as possible.
              </p>
              <p>
                Let us know if you'd like to see a demo and learn more about how
                Williams compares to other project management and collaboration
                software that you're currently evaluating.
              </p>
            </div>
          </div>
          <div className="contact-form">
            <form className="form">
              <div className="user-details">
                <div className="inner-detail">
                  <label htmlFor="FirstName">First Name</label>
                  <input type="text" />
                </div>
                <div className="inner-detail">
                  <label htmlFor="LastName">Last Name</label>
                  <input type="text" />
                </div>
                <div className="inner-detail">
                  <label htmlFor="CompanysEmail ">Company’s Email </label>
                  <input type="email" placeholder="name@company.com" />
                </div>
                <div className="inner-detail tel">
                  <label htmlFor="PhoneNumber">Phone Number</label>
                  <input type="tel" placeholder="+234   80 8233 2823" />
                </div>
                <div className="inner-detail">
                  <label htmlFor="CompanysName">Company’s Name</label>
                  <input type="text" placeholder="John Smith Plc" />
                </div>
                <div className="inner-detail">
                  <label htmlFor="CompanysSize">Company’s Size</label>
                  <select name="" id="">
                    <option disabled selected>
                      --- Select ---
                    </option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </div>
              </div>
              <div className="william-help">
                <label htmlFor="williamHelp">
                  How can Williams team help you?
                </label>
                <textarea></textarea>
              </div>
              <div className="will-button">
                <button>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
