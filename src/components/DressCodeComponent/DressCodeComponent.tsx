import css from "./DressCodeComponent.module.css";
import Reveal from "../Reveal/Reveal";
import ColorComponent from "../ColorComponent/ColorComponent";

const DressCodeComponent = () => {
  const colors = [
    { hex: "#FFFFFF", name: "белый" },
    { hex: "#ede8d0", name: "шампань" },
    { hex: "#ffffe3", name: "пудровый" },
    { hex: "#d8cfc4", name: "беж" },
    { hex: "#c1c6c8", name: "светло-серый" },
    { hex: "#9ca897", name: "шалфейный" },
    { hex: "#b0c4c9", name: "пыльно-голубой" },
  ];
  return (
    <Reveal>
      <div className={css.dress_first_div}>
        <div className={css.dress_second_div}>
          <h2>✨ Dress code ✨</h2>
        </div>
        <img src="/bow.gif" alt="bow" />
        <div className={css.div_color}>
          {colors.map((colorObj) => (
            <div key={colorObj.hex} style={{ marginBottom: "8px" }}>
              <ColorComponent color={colorObj.hex} name={colorObj.name} />
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
};

export default DressCodeComponent;
