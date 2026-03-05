import css from "./DressCodeComponent.module.css";

const DressCodeComponent = () => {
  return (
    <div className={css.dress_first_div}>
      <div className={css.dress_second_div}>
        <h2>Дресс-код</h2>
        <img src="/bow.gif" alt="bow" />
      </div>
      <p>Белый</p>
      <p>Беж</p>
      <p>Айвори</p>
      <p>Пудовая роза </p>
      <p>Шампань </p>
      <p>Шоколад</p>
      <p>Теплое золото</p>
    </div>
  );
};

export default DressCodeComponent;
