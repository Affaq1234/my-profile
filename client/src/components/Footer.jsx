
import React from "react";

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div>
        <p className="section-label">HAVE A PROJECT IN MIND?</p>
        <h2>Let's work together.</h2>
        <p>
          Have an idea or opportunity? I'd love to hear from you.
        </p>

        <a
          href="mailto:your@email.com"
          className="primary-btn"
        >
          Get In Touch ↗
        </a>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Affaq Ahmed. All rights reserved.</p>
        <a href="#home">Back to top ↑</a>
      </div>
    </footer>
  );
}

export default Footer;
