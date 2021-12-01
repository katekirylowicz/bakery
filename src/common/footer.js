import React from "react";
import getAssetPath from '../utils/getAssetPath';

const Footer = () => {
  return (
    <>
      <footer>
        <div className="foo-container">
          <div>
            <div className="contact_section">
              <div>Contact with us:</div>
              <span><img className="mobi_ico"
                src={getAssetPath('mobile-solid.svg')}
                alt="mobile-ico" /></span>
              <a className="contact_num" href="tel:+48666666666"> 666 666 666</a>
            </div>
            <div>
              <span><img className="e-mail_ico"
                src={getAssetPath('at-solid.svg')}
                alt="at-ico" /></span> <a className="contact_mail" href="mailto:artofbread@gmail.com?subject=tytuł listu">artofbread@gmail.com</a>
            </div>
          </div>
          <p>&copy;2021 Kiryłowicz</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;