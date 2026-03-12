import cls from "./HomePage.module.scss";
import { Button, Text } from "../../shared/ui";
import { CardList, ContactUs, Footer, NavBar } from "../../widgets";

import mask from "../../shared/assets/png/mask.png";
import arrow_right from "../../shared/assets/svg/arrow_right.svg";

export const HomePage = () => {
  return (
    <div className={cls.home}>
      <NavBar />

      <div className={cls.wrap}>
        <div className={cls.main_bar}>
          <div className={cls.main_container}>
            <div>
              <Text className={cls.hydra_title} as="h1" fz={46}>
                <span>Dive</span> Into The Depths
              </Text>
              <Text className={cls.hydra_title2} as="h2" fz={40}>
                Of <span>Virtual Reality</span>
              </Text>
            </div>
            <div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </p>
              <p>sed do eiusmod tempor incididunt ut labore et dolore</p>
              <p>nisl tincidunt eget. Lectus mauris eros in vitae .</p>
            </div>
            <div>
              <Button width={214}>BUILD YOUR WORLD</Button>
              <img src={arrow_right} alt="" />
            </div>
          </div>
          <img src={mask} alt="" />
        </div>

        <ContactUs />

        <CardList />
      </div>

      <Footer />
    </div>
  );
};
