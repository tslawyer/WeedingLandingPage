import css from "./ColorComponent.module.css";

interface Props {
  color: string;
}

const ColorComponent = ({ color }: Props) => {
  return (
    <div
      className={css.circle}
      style={{
        background: color,
      }}
    ></div>
  );
};

export default ColorComponent;
