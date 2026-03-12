import cls from "./Footer.module.scss";

import logo from "../../shared/assets/png/logo_nav3.png";
import facebook from "../../shared/assets/svg/facebook.svg";
import twitter from "../../shared/assets/svg/twitter.svg";
import linkedin from "../../shared/assets/svg/linkedin.svg";
import youtube from "../../shared/assets/svg/youtube.svg";
import instagram from "../../shared/assets/svg/instagram.svg";
import pinterest from "../../shared/assets/svg/pinterest.svg";
import { Button } from "../../shared/ui";

export const Footer = () => {
  return (
    <div className={cls.footer}>
      <div className={cls.footer_pages_bar}>
        <img src={logo} alt="" />
        <hr />
        <ul>
          <li>ABOUT</li>
          <li>SERVICES</li>
          <li>TECHNOLOGIES</li>
          <li>HOW TO</li>
          <li>JOIN HYDRA</li>
        </ul>
        <hr />
        <ul>
          <li>F.A.Q</li>
          <li>SITEMAP</li>
          <li>CONDITIONS</li>
          <li>LICENSES</li>
        </ul>
        <hr />
        <div className={cls.socialize_block}>
          <span>SOCIALIZE WITH HYDRA</span>
          <div className={cls.network_icons}>
            <img src={facebook} alt="" />
            <img src={twitter} alt="" />
            <img src={linkedin} alt="" />
            <img src={youtube} alt="" />
            <img src={instagram} alt="" />
            <img src={pinterest} alt="" />
          </div>
          <Button width={214}>BUILD YOUR WORLD</Button>
        </div>
      </div>
      <div className={cls.date_bar}>
        <hr />
        <span>
          2023 © HYDRA LANDING PAGE - BY ZINE. E. FALOUTI - ALL RIGHTS RESERVED
        </span>
      </div>
    </div>
  );
};
