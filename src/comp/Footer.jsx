import React from "react";
import "./Footer.css";

import { useTranslation } from "react-i18next";

const Footer = () => {
  const {  i18n } = useTranslation();

  if (i18n.language === "ar") {
    return (
      <div className="myfooter">
        <footer dir="rtl" className="ali   ">
          {/*        */}
      تم التصميم والبرمجة بواسطة احمد نور الدين
        
        </footer>
      </div>
    );
  }

  if (i18n.language === "en") {
    return (
      <div className="myfooter">
        <footer className="ahmed">
          Designed and developed by Ahmed Nour Eldeen
        
        </footer>
      </div>
    );
  }

  if (i18n.language === "fr") {
    return (
      <div className="myfooter">
        <footer className="ali   ">
          Conçu et développé par Ahmed Nour Eldeen
        
        </footer>
      </div>
    );
  }
};

export default Footer;
