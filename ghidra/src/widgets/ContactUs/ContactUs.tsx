import { Text } from '../../shared/ui';
import cls from './ContactUs.module.scss';

import location from '../../shared/assets/svg/location.svg';
import mail from '../../shared/assets/svg/mail.svg';
import phone from '../../shared/assets/svg/phone.svg';
import arrow from '../../shared/assets/svg/arrow_left2.svg';
import arrow2 from '../../shared/assets/svg/arrow_right2.svg';
import { useState } from 'react';

const contacts = [
  {
    title: 'Pay Us a Visit',
    contactInfo: 'Union St, Seattle, WA 98101, \n United States',
    image: location,
  },
  {
    title: 'Give Us a Call',
    contactInfo: '(110) 1111-1010',
    image: phone,
  },
  {
    title: 'Send Us a Message',
    contactInfo: 'Contact@HydraVTech.com',
    image: mail,
  },
];

export const ContactUs = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === contacts.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? contacts.length - 1 : prev - 1));
  };

  return (
    <div className={cls.contact_bar}>
      <img onClick={prevSlide} className={cls.arrow} src={arrow} alt="" />
      {contacts.map((item, i) => (
        <div
          key={item.title}
          className={`${cls.item_wrapper} ${i === currentIndex ? cls.active : ''}`}
        >
          {i === 1 && <hr />}
          <div>
            <img src={item.image} alt="" />
            <div className={cls.contact_info}>
              <Text as="h6" fz={24}>
                {item.title}
              </Text>
              <span>{item.contactInfo}</span>
            </div>
          </div>
          {i === 1 && <hr />}
        </div>
      ))}
      <img onClick={nextSlide} className={cls.arrow} src={arrow2} alt="" />
    </div>
  );
};
