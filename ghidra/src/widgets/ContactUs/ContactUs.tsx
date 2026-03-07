import { Text } from "../../shared/ui";
import cls from "./ContactUs.module.scss";

import location from "../../shared/assets/svg/location.svg";
import mail from "../../shared/assets/svg/mail.svg";
import phone from "../../shared/assets/svg/phone.svg";

const contacts = [
  {
    title: "Pay Us a Visit",
    contactInfo: "Union St, Seattle, WA 98101, United States",
    image: location,
  },
  { title: "Give Us a Call", contactInfo: "(110) 1111-1010", image: phone },
  {
    title: "Send Us a Message",
    contactInfo: "Contact@HydraVTech.com",
    image: mail,
  },
];

export const ContactUs = () => {
  return (
    <div className={cls.contact_bar}>
      {contacts.map((item, i) => (
        <>
          {i === 1 && <hr />}
          <div>
            <img src={item.image} alt="" />
            <div className={cls.contact_info}>
              <Text className={cls.contact_title} as="h6" fz={24}>
                {item.title}
              </Text>
              <span>{item.contactInfo}</span>
            </div>
          </div>
          {i === 1 && <hr />}
        </>
      ))}
    </div>
  );
};
