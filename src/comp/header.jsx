import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import "../theme.css";
// LEVEL2
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/config";
import { signOut } from "firebase/auth";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t, i18n } = useTranslation();

  const [user] = useAuthState(auth);

  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className="myheader" >
     {i18n.language === "en" && (
                 <header dir="ltr" className="hide-when-mobile ahmed ">
                 <h1>
                   <Link to="/">  {t("createtasks")}</Link>
                 </h1>

           
                   <i
                   style={{marginTop:"5px"}}
                     onClick={() => {
                       toggleTheme(theme === "Light" ? "Dark" : "Light");
                     }}
                     className="fa-solid fa-moon"
                   ></i>
                   <i
                   style={{marginTop:"5px"}}
                     onClick={() => {
                       toggleTheme(theme === "Light" ? "Dark" : "Light");
                     }}
                     className="fa-solid fa-sun"
                   ></i>

         
                 <ul className="flex">
                   <li className="main-list lang">
                   {t("lang")}
         
                     <ul className="lang-box">
                       <li
                         onClick={() => {
                           i18n.changeLanguage("ar");
                         }}
                         dir="rtl"
                       >
                         <p> العربية</p>
                         {i18n.language === "ar" && (
                           <i className="fa-solid fa-check"></i>
                         )}
                       </li>
         
                       <li
                         onClick={() => {
                           i18n.changeLanguage("en");
                         }}
                       >
                         <p>English</p>
         
                         {i18n.language === "en" && (
                           <i className="fa-solid fa-check"></i>
                         )}
                       </li>
                   
                     </ul>
                   </li>
         
                   {!user && (
                     <li className="main-list">
                       <NavLink className="main-link"  to="/signin">
                       {  t("sign")  }
                       </NavLink>
                     </li>
                   )}
         
                   {!user && (
                     <li className="main-list">
                       <NavLink className="main-link" to="/signup">
                       {  t("up")  }
                       </NavLink>
                     </li>
                   )}
         
                   {user && (
                     <li
                       onClick={() => {
                         signOut(auth)
                           .then(() => {
                             console.log("Sign-out successful.");
                           })
                           .catch((error) => {
                             // An error happened.
                           });
                       }}
                       className="main-list"
                     >
         
         
                       <button className="main-link signout">
                         {  t("out")  }
                       </button>
         
         
         
         
                     </li>
                   )}
         
                
         
                   {user && (
                     <li className="main-list">
                       <NavLink className="main-link" to="/profile">
                       {t("account")}
                       </NavLink>
                     </li>
                   )}
                 </ul>
               </header>
               )}


{i18n.language === "ar" && (
                 <header dir="rtl" className="hide-when-mobile ahmed " >
                 <h1>
                   <Link to="/">  {t("createtasks")}</Link>
                 </h1>
         
                 <i
                   onClick={() => {
                     toggleTheme(theme === "Light" ? "Dark" : "Light");
                   }}
                   className="fa-solid fa-moon"
                 ></i>
                 <i
                   onClick={() => {
                     toggleTheme(theme === "Light" ? "Dark" : "Light");
                   }}
                   className="fa-solid fa-sun"
                 ></i>
         
                 <ul className="flex" >
                   <li className="main-list lang">
                   {t("lang")}
         
                     <ul className="lang-box">
                       <li
                         onClick={() => {
                           i18n.changeLanguage("ar");
                         }}
                         dir="rtl"
                       >
                         <p> العربية</p>
                         {i18n.language === "ar" && (
                           <i className="fa-solid fa-check"></i>
                         )}
                       </li>
         
                       <li
                         onClick={() => {
                           i18n.changeLanguage("en");
                         }}
                       >
                         <p>English</p>
         
                         {i18n.language === "en" && (
                           <i className="fa-solid fa-check"></i>
                         )}
                       </li>
                   
                     </ul>
                   </li>
         
                   {!user && (
                     <li className="main-list" style={{}}>
                       <NavLink className="main-link" to="/signin">
                       {  t("sign")  }
                       </NavLink>
                     </li>
                   )}
         
                   {!user && (
                     <li className="main-list">
                       <NavLink className="main-link" to="/signup">
                       {  t("up")  }
                       </NavLink>
                     </li>
                   )}
         
                   {user && (
                     <li
                       onClick={() => {
                         signOut(auth)
                           .then(() => {
                             console.log("Sign-out successful.");
                           })
                           .catch((error) => {
                             // An error happened.
                           });
                       }}
                       className="main-list"
                     >
         
         
                       <button className="main-link signout">
                         {  t("out")  }
                       </button>
         
         
         
         
                     </li>
                   )}
         
              
         
                   {user && (
                     <li className="main-list">
                       <NavLink className="main-link" to="/profile">
                       {t("account")}
                       </NavLink>
                     </li>
                   )}
                 </ul>
               </header>
               )}

    </div>
  );
};

export default Header;
