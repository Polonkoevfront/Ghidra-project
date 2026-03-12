import { Button, Text } from "../../../../shared/ui";
import cls from "./CardItem.module.scss";

import card_img from "../../../../shared/assets/png/card_img.png";
import { FC } from "react";

interface CardProps {
  title: string;
  description: string;
  description2: string;
  description3: string;
  imageUrl: string;
}

export const CardItem: FC<CardProps> = (props) => {
  const { title, description, description2, description3, imageUrl } = props;
  return (
    <article>
      <div className={cls.card_head}>
        <img src={imageUrl} alt="" />
        <Text as="h6" fz={24} className={cls.card_title}>
          {title}
        </Text>
        <hr />
      </div>
      <div className={cls.short_bar}>
        <div>
          <span>{description}</span>
          <span>{description2}</span>
          <span>{description3}</span>
        </div>
        <Button>TRY IT NOW</Button>
      </div>
    </article>
  );
};
