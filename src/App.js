import "./App.css";
// import OutsideCallButton from "./components/OutsideCallButton";
import { useState } from "react";
import InsideCallButtonContainer from "./components/InsideCallButtonContainer";
import OutsideCallButton from "./components/OutsideCallButton";
import INITIAL_ElEVATOR_STATE from "./data/dummy-data";

function App() {
  const [elevator, setElevator] = useState(INITIAL_ElEVATOR_STATE);
  const [isCalled, setIsCalled] = useState(false);
  const [currentFloor, setCurrentFloor] = useState(0);
  const [currentDirection, setCurrentDirection] = useState("idle");
  const [insideQue, setInsideQue] = useState([]);
  const [upQue, setUpQue] = useState([]);
  const [downQue, setDownQue] = useState([]);
  const OUTSIDE_LIGHTS_INITIAL_STATE = [];
  for (let i = 0; i < elevator.length; i += 1) {
    if (i === 0 || i === elevator.length - 1) {
      OUTSIDE_LIGHTS_INITIAL_STATE.push(false);
    } else {
      OUTSIDE_LIGHTS_INITIAL_STATE.push([false, false]);
    }
  }
  const [
    outsideDirectionalIndicatorLights,
    setOutsideDirecionalIndicatorLights,
  ] = useState(OUTSIDE_LIGHTS_INITIAL_STATE);
  const INSIDE_LIGHTS_INITIAL_STATE = Array(elevator.length).fill(false);
  const [insideIndicatorLights, setInsideIndicatorLights] = useState(
    INSIDE_LIGHTS_INITIAL_STATE
  );

  const callFloor = (floorNum, direction) => {
    // if the elevator is already called then just update the state of the elevator
    if (isCalled) {
      addFloorCall(floorNum, direction);
      console.log(`elevator already called, updating elevator call state`);
    } else {
      // if the elevator is not called
      setCurrentDirection(direction);
      setIsCalled(true);
      addFloorCall(floorNum, direction);
      startElevator();
      console.log("elevator first call");
    }
  };

  const addFloorCall = (floorNum, direction) => {
    switch (direction) {
      case "up":
        if (upQue.includes(floorNum)) return;
        setUpQue((prevState) => [...prevState, floorNum]);
        break;
      case "down":
        if (downQue.includes(floorNum)) return;
        setDownQue((prevState) => [...prevState, floorNum]);
        break;
      case "inside":
        if (insideQue.includes(floorNum)) return;
        setInsideQue((prevState) => [...prevState, floorNum]);
        break;
      default:
        console.log("Add floor breakcase, what's wrong with the switch?!");
        break;
    }
  };

  const moveOneFloorUp = () => {};
  const moveOneFloorDown = () => {};
  const removeCallFromQue = (que, currentFloor, setFunction) => {
    const indexCurrentFloor = que.indexOf(currentFloor);
    const newQue = [...que];
    newQue.splice(indexCurrentFloor, 1);
    setFunction(newQue);
  };

  /**
  while insideQue.length || outsideUp.length || outsideDown.length
    is the elevator called on this floor in our direction?
      open doors
      close doors
      is the elevator called on this floor from the inside?
    is the elevator called on this floor from the inside?
    go to the next floor in this direction
  */

  const startElevator = () => {
    while (upQue.length || downQue.length || insideQue.length) {
      switch (currentDirection) {
        case "up":
          if (upQue.includes(currentFloor)) {
            removeCallFromQue(upQue, currentFloor, setUpQue);
            // open doors()
            // close doors()
            // await an internal call before contiueing ?
            if (insideQue.includes(currentFloor)) {
              removeCallFromQue(insideQue, currentFloor, setInsideQue);
            }
            setCurrentFloor((currentFloor) => currentFloor + 1);
          } else if (insideQue.includes(currentFloor)) {
            // open doors()
            removeCallFromQue(insideQue, currentFloor, setInsideQue);
            // close doors()
          }
          if (upQue.length === 0) setCurrentDirection("down");
          break;
        case "down":
          if (downQue.includes(currentFloor)) {
            removeCallFromQue(downQue, currentFloor, setUpQue);
          }
          setCurrentDirection("up");
          break;
        default:
          break;
      }
    }
  };

  return (
    <div className="App">
      <h1>{currentFloor}</h1>
      <div className="bottom-container">
        <div className="floor-button-container">
          {elevator.map((floor, i) => (
            <OutsideCallButton
              indicatorLights={outsideDirectionalIndicatorLights}
              toggleIndicatorLight={setOutsideDirecionalIndicatorLights}
              callFloor={callFloor}
              floorNumber={floor}
              key={i}
              elevatorLength={elevator.length - 1}
            />
          ))}
        </div>
        <div className="inside-call-container">
          <InsideCallButtonContainer
            callFloor={callFloor}
            elevator={elevator}
            indicatorLights={insideIndicatorLights}
            toggleIndicatorLight={setInsideIndicatorLights}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
