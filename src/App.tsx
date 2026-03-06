// import DateComponent from "./components/DateComponent/DateComponent";
import DayPlan from "./components/DayPlan/DayPlan";
import DressCodeComponent from "./components/DressCodeComponent/DressCodeComponent";
import HeroComponent from "./components/HeroComponent/HeroComponent";
import ImagesComponent from "./components/ImagesComponent/ImagesComponent";
import MainText from "./components/MainText/MainText";
import CountDown from "./components/CountDown/CountDown";

function App() {
  return (
    <>
      <HeroComponent />
      <MainText />
      <ImagesComponent />
      <DayPlan />
      <DressCodeComponent />
      <CountDown />
      {/* <DateComponent /> */}
    </>
  );
}

export default App;
