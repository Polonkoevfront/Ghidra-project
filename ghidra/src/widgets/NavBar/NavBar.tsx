import { Button } from "../../shared/ui";
import cls from "./NavBar.module.scss";

import logo_nav1 from "../../shared/assets/png/logo_nav1.png";
import logo_nav2 from "../../shared/assets/png/logo_nav2.png";

export const NavBar = () => {
  return (
    <nav className={cls.nav}>
      <div className={cls.logo_bar}>
        <img src={logo_nav1} alt="" />
        <img src={logo_nav2} alt="" />
      </div>
      <div className={cls.pages_nav_bar}>
        <ul>
          <li>ABOUT</li>
          <li>SERVICES</li>
          <li>TECHNOLIGIES</li>
          <li>HOW TO</li>
        </ul>
      </div>
      <div className={cls.buttons_bar}>
        <Button variant="outline">CONTACT US</Button>
        <Button>JOIN HYDRA</Button>
      </div>
    </nav>
  );
};
