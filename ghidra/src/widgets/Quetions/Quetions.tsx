import { Text } from "../../shared/ui";
import cls from "./Quetions.module.scss";

import arrow from "../../shared/assets/svg/big_arrow.svg";
import arrow2 from "../../shared/assets/svg/shape.svg";

const skillsInfo = [
  { num: "01", title: "3D Conception", title2: "& Design" },
  { num: "02", title: "Interaction", title2: "Design" },
  { num: "03", title: "VR World", title2: "User Testing" },
  { num: "04", title: "Hydra VR", title2: "Deploy" },
];

export const Quetions = () => {
  return (
    <section>
      <div className={cls.quetions_head}>
        <div className={cls.quetions_title}>
          <Text as="h1">HOW WE BUILD</Text>
          <div>
            <Text as="h2" fw={300}>
              WITH HYDRA VR
            </Text>
            <img src={arrow} alt="" />
          </div>
        </div>

        <div className={cls.quetions_desc}>
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

      <div className={cls.skills_block}>
        {skillsInfo.map((item, key) => (
          <div className={cls.skill_item} key={key}>
            <div className={cls.circle}>
              <p>{item.num}</p>
            </div>
            <div className={cls.skill_title}>
              <img src={arrow2} alt="" />

              <div>
                <span>{item.title}</span>
                <span>{item.title2}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
