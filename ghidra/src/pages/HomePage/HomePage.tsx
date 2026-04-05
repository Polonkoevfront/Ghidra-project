import cls from "./HomePage.module.scss";
import {
  CardList,
  ContactUs,
  Footer,
  HomeBlock,
  Introduction,
  NavBar,
  Quetions,
  RegisterForm,
  Technologies,
} from "../../widgets";

export const HomePage = () => {
  return (
    <div className={cls.home}>
      <NavBar />

      <div className={cls.wrap}>
        <HomeBlock />

        <ContactUs />

        <Introduction />

        <CardList />

        <Technologies />

        <Quetions />

        <RegisterForm />
      </div>

      <Footer />
    </div>
  );
};
