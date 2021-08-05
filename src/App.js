import "./App.css";
import CallButton from "/Users/mattortner/Documents/code/elevator/src/components/CallButton";
import { useState } from "react";

const INITIAL_STATE = [
  { floor: 0, on: true },
  { floor: 1, on: false },
  { floor: 2, on: false },
  { floor: 3, on: false },
];

function App() {
  const [elevator, setElevator] = useState(INITIAL_STATE);
  const [upCallQue, setUpCallQue] = useState([]);
  const [downCallQue, setDownCallQue] = useState([]);
  const [currentPosition, setCurrentPosition] = useState(0);
  const [isCalled, setIsCalled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  /**
   *
   *
   *
   */

  const call = (setQue, direction, floor) => {
    if (direction === "up") {
      if (!upCallQue.includes(floor)) {
        setQue([...upCallQue, floor]);
      }
    } else if (direction === "down") {
      if (!downCallQue.includes(floor)) {
        setQue([...downCallQue, floor]);
      }
    } else {
      console.error("else statement of call...");
    }
    setIsCalled(true);
    activateElevator(floor);
  };

  const activateElevator = (floor) => {
    console.log(typeof floor, "floor");
    console.log(floor, "floor");
    console.log(typeof currentPosition, "currentP");
    console.log(currentPosition, "currentP");

    switch (true) {
      case currentPosition:
        openDoor();
        break;
      case floor > currentPosition:
        console.log("raising elevator");
        raiseElevator();
        break;
      case floor < currentPosition:
        console.log("lowering elevator");
        lowerElevator();
        break;
      default:
        console.log("elevator was not activated...");
        console.log(floor, currentPosition);
        break;
    }
    // return activateElevator(floor);
  };

  const raiseElevator = (floor) => {
    let newElevator = [
      ...elevator,
      (elevator[floor].on = false),
      (elevator[floor + 1].on = true),
    ];
    setElevator(newElevator);
    setCurrentPosition(currentPosition + 1);
  };

  const lowerElevator = () => {
    //
  };

  const openDoor = () => {
    console.log("doorOpen");
    setIsOpen(true);
  };
  // const closeDoor = () => setIsOpen(false);

  const safetySensorActivation = () => {
    console.log("sensor activated");
    openDoor();
  };

  // const endRide = () => {
  //   setIsCalled(false);
  //   closeDoor();
  // };

  return (
    <div className="App">
      <h1 className="floor-indicator">{currentPosition}</h1>
      <div className="bottom-container">
        <div className="button-container">
          {elevator.map((floor, i) => (
            <CallButton
              on={floor.on}
              call={call}
              floor={floor.floor}
              setUpCallQue={setUpCallQue}
              setDownCallQue={setDownCallQue}
              isCalled={isCalled}
              key={i}
            />
          ))}
        </div>
        <div className="animation-container" onClick={safetySensorActivation}>
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
  );
}

export default App;
