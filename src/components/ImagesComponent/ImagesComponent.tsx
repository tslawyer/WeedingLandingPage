import css from "./ImagesComponent.module.css";
import Reveal from "../Reveal/Reveal";

const ImagesComponent = () => {
  return (
    <Reveal>
      <div className={css.images_div}>
        <ul className={css.ul_img}>
          <li>
            <img className={css.image} src="/photo3.jpg" alt="" />
          </li>
          <li>
            <img className={css.image} src="/photo2.jpg" alt="" />
          </li>
          <li>
            <img className={css.image} src="/photo1.jpg" alt="" />
          </li>
        </ul>
      </div>
    </Reveal>
  );
};

export default ImagesComponent;
