import "./App.css";
import CallButton from "./components/CallButton";
import { useState } from "react";
import ElevatorPanelButton from "./components/ElevatorPanelButton";

const INITIAL_STATE = [
  { floor: 0, on: true },
  { floor: 1, on: false },
  { floor: 2, on: false },
  { floor: 3, on: false },
];

function App() {
  const [elevator, setElevator] = useState(INITIAL_STATE);
  const [callQue, setCallQue] = useState([]);
  const [currentPosition, setCurrentPosition] = useState(0);
  const [isFloorCalled, setIsFloorCalled] = useState([
    false,
    false,
    false,
    false,
  ]);
  const [isPanelSelected, setIsPanelSelected] = useState([
    false,
    false,
    false,
    false,
  ]);
  const [isOpen, setIsOpen] = useState(false);

  const call = (direction, floor) => {
    if (
      callQue.some(
        (call) => call.direction === direction && call.floor === floor
      )
    ) {
      console.log("duplicate call");
    } else {
      setCallQue([...callQue, { direction: direction, floor: floor }]);
      // setIsCalled(true);
      activateElevator(floor);
    }
  };

  const activateElevator = (floor) => {
    if (floor === currentPosition) {
      openDoor();
    } else if (floor > currentPosition) {
      console.log("raising elevator");
      raiseElevator();
    } else if (floor < currentPosition) {
      console.log("lowering elevator");
      lowerElevator();
    } else {
      console.log("elevator was not activated...");
      console.log(floor, currentPosition);
    }
    console.log(`floor`, floor);
    console.log(`currentPosition`, currentPosition);
    // if (floor !== currentPosition) {
    //   activateElevator(floor);
    // }
  };

  const raiseElevator = (floor) => {
    console.log(`elevator - raiseElevator`, elevator);
    console.log(`floor - raiseElevator()`, floor);
    setCurrentPosition(currentPosition + 1);
  };

  const lowerElevator = () => {};

  const openDoor = () => {
    console.log("door opening");
    setIsOpen(true);
    setTimeout(() => {
      closeDoor();
    }, 4000);
  };

  const closeDoor = () => {
    console.log("closing door");
    setIsOpen(false);
    setTimeout(() => {
      console.log("Door closed");
    }, 3000);
  };

  const safetySensorActivation = () => {
    if (isOpen) {
      console.log(
        "DANGER - safety sensor activated please watch for the closing door."
      );
      openDoor();
    } else {
      console.log("door is not open, why is this HAPPENING!!!");
    }
  };

  const panelCall = (floorNumber) => {
    console.log(`elevator`, elevator);
    setCallQue([...callQue, floorNumber]);
  };
  // const endRide = () => {
  //   setIsCalled(false);
  //   closeDoor();
  // };

  return (
    <div className="App">
      <h1 className="floor-indicator">{currentPosition}</h1>
      <h1 className="title">Elevators Are The Future</h1>
      <div className="all-call-container">
        <div className="button-container">
          {elevator.map((floor, i) => (
            <CallButton
              on={floor.on}
              call={call}
              floor={floor.floor}
              key={i}
              isFloorCalled={isFloorCalled[i]}
              setIsFloorCalled={setIsFloorCalled}
            />
          ))}
        </div>
        <div className="bottom-container">
          <div className="elevator-panel">
            <div
              className="safety-sensor-button"
              onClick={safetySensorActivation}
            >
              Stick your leg in the door, so that it doesn't close? <br />
              <br />
              PRESS ME!
            </div>
            {elevator.map((floor, i) => (
              <ElevatorPanelButton
                floorNumber={floor.floor}
                key={i}
                panelCall={panelCall}
                isPanelSelected={isPanelSelected}
                setIsPanelSelected={setIsPanelSelected}
              />
            ))}
          </div>
          <div className="elevator-animation-container">
            <div className="empty 1">empty</div>
            <div className="empty 2">empty</div>
            <div className="empty 3">empty</div>
            <div className="door-container">
              <div className={`${isOpen} left`}>left</div>
              <div className={`${isOpen} right`}>right</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
