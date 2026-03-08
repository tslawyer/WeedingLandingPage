import css from "./DressCodeComponent.module.css";
import Reveal from "../Reveal/Reveal";
import ColorComponent from "../ColorComponent/ColorComponent";

const DressCodeComponent = () => {
  return (
    <Reveal>
      <div className={css.dress_first_div}>
        <div className={css.dress_second_div}>
          <h2>Будем рады нарядам в цветах нашей свадьбы</h2>
        </div>
        <img src="/bow.gif" alt="bow" />
        <div className={css.div_color}>
          <ColorComponent color={"#FFFFFF"} />
          <ColorComponent color={"#ede8d0"} />
          <ColorComponent color={"#ffffe3"} />
          <ColorComponent color={"#ffb2d0"} />
          <ColorComponent color={"#F7E7CE"} />
          <ColorComponent color={"chocolate"} />
          <ColorComponent color={"#F3C064"} />
        </div>
      </div>
    </Reveal>
  );
};

export default DressCodeComponent;
