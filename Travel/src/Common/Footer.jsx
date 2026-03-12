import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div>
<section className="w3l-footer-16">
  {/* w3l-footer-16 */}
  <div className="w3l-footer-16-main">
    <div className="wrapper">
      <div className="grid">
        <div className="column">
          <h2><Link to={"/"} className="logo-2">Travelling</Link></h2>
          <p>All rights reserved.<br />©2026 
          </p>
        </div>
        <div className="column">
          <h3>About</h3>
          <ul className="footer-gd-16">
            <li><Link to={"/faq"}>FAQs</Link></li>
            <li><Link to={"/about"}>About Us</Link></li>
            {/* <li><Link to={"/services"}>Services</Link></li> */}
            {/* <li><Link to={"/team"}>Travel Guides</Link></li> */}
            <li><Link to={"/feedback"}>Feedback</Link></li>
          </ul>
        </div>
        <div className="column">
          <h3>Pages</h3>
          <ul className="footer-gd-16">
            {/* <li><Link to={"/ecommerce"}>Products</Link></li> */}
            <li><Link to={"/blog"}>Blog Page</Link></li>
            <li><Link to={"/contact"}>Contact Us</Link></li>
            <li><Link to={"/login"}>Login</Link></li>
            <li><Link to={"/signup"}>Signup</Link></li>
          </ul>
        </div>

        <div className="column" >
          <h3>Subscribe </h3>
          <form  className="subscribe" >
            <input type="email" name="email" placeholder="Placeholder" required />
            <button><span className="fa fa-paper-plane" aria-hidden="true" /></button>
          </form>
          <p>Subscribe to our mailing list and get updates to your email inbox.</p>
        </div>
      </div>
    </div>
  </div>

</section>

    </div>
  )
}

export default Footer