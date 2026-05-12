import { Button, Form, Text } from '../../shared/ui';
import cls from './RegisterForm.module.scss';

export const RegisterForm = () => {
  return (
    <Form className={cls.register_bar}>
      <div className={cls.register_title}>
        <Text as="h1">JOIN HYDRA</Text>
        <hr />
        <Text as="h2" fw={300}>
          Let’s Build Your VR Experience
        </Text>
      </div>
      <div className={cls.input_block}>
        <div>
          <label>
            <input type="firstname" placeholder="First Name" />
          </label>
          <label className={cls.input2} htmlFor="">
            <input type="lastname" placeholder="Last Name" />
          </label>
        </div>

        <div>
          <label htmlFor="">
            <input type="email" placeholder="Email" />
          </label>
          <label className={cls.input2} htmlFor="">
            <input type="phone" placeholder="Phone Number" />
          </label>
        </div>

        <div className={cls.input_bar}>
          <label className={cls.input_item} htmlFor="">
            <input type="subject" placeholder="Subject" />
          </label>
          <label className={cls.input_item2} htmlFor="">
            <textarea placeholder="Tell Us Something..."></textarea>
          </label>
        </div>

        <Button width={214}>SEND TO HYDRA</Button>
      </div>
    </Form>
  );
};
