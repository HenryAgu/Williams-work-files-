// Import Swiper React components
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {Helmet} from "react-helmet";

// NavBar and Footer
import Footer from "./Footer";

// Import AOS js
import AOS from "aos";
import "aos/dist/aos.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Images on the site
import logo from "../images/logo.png";
import image1 from "../images/image1.png";
import google from "../images/google.png";
import question from "../images/question.png";

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
import lady from "../images/lady.png";
import play from "../images/play.png";
import share from "../images/share.png";
import time from "../images/time.png";
import project from "../images/project.png";
import teamWork from "../images/team-work.png";
import auto from "../images/automation.png";
import arrow from "../images/arrow.png";
import creative from "../images/creative.JPG";
import logo2 from "../images/logo2.png";

// Integration grid images
import zapier from "../images/zapier.png";
import slack from "../images/slack.png";
import powerBi from "../images/power-bi.png";
import gmail from "../images/gmail.png";
import calender from "../images/google-calendar.png";
import sharePoint from "../images/sharepoint.png";
import dropBox from "../images/drop-box.png";
import drive from "../images/drive.png";

// Review Section
import reviewImage1 from "../images/review.png";
import reviewBackground from "../images/review-background.png";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
const Body = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Welcome | Williams Limited</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta name="description" content="Home page for William SASS website" />
      </Helmet>
      <div className="introduction">
        <div className="inner-introduction">
          <h1>Williams helps teams move work forward</h1>
          <ul>
            <li>
              <i class="fa-solid fa-check"></i> All the tools your team needs
              put
              <b> under one roof</b>
            </li>
            <li>
              <i class="fa-solid fa-check"></i> <b>Ultimate control </b> over
              teams and projects easier than ever
            </li>
            <li>
              <i class="fa-solid fa-check"></i> On time project delivery & on
              point <b> team accountability</b>
            </li>
            <li>
              <i class="fa-solid fa-check"></i> <b>Easy-to-understand </b> with
              little to no learning curve
            </li>
            <li>
              <i class="fa-solid fa-check"></i> <b>No per user fee </b> & simple
              fixed price plans
            </li>
          </ul>
          <div className="intro-email">
            <input type="email" placeholder="Enter your Email" />
            <a href="#">
              <button value="submit">Get Started</button>
            </a>
          </div>
          <span className="inner-intro-email">
            TRY IT FOR FREE. NO CREDIT CARD NEEDED
          </span>
          <div class="or-section">
            <div class="left-or"></div>
            <span className="main-or">OR</span>
            <div class="right-or"></div>
          </div>
        </div>
        <div className="intro-image">
          <img src={image1} alt="image1" />
        </div>
      </div>
      <div className="google-section">
        <div className="google">
          <img src={google} alt="google" />
          <a href="#">Sign In with Google</a>
        </div>
        <div className="questions">
          <img src={question} alt="question-vector" />
          <a href="#">Have questions?</a>
        </div>
      </div>
      {/* Team section starts here */}
      <div className="team">
        <div data-aos="fade-up" data-aos-duration="2000">
          <h2>JOIN OVER 250,000+ HIGHLY PRODUCTIVE TEAMS</h2>
        </div>
        <div data-aos="zoom-out-right" data-aos-duration="2000">
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
      </div>
      <div className="how-works">
        <h1>WILLIAMS- How it works?</h1>
      </div>
      {/* First Showcase */}
      <div className="youtube-showcase">
        <div className="inner-youtube-showcase">
          <div className="top-youtube-showcase">
            <div className="top-left">
              <img src={logo} alt="logo" />
              <h2>WILLIAMS- How it works?</h2>
            </div>
            <div className="top-right">
              <img src={time} alt="watch later" title="watch later" />
              <img src={share} alt="share" title="share" className="share" />
            </div>
          </div>
          <div className="middle-youtube-showcase">
            <h2>Here is how WILLIAMS Works</h2>
            <i class="fa-brands fa-youtube"></i>
            <img src={lady} alt="lady" />
          </div>
          <a href="#">
            <button>Watch on Youtube</button>
          </a>
        </div>
      </div>
      {/* Project and tasks */}
      <div className="project-and-task">
        <div className="inner-project">
          <div data-aos="fade-down-right">
            <div className="project-image">
              <img src={project} alt="project" />
            </div>
          </div>
          <div data-aos="fade-down-left">
            <div className="project-text">
              <h2>PROJECTS & TASKS</h2>
              <h1>Multi-step projects made easy</h1>
              <p>
                Simple workflows for complex approvals. Powerful proofing and
                annotation tools. Use project and action templates for
                repeatable steps to cut down your work in half.
              </p>
              <ul>
                <li>
                  <i class="fa-solid fa-check"></i> Document and video proofing
                </li>
                <li>
                  <i class="fa-solid fa-check"></i> Approval workflows
                </li>
                <li>
                  <i class="fa-solid fa-check"></i> Project templates
                </li>
              </ul>
              <button>Get Started</button>
            </div>
          </div>
        </div>
        {/* Team work */}
        <div className="team-work">
          <div data-aos="fade-right">
            <div className="team-work-text">
              <h2>TEAMWORK</h2>
              <h1>Get your team to work</h1>
              <p>
                Simple workflows for complex approvals. Powerful proofing and
                annotation tools. Use project and action templates for
                repeatable steps to cut down your work in half.
              </p>
              <ul>
                <li>
                  <i class="fa-solid fa-check"></i> Timesheets & Time tracking
                </li>
                <li>
                  <i class="fa-solid fa-check"></i> Workflows
                </li>
                <li>
                  <i class="fa-solid fa-check"></i> Project templates
                </li>
              </ul>
              <button>Get Started</button>
            </div>
          </div>
          <div data-aos="fade-left">
            <div className="team-work-image">
              <img src={teamWork} alt="team-work" />
            </div>
          </div>
        </div>
        {/* Code Automation */}
        <div className="code-automation">
          <div data-aos="fade-up-right">
            <div className="automation-image">
              <img src={auto} alt="automation-image" />
            </div>
          </div>
          <div data-aos="fade-up-left">
            <div className="automation-text">
              <h2>MEET YOUR NEW BUTLER</h2>
              <h1>No Code Automation</h1>
              <p>
                Let the robots do the work—so your team can focus on work that
                matters. With Williams’ built-in automation, Butler, reduce the
                number of tedious tasks (and clicks) on your project board by
                harnessing the power of automation across your entire team.
              </p>
              <button>Get Started</button>
            </div>
          </div>
        </div>
      </div>
      {/* Integration section */}
      <div className="integrations">
        <div className="integration-header">
          <h2>INTEGRATIONS</h2>
          <h1>One Platform to manage work</h1>
        </div>
        <div data-aos="fade-up" data-aos-duration="2000">
          <div className="integration-grid">
            <div className="inner-integration-grid zapier">
              <div className="logo-wrapper">
                <img src={zapier} alt="zapier-logo" />
              </div>
              <h3>Zapier</h3>
              <p>
                For connecting apps. Connect with 1000+ apps to share and
                automate routine work
              </p>
              <div className="arrow">
                <a href="#">
                  <img src={arrow} alt="arrow" />
                </a>
              </div>
            </div>
            <div className="inner-integration-grid slack">
              <div className="logo-wrapper">
                <img src={slack} alt="slack-logo" />
              </div>
              <h3>Slack</h3>
              <p>
                For File Communication. Add, assign, even comment on Williams
                tasks (and more) on Slack.
              </p>
              <div className="arrow">
                <a href="#">
                  <img src={arrow} alt="arrow" />
                </a>
              </div>
            </div>
            <div className="inner-integration-grid power-bi">
              <div className="logo-wrapper">
                <img src={powerBi} alt="power-bi-logo" />
              </div>
              <h3>Microsoft Power Bi</h3>
              <p>
                For Reporting. Pull data from Williams into Power BI to create
                custom dashboard
              </p>
              <div className="arrow">
                <a href="#">
                  <img src={arrow} alt="arrow" />
                </a>
              </div>
            </div>
            <div className="inner-integration-grid gmail">
              <div className="logo-wrapper">
                <img src={gmail} alt="gmail-logo" />
              </div>
              <h3>Gmail</h3>
              <p>
                For Coordination. Turn Email into tasks in Williams right from
                your Gmail Inbox
                <br />
                <br />
              </p>
              <div className="arrow">
                <a href="#">
                  <img src={arrow} alt="arrow" />
                </a>
              </div>
            </div>
            <div className="inner-integration-grid calender">
              <div className="logo-wrapper">
                <img src={calender} alt="calender-logo" />
              </div>
              <h3>Google Calendar</h3>
              <p>
                For File Time Management. Add your Tool Tactic tasksto your
                Calendar to see deadlines
              </p>
              <div className="arrow">
                <a href="#">
                  <img src={arrow} alt="arrow" />
                </a>
              </div>
            </div>
            <div className="inner-integration-grid share-point">
              <div className="logo-wrapper">
                <img src={sharePoint} alt="share-point-logo" />
              </div>
              <h3>Sharepoint</h3>
              <p>
                For File Sharing. Attach files from Sharepoint to Williams tasks
                from the Williams task pane.
              </p>
              <div className="arrow">
                <a href="#">
                  <img src={arrow} alt="arrow" />
                </a>
              </div>
            </div>
            <div className="inner-integration-grid drop-box">
              <div className="logo-wrapper">
                <img src={dropBox} alt="drop-box-logo" />
              </div>
              <h3>Dropbox</h3>
              <p>
                For File Sharing. Attach files from Dropbox to Williams tasks
                from the Williams task pane.
              </p>
              <div className="arrow">
                <a href="#">
                  <img src={arrow} alt="arrow" />
                </a>
              </div>
            </div>
            <div className="inner-integration-grid drive">
              <div className="logo-wrapper">
                <img src={drive} alt="drive-logo" />
              </div>
              <h3>Google Drive</h3>
              <p>
                For File Sharing. Attach files from Google Drive to Tool Tactic
                tasks from the Williams task pane.
              </p>
              <div className="arrow">
                <a href="#">
                  <img src={arrow} alt="arrow" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Production Workflow */}
      <div className="production-workflow">
        <div className="workflow-header">
          <h2>INTEGRATIONS</h2>
          <h1>One Platform to manage work</h1>
          <div className="header-buttons">
            <a href="#">
              <button>PRODUCT DEVELOPMENT</button>
            </a>
            <a href="#">
              <button>IT REQUEST</button>
            </a>
            <div className="creative-button">
              <a href="#">
                <button>CREATIVE PRODUCTION</button>
              </a>
            </div>
          </div>
        </div>
        <div className="workflow-middle">
          <img src={creative} alt="" />
        </div>
        <div className="workflow-button">
          <a href="#">
            <button>
              EXPLORE WORKFLOW BUILDER{" "}
              <i class="fa-solid fa-arrow-right-long"></i>
            </button>
          </a>
        </div>
      </div>
      {/* Reviews */}
      <div className="review">
        <h2>REVIEWS FROM CUSTOMERS</h2>
        <div className="inner-review">
          <Swiper
            cssMode={true}
            navigation={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="inner-slide">
                <div data-aos="fade-right">
                  <div className="slide-image">
                    <img
                      src={reviewBackground}
                      alt="review-background"
                      className="background"
                    />
                    <img
                      src={reviewImage1}
                      alt="review-pic"
                      className="review-avatar"
                    />
                  </div>
                </div>
                <div data-aos="fade-left">
                  <div className="slide-text">
                    <p>
                      <span>"</span>This has been a fantastic addition to our
                      Projects Division toolkits, and has been integral in the
                      success of several projects we have run via Wrike. It's
                      helping us transition to a more natural work flow and
                      keeping everyone on top of projects.<span>"</span>
                    </p>
                    <div className="review-author">
                      <b>David Olivia // Aassociate Director at Dumblins</b>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="inner-slide">
                <div className="slide-image">
                  <img
                    src={reviewBackground}
                    alt="review-background"
                    className="background"
                  />
                  <img
                    src={reviewImage1}
                    alt="review-pic"
                    className="review-avatar"
                  />
                </div>
                <div className="slide-text">
                  <p>
                    <span>"</span>This has been a fantastic addition to our
                    Projects Division toolkits, and has been integral in the
                    success of several projects we have run via Wrike. It's
                    helping us transition to a more natural work flow and
                    keeping everyone on top of projects.<span>"</span>
                  </p>
                  <div className="review-author">
                    <b>David Olivia // Aassociate Director at Dumblins</b>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="inner-slide">
                <div className="slide-image">
                  <img
                    src={reviewBackground}
                    alt="review-background"
                    className="background"
                  />
                  <img
                    src={reviewImage1}
                    alt="review-pic"
                    className="review-avatar"
                  />
                </div>
                <div className="slide-text">
                  <p>
                    <span>"</span>This has been a fantastic addition to our
                    Projects Division toolkits, and has been integral in the
                    success of several projects we have run via Wrike. It's
                    helping us transition to a more natural work flow and
                    keeping everyone on top of projects.<span>"</span>
                  </p>
                  <div className="review-author">
                    <b>David Olivia // Aassociate Director at Dumblins</b>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="inner-slide">
                <div className="slide-image">
                  <img
                    src={reviewBackground}
                    alt="review-background"
                    className="background"
                  />
                  <img
                    src={reviewImage1}
                    alt="review-pic"
                    className="review-avatar"
                  />
                </div>
                <div className="slide-text">
                  <p>
                    <span>"</span>This has been a fantastic addition to our
                    Projects Division toolkits, and has been integral in the
                    success of several projects we have run via Wrike. It's
                    helping us transition to a more natural work flow and
                    keeping everyone on top of projects.<span>"</span>
                  </p>
                  <div className="review-author">
                    <b>David Olivia // Aassociate Director at Dumblins</b>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="inner-slide">
                <div className="slide-image">
                  <img
                    src={reviewBackground}
                    alt="review-background"
                    className="background"
                  />
                  <img
                    src={reviewImage1}
                    alt="review-pic"
                    className="review-avatar"
                  />
                </div>
                <div className="slide-text">
                  <p>
                    <span>"</span>This has been a fantastic addition to our
                    Projects Division toolkits, and has been integral in the
                    success of several projects we have run via Wrike. It's
                    helping us transition to a more natural work flow and
                    keeping everyone on top of projects.<span>"</span>
                  </p>
                  <div className="review-author">
                    <b>David Olivia // Aassociate Director at Dumblins</b>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="meet-customers">
            <a href="#">
              <button>
                MEET OUR CUSTOMERS<i class="fa-solid fa-arrow-right-long"></i>
              </button>
            </a>
          </div>
        </div>
      </div>
      {/* Second showcase below review */}
      <div
        data-aos="zoom-out-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <div className="get-started">
          <img src={logo2} alt="logo" />
          <h1>Get all the team needs to function effectively in one place.</h1>
          <a href="#">
            <button>Get Started</button>
          </a>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Body;
