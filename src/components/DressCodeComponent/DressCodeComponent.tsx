import css from "./DressCodeComponent.module.css";
import Reveal from "../Reveal/Reveal";

const DressCodeComponent = () => {
  return (
    <Reveal>
      <div className={css.dress_first_div}>
        <div className={css.dress_second_div}>
          <h2>Дресс-код</h2>
          <img src="/bow.gif" alt="bow" />
        </div>
        <p>Белый</p>
        <p>Беж</p>
        <p>Айвори</p>
        <p>Пудровая роза </p>
        <p>Шампань </p>
        <p>Шоколад</p>
        <p>Теплое золото</p>
      </div>
    </Reveal>
  );
};

export default DressCodeComponent;
