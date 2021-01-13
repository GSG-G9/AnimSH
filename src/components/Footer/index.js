import React from 'react';
import { Link } from 'react-router-dom';

import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="social-links">
        <Link to="/">Privacy Policy</Link>
        <Link to="/">User Agreement</Link>
      </div>
      <p>© 2020-2021 AnimeSH Co.,Ltd. All rights reserved.</p>
    </div>
  );
};

export default Footer;
