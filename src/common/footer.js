import React from "react";


const Footer = () => {
  return (
    <>
      <footer>
        <div className="foo-container">

          <div>Contact with us : <span><img className="mobi_ico"
            src="/assets/mobile-solid.svg"
            alt="mobile-ico" /></span> <a className="contact_num" href="tel:+48666666666"> 666 666 666</a> </div>
          <p>&copy;2021 Kiryłowicz</p>

        </div>
      </footer>
    </>
  );
};

export default Footer;