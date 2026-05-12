import cls from './Quetions.module.scss';
import { Text } from '../../shared/ui';
import { useState } from 'react';

import arrow from '../../shared/assets/svg/big_arrow.svg';
import arrow2 from '../../shared/assets/svg/shape.svg';
import left from '../../shared/assets/svg/chevron_left.svg';
import right from '../../shared/assets/svg/chevron_right.svg';

const skillsInfo = [
  { num: '01', title: '3D Conception', title2: '& Design' },
  { num: '02', title: 'Interaction', title2: 'Design' },
  { num: '03', title: 'VR World', title2: 'User Testing' },
  { num: '04', title: 'Hydra VR', title2: 'Deploy' },
];

export const Quetions = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const nextSlide = () => {
    setCurrentQuestion((prev) =>
      prev === skillsInfo.length - 1 ? 0 : prev + 1,
    );
  };

  const prevSlide = () => {
    setCurrentQuestion((prev) =>
      prev === 0 ? skillsInfo.length - 1 : prev - 1,
    );
  };

  return (
    <section className={cls.quetions}>
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
        <div onClick={prevSlide} className={cls.arrow_chevron}>
          <img src={left} alt="" />
        </div>
        {skillsInfo.map((item, key) => (
          <div
            key={key}
            className={`${cls.skill_item} ${currentQuestion === key ? cls.active : ''}`}
          >
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
        <div onClick={nextSlide} className={cls.arrow_chevron}>
          <img src={right} alt="" />
        </div>
      </div>
    </section>
  );
};
