import "./App.css";
import { useState } from "react";
import InsideCallButtonContainer from "./components/InsideCallButtonContainer";
import OutsideCallButton from "./components/OutsideCallButton";
import { ELEVATOR_STATE } from "./constants";

function App() {
  const floors = ["B", 1, 2, 3, 4];
  const numberOfFloors = floors.length;
  const travelTime = 1000;

  const [currentDirection, setCurrentDirection] = useState(ELEVATOR_STATE.IDLE);
  const [currentFloorIndex, setCurrentFloorIndex] = useState(1);
  const [upQueue, setUpQueue] = useState([]);
  const [downQueue, setDownQueue] = useState([]);

  const callElevator = (callDirection, index) => {
    const moveDirection =
      currentFloorIndex > index ? ELEVATOR_STATE.DOWN : ELEVATOR_STATE.UP;
    const delta = {
      [ELEVATOR_STATE.DOWN]: -1,
      [ELEVATOR_STATE.UP]: 1,
    }[moveDirection];

    setCurrentDirection(moveDirection);
    const moveElevator = (nextFloorIndex) => {
      setTimeout(() => {
        setCurrentFloorIndex(nextFloorIndex);
        if (nextFloorIndex === index) {
          setCurrentDirection(ELEVATOR_STATE.IDLE);
        } else {
          moveElevator(nextFloorIndex + delta);
        }
      }, travelTime);
    };

    moveElevator(currentFloorIndex + delta);
  };

  return (
    <div className="App">
      <h1>
        {floors[currentFloorIndex]} {currentDirection}
      </h1>
      <div className="bottom-container">
        <div className="floor-button-container">
          {floors.map((floor, index) => (
            <OutsideCallButton
              callElevator={callElevator}
              floorName={floor}
              index={index}
              numberOfFloors={numberOfFloors}
              key={`FLOOR-${floor}`}
            />
          ))}
        </div>
        <div className="inside-call-container"></div>
      </div>
    </div>
  );
}

export default App;
