import "./App.css";
import CallButton from "/Users/mattortner/Documents/code/elevator/src/components/CallButton";
import { useState } from "react";

const INITIAL_STATE = [
  { floor: 0, on: "on" },
  { floor: 1, on: "" },
  { floor: 2, on: "" },
  { floor: 3, on: "" },
];

function App() {
  const [elevator, setElevator] = useState(INITIAL_STATE);
  const [upCallQue, setUpCallQue] = useState([]);
  const [downCallQue, setDownCallQue] = useState([]);
  const [currentPosition, setCurrentPosition] = useState(0);
  const [isInMotion, setIsInMotion] = useState(false);

  const changeFloor = (floor) => {
    elevator[floor].on = "on";
    elevator[currentPosition].on = "";
    setElevator([...elevator]);
    setCurrentPosition(floor);
  };
  // const movingFloors = () => {
  //   // this is what is called to make the elevator to move visually
  // };

  return (
    <div className="App">
      <h1 className="floor-indicator">{currentPosition}</h1>
      <div className="bottom-container">
        <div className="button-container">
          {elevator.map((floor, i) => (
            <CallButton
              downCallQue={downCallQue}
              setDownCallQue={setDownCallQue}
              upCallQue={upCallQue}
              setUpCallQue={setUpCallQue}
              floor={floor.floor}
              on={floor.on}
              key={i}
              changeFloor={changeFloor}
              isInMotion={isInMotion}
              setIsInMotion={setIsInMotion}
            />
          ))}
        </div>
        <div className="animation-container">
          <div className="box">hereIsABox</div>
        </div>
      </div>
    </div>
  );
}

export default App;
