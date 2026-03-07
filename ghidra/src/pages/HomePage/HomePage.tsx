import { NavBar } from "../../widgets";
import cls from "./HomePage.module.scss";

export const HomePage = () => {
  return (
    <div className={cls.home}>
      <NavBar />
      <div></div>
    </div>
  );
};
