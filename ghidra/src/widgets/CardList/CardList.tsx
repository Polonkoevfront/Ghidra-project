import { CardItem } from "../../entities/card/ui";
import cls from "./CardList.module.scss";
import { Text } from "../../shared/ui";

import card_img from "../../shared/assets/png/card_img.png";
import card_img2 from "../../shared/assets/png/card_img2.png";
import card_img3 from "../../shared/assets/png/card_img3.png";
import card_img4 from "../../shared/assets/png/card_img4.png";
import big_arrow from "../../shared/assets/svg/big_arrow.svg";

const cardsInfo = [
  {
    id: 1,
    title: "SIMULATION",
    desc: "Vitae sapien pellentesque habitant morbi",
    desc2: "nunc. Viverra aliquet  porttitor rhoncus ",
    desc3: "libero justo laoreet sit amet vitae.",
    imageUrl: card_img,
  },
  {
    id: 2,
    title: "EDUCATION",
    desc: "Vitae sapien pellentesque habitant morbi",
    desc2: "nunc. Viverra aliquet  porttitor rhoncus ",
    desc3: "libero justo laoreet sit amet vitae.",
    imageUrl: card_img2,
  },
  {
    id: 3,
    title: "SELF-CARE",
    desc: "Vitae sapien pellentesque habitant morbi",
    desc2: "nunc. Viverra aliquet  porttitor rhoncus ",
    desc3: "libero justo laoreet sit amet vitae.",
    imageUrl: card_img3,
  },
  {
    id: 4,
    title: "OUTDOOR",
    desc: "Vitae sapien pellentesque habitant morbi",
    desc2: "nunc. Viverra aliquet  porttitor rhoncus ",
    desc3: "libero justo laoreet sit amet vitae.",
    imageUrl: card_img4,
  },
];

export const CardList = () => {
  return (
    <div className={cls.cards_bar}>
      <div className={cls.list_head}>
        <div className={cls.list_title}>
          <Text>WHY BUILD</Text>
          <div>
            <Text fw={300}>WHY HYDRA?</Text>
            <img src={big_arrow} alt="" />
          </div>
        </div>
        <div className={cls.list_desc}>
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
      <div className={cls.cards_list}>
        {cardsInfo.map((item) => (
          <CardItem
            key={item.id}
            title={item.title}
            description={item.desc}
            description2={item.desc2}
            description3={item.desc3}
            imageUrl={item.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};
