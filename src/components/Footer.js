import React, { useEffect } from "react";
import "./Footer.css";

// Images on the site
import logo from "../images/logo.png";

// Footer Section
import appStore from "../images/app-store.png";
import googlePlay from "../images/google-play.png";

// Import AOS js
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
      <footer>
        <div className="footer-grid">
          <div className="inner-footer-grid">
            <img src={logo} alt="logo" />
          </div>
          <div className="inner-footer-grid">
            <ul>
              <a href="#">
                <li className="grid-header">Williams</li>
              </a>
              <a href="#">
                <li>Home</li>
              </a>
              <a href="#">
                <li>Product</li>
              </a>
              <a href="#">
                <li>Pricing</li>
              </a>
              <a href="#">
                <li>Premium</li>
              </a>
              <a href="#">
                <li>Business</li>
              </a>
              <a href="#">
                <li>Enterprise</li>
              </a>
              <a href="#">
                <li>Customer Success</li>
              </a>
              <a href="#">
                <li>Wiliams Templates</li>
              </a>
              <a href="#">
                <li>Trust & Security</li>
              </a>
              <a href="#">
                <li>Status</li>
              </a>
            </ul>
          </div>
          <div className="inner-footer-grid">
            <ul>
              <a href="#">
                <li className="grid-header">About Us</li>
              </a>
              <a href="#">
                <li>Company</li>
              </a>
              <a href="#">
                <li>Leadership</li>
              </a>
              <a href="#">
                <li>Customers</li>
              </a>
              <a href="#">
                <li>Diversity</li>
              </a>
              <a href="#">
                <li>Careers</li>
              </a>
              <a href="#">
                <li>Press</li>
              </a>
              <a href="#">
                <li>Wavelength</li>
              </a>
              <a href="#">
                <li>Williams Blog</li>
              </a>
              <a href="#">
                <li>Investor Relations</li>
              </a>
              <a href="#">
                <li>Sitemap</li>
              </a>
            </ul>
          </div>
          <div className="inner-footer-grid">
            <ul>
              <a href="#">
                <li className="grid-header">Workflow Solutions</li>
              </a>
              <a href="#">
                <li>Project Management</li>
              </a>
              <a href="#">
                <li>Goal Management</li>
              </a>
              <a href="#">
                <li>Agile Management</li>
              </a>
              <a href="#">
                <li>Task Management</li>
              </a>
              <a href="#">
                <li>Increase Productivity</li>
              </a>
              <a href="#">
                <li>Work Management</li>
              </a>
              <a href="#">
                <li>Project Planning</li>
              </a>
              <a href="#">
                <li>To Do Lists</li>
              </a>
              <a href="#">
                <li>See All Uses</li>
              </a>
              <a href="#">
                <li>See All Teams</li>
              </a>
            </ul>
          </div>
          <div className="inner-footer-grid">
            <ul>
              <a href="#">
                <li className="grid-header">Resources</li>
              </a>
              <a href="#">
                <li>Forum</li>
              </a>
              <a href="#">
                <li>Support</li>
              </a>
              <a href="#">
                <li>App Directory</li>
              </a>
              <a href="#">
                <li>Developers & API</li>
              </a>
              <a href="#">
                <li>Partners</li>
              </a>
              <a href="#">
                <li>Tool Tactic Community</li>
              </a>
              <a href="#">
                <li>Events</li>
              </a>
              <a href="#">
                <li>Asana for Nonprofits</li>
              </a>
              <a href="#">
                <li>Accessibility</li>
              </a>
            </ul>
          </div>
          <div className="inner-footer-grid">
            <ul>
              <a href="#">
                <li className="grid-header">Learn</li>
              </a>
              <a href="#">
                <li>11 Leadership Styles</li>
              </a>
              <a href="#">
                <li>110 Icebreaker Questions</li>
              </a>
              <a href="#">
                <li>Executive Summary Tips</li>
              </a>
              <a href="#">
                <li>Impostor Syndrome Tips</li>
              </a>
              <a href="#">
                <li>Prevent Team Burnout</li>
              </a>
              <a href="#">
                <li>SWOT Analysis Tips</li>
              </a>
              <a href="#">
                <li>What are OKRs?</li>
              </a>
              <a href="#">
                <li>What are SMART Goals?</li>
              </a>
              <a href="#">
                <li>What is Scope Creep?</li>
              </a>
              <a href="#">
                <li>See All Guides</li>
              </a>
            </ul>
          </div>
        </div>
        <div className="copyright-footer">
          <div className="inner-copyright-footer hide"></div>
          <div className="inner-copyright-footer">© 2022 Williams, Inc.</div>
          <div className="inner-copyright-footer">
            <a href="#">
              <i class="fa-solid fa-globe globe"></i> English
            </a>
          </div>
          <div className="inner-copyright-footer">
            <a href="#">Terms & Privacy</a>
          </div>
          <div className="inner-copyright-footer">
            <a href="#">
              <i class="fa-brands fa-facebook-f facebook"></i>
            </a>
            <a href="#">
              <i class="fa-brands fa-instagram instagram"></i>
            </a>
            <a href="#">
              <i class="fa-brands fa-youtube youtube"></i>
            </a>
            <a href="#">
              <i class="fa-brands fa-linkedin linkedin"></i>
            </a>
            <a href="#">
              <i class="fa-brands fa-twitter twitter"></i>
            </a>
          </div>
          <div className="inner-copyright-footer">
            <a href="#">
              <img src={appStore} alt="app-store" className="app-store" />
            </a>
            <a href="#">
              <img src={googlePlay} alt="google-play" className="google-play" />
            </a>
          </div>
        </div>
      </footer>
      </div>
      <a href="." class="gotopbtn">
        <i class="fa-solid fa-arrow-up"></i>
      </a>
    </>
  );
};

export default Footer;
