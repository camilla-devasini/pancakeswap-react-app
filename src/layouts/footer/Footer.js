import React,{ useState, useEffect } from "react";
import "./style/darkMode.css"
import "./style/footer.scss";
import twitter from "../../assets/images/twitter.svg";
import instagram from "../../assets/images/instagram.svg";
import discord from "../../assets/images/discord.svg";
import telegram from "../../assets/images/telegram.svg";
import reddit from "../../assets/images/reddit.svg";
import github from "../../assets/images/github.svg";
import medium from "../../assets/images/medium.svg";
import iconBunny from "../../assets/images/iconBunny.svg"
import LanguagePicker from "../header/LanguagePicker"
import { languageListObj } from "../../components/helpers/languageListObj";
import TradeButton from "../header/TradeButton";
import MainButton from "../../components/UI/MainButton";


const Footer = (props) => {
  
 
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* col 1 */}
          <div className="col">
            <ul className="list">
              <li className="about">ABOUT</li>
              <li className="contact">Contact</li>
              <li>Brand</li>
              <li>Blog</li>
              <li>Community</li>
              <li>Litepaper</li>
              <li>-</li>
              <li>Online Store</li>
            </ul>
          </div>
          {/* col 2  */}
          <div className="col">
            <ul className="list">
              <li className="help">HELP</li>
              <li>Customer Support</li>
              <li>Troubleshooting</li>
              <li>Guides</li>
            </ul>
          </div>
          {/* col 3 */}
          <div className="col">
            <ul className="list">
              <li className="developers">DEVELOPERS</li>
              <li>Github</li>
              <li>Documentation</li>
              <li>Bug Bounty</li>
              <li>Audits</li>
              <li>Careers</li>
            </ul>
          </div>
          {/* col 4 */}
          <div className="col">
            <img src={iconBunny} alt="" style={{ width: 150 }} />
          </div>
        </div>

        <div className="icon">
          <img src={twitter} alt="icon" />
          <img src={telegram} alt="icon" />
          <img src={reddit} alt="icon" />
          <img src={instagram} alt="icon" />
          <img src={github} alt="icon" />
          <img src={discord} alt="icon" />
          <img src={medium} alt="icon" />
        </div>
        <div className="cont-down">
        <div className="down">
        <input
        className="switch-checkbox"
        id={`switch-new`}
        type="checkbox"
        onClick={props.toggleTheme}
       
      />
      <label
        className="switch-label"
        htmlFor={`switch-new`}
        
      >
        <span className={`switch-button`} />
      </label>
      <LanguagePicker langList={languageListObj}/>
       </div>
       <div className="down">
       {window.innerWidth > 851 ? <TradeButton value="$4.443"/>: null}
       {window.innerWidth > 851 ? <MainButton label={"buy cake ->"} />  : <MainButton label="Connect"/>  }
    
     
       </div>

      </div>
      </div>
    </div>
  );
};

export default Footer;
