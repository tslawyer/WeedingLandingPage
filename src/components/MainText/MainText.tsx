import css from "./MainText.module.css";

const MainText = () => {
  return (
    <div className={css.main_div}>
      <h2 className={css.title_main}>Дорогие гости</h2>
      <p className={css.title_text}>
        Приглашаем вас стать частью самого важного события в нашей жизни —
        рождения нашей семьи. Разделите с нами этот день, полный света, счастья
        и любви.
      </p>
    </div>
  );
};

export default MainText;
