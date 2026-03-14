import { Button, Text } from "../../shared/ui";
import cls from "./Introduction.module.scss";

import mask from "../../shared/assets/png/mask2.png";
import arrow from "../../shared/assets/svg/big_arrow.svg";

export const Introduction = () => {
  return (
    <section>
      <div className={cls.head}>
        <div className={cls.head_title}>
          <Text as="h1">INTRODUCTION</Text>
          <div>
            <Text as="h2" fw={300}>
              TO HYDRA VR
            </Text>
            <img src={arrow} alt="" />
          </div>
        </div>
        <div className={cls.head_desc}>
          <span>
            Vitae sapien pellentesque habitant morbi tristique senectus et netus
            et. Feugiat
          </span>
          <span>
            nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris
            commodo
          </span>
          <span>
            quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet
            tellus. Ornare
          </span>
          <span>
            lectus sit amet est placerat in. Lectus magna fringilla urna
            porttitor rhoncus vitae.
          </span>
        </div>
      </div>
      <div className={cls.about_bar}>
        <img src={mask} alt="" />

        <div className={cls.about_text_container}>
          <div className={cls.about_title}>
            <Text as="h3">ABOUT</Text>
            <Text as="h4" fw={300}>
              HYDRA VR
            </Text>
          </div>

          <div className={cls.about_desc}>
            <span>
              Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus
              mattis rhoncus
            </span>
            <span>
              urna neque viverra justo. Vivamus at augue eget arcu dictum.
              Ultrices gravida
            </span>
            <span>
              dictum fusce ut placerat orci. Aenean et tortor at risus viverra
              adipiscing at in.
            </span>
            <span>
              Mattis aliquam faucibus purus in massa. Est placerat in egestas
              erat imperdiet
            </span>
            <span>
              sed. Consequat semper viverra nam libero justo laoreet sit amet.
              Aliquam
            </span>
            <span>
              etiam erat velit scelerisque in dictum non consectetur a. Laoreet
              sit amet
            </span>
            <span>
              cursus sit amet. Vel eros donec ac odio tempor orci dapibus. Sem
              nulla pha
            </span>
            <span>
              retra diam sit amet nisl suscipit adipiscing bibendum. Leo a diam
              sollicitudi
            </span>
            <span>n tempor.</span>
          </div>

          <Button width={214}>LET'S GET IN TOUCH</Button>
        </div>
      </div>
    </section>
  );
};
