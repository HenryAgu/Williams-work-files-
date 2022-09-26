import { Helmet } from "react-helmet";
import { useState } from "react";

// Stylesheet
import "./Pricing.css";

// Images
import naira from "../images/Vector.png";

// Images on team showcase
import image2 from "../images/image2.png";
import image3 from "../images/image3.png";
import image4 from "../images/image4.png";
import image5 from "../images/image5.png";
import image6 from "../images/image6.png";
import image7 from "../images/image7.png";
import image8 from "../images/image8.png";
import image9 from "../images/image9.png";
import image10 from "../images/image10.png";

import question from "../images/question.png";
import appStore from "../images/app-store.png";
import googlePlay from "../images/google-play.png";
const Pricing = () => {
  const [firstQuestion, setfirstQuestion] = useState("");
  const [secondQuestion, setsecondQuestion] = useState("");
  const [thirdQuestion, setthirdQuestion] = useState("");
  const [fourthQuestion, setfourthQuestion] = useState("");
  const [fifthQuestion, setfifthQuestion] = useState("");
  const [sixthQuestion, setsixthQuestion] = useState("");

  const firstAnswer = () =>{
    if(firstQuestion === ""){
      setfirstQuestion("Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, voluptatum!")
    }else{
      setfirstQuestion("")
    }
  }
  const secondAnswer = () =>{
    if(secondQuestion === ""){
      setsecondQuestion("Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, voluptatum!")
    }else{
      setsecondQuestion("")
    }
  }
  const thirdAnswer = () =>{
    if(thirdQuestion === ""){
      setthirdQuestion("Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, voluptatum!")
    }else{
      setthirdQuestion("")
    }
  }
  const fourthAnswer = () =>{
    if(fourthQuestion === ""){
      setfourthQuestion("Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, voluptatum!")
    }else{
      setfourthQuestion("")
    }
  }
  const fifthAnswer = () =>{
    if(fifthQuestion === ""){
      setfifthQuestion("Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, voluptatum!")
    }else{
      setfifthQuestion("")
    }
  }
  const sixthAnswer = () =>{
    if(sixthQuestion === ""){
      setsixthQuestion("Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, voluptatum!")
    }else{
      setsixthQuestion("")
    }
  }
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Pricing | Williams Limited</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta
          name="description"
          content="Pricing page for William SASS website"
        />
      </Helmet>
      <div className="pricing">
        <div className="pricing-header">
          <h1>Pricing</h1>
          <p>
            Trusted by hundreds of thousands, Williams gives you the power,
            control and customization you need to manage your team. Explore
            which option is right for you
          </p>
        </div>
        <div className="plans">
          <div className="basic">
            <div className="plan-header basic-header">
              <h3>Basic</h3>
              <p>
                For individuals getting started with project management and
                collaboration. Best for personal use.
              </p>
            </div>
            <div className="price">
              <div className="amount">
                <img src={naira} alt="naira" />
                <h1>0.00</h1>
              </div>
              <p>Free for your whole team</p>
            </div>
            <div className="price-button basic-button">
              <button>Get Started</button>
            </div>
            <div className="price-spec basic-spec">
              <ul>
                <li>100MB Storage</li>
                <li>Unlimited Tasks</li>
                <li>Unlimited Free Plan Members</li>
                <li>Two-Factor Authentication</li>
                <li>Collaborative Docs</li>
                <li>Whiteboards</li>
                <li>Real-Time Chat</li>
                <li>Email in ClickUp</li>
                <li>Kanban Boards</li>
                <li>Sprint Management</li>
                <li>Native Time Tracking</li>
                <li>In-App Video Recording</li>
                <li>24/7 Support</li>
              </ul>
            </div>
          </div>
          <div className="premium">
            <div className="plan-header premium-header">
              <h3>Premium</h3>
              <p>
                For teams that run multiple projects and programs looking to
                streamline work.
              </p>
              <br />
            </div>
            <div className="price">
              <div className="amount">
                <img src={naira} alt="naira" />
                <h1>7,000</h1>
              </div>
              <p>Per user/month if billed annually ( 8,500 billed monthly)</p>
            </div>
            <div className="price-button premium-button">
              <button>Get Started</button>
              <a href=".">Or Purchase Now</a>
            </div>
            <div className="price-spec">
              <ul>
                <li>
                  <b>EVERYTHING IN BASIC AND</b>
                </li>
                <li>Google SSO</li>
                <li>Unlimited Teams</li>
                <li>Custom Exporting</li>
                <li>Advanced Public Sharing</li>
                <li>Advanced Automations</li>
                <li>Advanced Dashboard Features</li>
                <li>Advanced Time Tracking</li>
                <li>Granular Time Estimates</li>
                <li>Workload Management</li>
                <li>Timelines & Mind Maps</li>
              </ul>
            </div>
          </div>
          <div className="business">
            <div className="plan-header business-header">
              <h3>Business</h3>
              <p>
                For teams and companies of all sizes that require custom project
                management features and extra support.
              </p>
            </div>
            <div className="price">
              <div className="amount">
                <img src={naira} alt="naira" />
                <h1>12,500</h1>
              </div>
              <p>Per user/month if billed annually ( 12,500 billed monthly)</p>
              <div className="per-cost">
                <p>
                  Est cost <h2> 25 </h2> users
                </p>
              </div>
            </div>
            <div className="price-button business-button">
              <button>Get Started</button>
              <a href=".">Or Purchase Now</a>
            </div>
            <div className="price-spec">
              <ul>
                <li>
                  <b>EVERYTHING IN PREMIUM AND</b>
                </li>
                <li>White Labeling</li>
                <li>Advanced Permissions</li>
                <li>Enterprise API</li>
                <li>Unlimited Custom Roles</li>
                <li>Default Personal Views</li>
                <li>MSA & HIPAA Available</li>
                <li>Single Sign-On (SSO)</li>
                <li>Live Onboarding Training</li>
                <li>Dedicated Success Manager</li>
                <li>Access to Managed Services</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="our-plans">
          <select name="" id="">
            <option disabled selected>Compare our plans</option>
            <option value="basic">Basic plan</option>
            <option value="premium">Premium plan</option>
            <option value="business">Business plan</option>
          </select>
        </div>
        <div className="faqs">
          <div className="faq-header">
            <h1>FAQs</h1>
            <p>
              Here are some of the common questions that might pop up in your
              mind:
            </p>
          </div>
          <div className="faq-questions">
            <div className="faq-question" onClick={firstAnswer}>
              <div className="quest">
                <i class="fa-solid fa-plus"></i>
                <p>Is there any long-term contract?</p>
              </div>
              <div className="faq-answer">
                <p>{firstQuestion}</p>
              </div>
            </div>
            <div className="faq-question" onClick={secondAnswer}>
              <div className="quest">
                <i class="fa-solid fa-plus"></i>
                <p>Can I change plans at any time?</p>
              </div>
              <div className="faq-answer">
                <p>{secondQuestion}</p>
              </div>
            </div>
            <div className="faq-question" onClick={thirdAnswer}>
              <div className="quest">
                <i class="fa-solid fa-plus"></i>
                <p>Do you offer discount for nonprofits?</p>
              </div>
              <div className="faq-answer">
                <p>{thirdQuestion}</p>
              </div>
            </div>
            <div className="faq-question" onClick={fourthAnswer}>
              <div className="quest">
                <i class="fa-solid fa-plus"></i>
                <p>What is your refund policy?</p>
              </div>
              <div className="faq-answer">
                <p>{fourthQuestion}</p>
              </div>
            </div>
            <div className="faq-question" onClick={fifthAnswer}>
              <div className="quest">
                <i class="fa-solid fa-plus"></i>
                <p>What are the modes of payment that you accept?</p>
              </div>
              <div className="faq-answer">
                <p>{fifthQuestion}</p>
              </div>
            </div>
            <div className="faq-question last-question" onClick={sixthAnswer}>
              <div className="quest">
                <i class="fa-solid fa-plus"></i>
                <p>How is safe is Williams?</p>
              </div>
              <div className="faq-answer">
                <p>{sixthQuestion}</p>
              </div>
            </div>
          </div>
        </div>
        {/* Team section starts here */}
      <div className="team">
          <h2>JOIN OVER 250,000+ HIGHLY PRODUCTIVE TEAMS</h2>
          <div className="inner-team">
            <div className="team-picture">
              <img src={image2} alt="verizon" />
            </div>
            <div className="team-picture">
              <img src={image3} alt="google" />
            </div>
            <div className="team-picture">
              <img src={image4} alt="visa" />
            </div>
            <div className="team-picture">
              <img src={image5} alt="zoom" />
            </div>
            <div className="team-picture">
              <img src={image6} alt="IBM" />
            </div>
            <div className="team-picture">
              <img src={image7} alt="loreal" />
            </div>
            <div className="team-picture">
              <img src={image8} alt="EA" />
            </div>
            <div className="team-picture special-image">
              <img src={image9} alt="ingressive" />
            </div>
            <div className="team-picture special-image">
              <img src={image10} alt="zuri" />
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
      </div>
    </>
  );
};

export default Pricing;
