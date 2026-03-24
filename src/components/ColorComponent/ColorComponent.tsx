import css from "./ColorComponent.module.css";

interface Props {
  color: string;
  name: string;
}

const ColorComponent = ({ color, name }: Props) => {
  return (
    <>
      <div className={css.color_block}>
        <div
          className={css.circle}
          style={{
            background: color,
          }}
        ></div>
        <p>{name}</p>
      </div>
    </>
  );
};

export default ColorComponent;
