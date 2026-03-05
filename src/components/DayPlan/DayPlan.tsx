import css from "./DayPlan.module.css";
const DayPlan = () => {
  return (
    <div className={css.day_plan}>
      <h2>План дня</h2>
      <p> 14.30 фуршет</p>
      <p>15.00 церемония </p>
      <p>16.00-17.00 фотосессия с гостями </p>
      <p>17.30 ресторан</p>
    </div>
  );
};

export default DayPlan;
