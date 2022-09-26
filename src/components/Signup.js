import React, { useState } from "react";
import { Helmet } from "react-helmet";

// stylesheet
import "./Signup.css";

// Images
import logo from "../images/logo.png";
import signUpDetails from "../images/sign-up-image.png";
import googleLogo from "../images/google.png";
import microsoftLogo from "../images/microsoft.png";
import appleLogo from "../images/apple.png";
import question from "../images/question.png";
import appStore from "../images/app-store.png";
import googlePlay from "../images/google-play.png";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const submitHandler = (event) => {
    event.preventDefault();
    if (email.length == " ") {
      setError(true);
    }
  };
  return (
    <>
      <div className="sign-up-container">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Sign Up | Williams Limited</title>
          <link rel="canonical" href="http://mysite.com/example" />
          <meta
            name="description"
            content="Sign up page for William SASS website"
          />
        </Helmet>
        <div className="sign-up-details">
          <div className="sign-up-logo">
            <img src={logo} alt="logo" />
          </div>
          <p>
            250,000+ teams & businesses worldwide make use of <b>Williams</b> to
            collaborate & manage their projects.
          </p>
          <ul>
            <li>
              <i class="fa-solid fa-check"></i> 14 days free trial with the all
              features
            </li>
            <li>
              <i class="fa-solid fa-check"></i> Quick and reliable support
            </li>
            <li>
              <i class="fa-solid fa-check"></i> Free walkthrough
            </li>
            <li>
              <i class="fa-solid fa-check"></i> No learning curve
            </li>
          </ul>
          <div className="sign-up-image">
            <img src={signUpDetails} alt="signUpDetails" />
          </div>
        </div>
        <div className="sign-up-form">
          <h2>Sign Up for your account</h2>
          <form action="" className="email-login-form" onSubmit={submitHandler}>
            <input
              type="email"
              value={email}
              placeholder="Enter your Email Address"
              onChange={(event) => setEmail(event.target.value)}
            />
            {error && email.length <= 0 ? (
              <div className="error">
                <span>Please, enter a valid Email</span>
              </div>
            ) : (
              ""
            )}
            <div className="policy">
              <p>
                By signing up, you confirm that you've read and accepted our{" "}
                <a href=".">Terms of Service</a> and{" "}
                <a href=".">Privacy Policy</a>.
              </p>
            </div>
            <button>Continue</button>
          </form>
          <div className="or">OR</div>
          <div className="alt-buttons">
            <button>
              <img src={googleLogo} alt="googleLogo" /> Continue with Google
            </button>
            <button>
              <img src={microsoftLogo} alt="microsoftLogo" /> Continue with
              Microsoft
            </button>
            <button>
              <img src={appleLogo} alt="appleLogo" /> Continue with Apple
            </button>
          </div>
          <div className="divider"></div>
          <div className="login">
            <a href="/login">Already have an account? Log In</a>
          </div>
        </div>
      </div>
      <div className="question">
        <button>
          <img src={question} alt="question" /> Have questions?
        </button>
      </div>
      <div className="signup-footer">
        <div className="copyright">© 2022 Williams, Inc.</div>
        <div className="language"><i class="fa-solid fa-globe"></i> English</div>
        <div className="terms"><a href=".">Terms & Privacy</a></div>
        <div className="socials social-handle">
        <a href="."><i class="fa-brands fa-facebook-f facebook"></i></a>
        <a href="."><i class="fa-brands fa-instagram instagram"></i></a>
        <a href="."><i class="fa-brands fa-youtube youtube"></i></a>
        <a href="."><i class="fa-brands fa-linkedin linkedin"></i></a>
        <a href="."><i class="fa-brands fa-twitter twitter"></i></a>
        </div>
        <div className="google-images">
            <a href="."><img src={appStore} alt="appStore" className="appstore"/></a>
            <a href="."><img src={googlePlay} alt="googlePlay" /></a>
        </div>
      </div>
    </>
  );
};

export default Signup;
