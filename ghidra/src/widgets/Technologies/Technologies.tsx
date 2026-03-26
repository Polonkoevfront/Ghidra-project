import { Text } from "../../shared/ui";
import cls from "./Technologies.module.scss";

import unity_icon from "../../shared/assets/png/unity_icon.png";
import oculus_icon from "../../shared/assets/png/oculus_icon.png";
import vive_icon from "../../shared/assets/png/vive_icon.png";
import unreal_icon from "../../shared/assets/png/unreal_icon.png";
import arrow from "../../shared/assets/svg/arrow_down.svg";

export const Technologies = () => {
  return (
    <section className={cls.technologies}>
      <div className={cls.technologies_first_bar}>
        <Text as="h1">TECHNOLOGIES & HARDWARE</Text>
        <Text as="h2" fw={300}>
          USED BY HYDRA VR.
        </Text>

        <div className={cls.circle}>
          <img src={arrow} alt="" />
        </div>
      </div>
      <div className={cls.technologies_companies}>
        <img src={unreal_icon} alt="" />
        <img src={unity_icon} alt="" />
        <img src={oculus_icon} alt="" />
        <img src={vive_icon} alt="" />
      </div>
    </section>
  );
};
