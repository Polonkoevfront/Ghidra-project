import { Button, Text } from '../../shared/ui';
import cls from './HomeBlock.module.scss';

import mask from '../../shared/assets/png/mask.png';
import arrow from '../../shared/assets/svg/arrow_right.svg';

export const HomeBlock = () => {
  return (
    <div className={cls.home_block}>
      <div className={cls.text_bar}>
        <div className={cls.title}>
          <Text as="h1" fz={46}>
            <span>Dive</span> Into The Depths
          </Text>
          <Text fz={46}>
            Of <span>Virtual Reatily</span>
          </Text>
        </div>
        <div className={cls.desc}>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, nisl
          </span>
          <span>sed do eiusmod tempor incididunt ut labore et dolore </span>
          <span>tincidunt eget. Lectus mauris eros in vitae .</span>
        </div>
        <div className={cls.btns_bar}>
          <Button width={214}>BUILD YOUR WORLD</Button>
          <img className={cls.arrow_icon} src={arrow} alt="" />
        </div>
      </div>
      <img src={mask} alt="" />
    </div>
  );
};
