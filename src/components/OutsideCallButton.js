import React from "react";
import { ELEVATOR_STATE } from "../constants";

const OutsideCallButton = ({
  index,
  floorName,
  numberOfFloors,
  callElevator,
}) => {
  const isBottomFloor = index === 0;
  const isTopFloor = index === numberOfFloors - 1;

  const up = () => {
    callElevator(ELEVATOR_STATE.UP, index);
  };
  const down = () => {
    callElevator(ELEVATOR_STATE.DOWN, index);
  };

  return (
    <div>
      {floorName}
      {!isTopFloor && <button onClick={up}>Up</button>}
      {!isBottomFloor && <button onClick={down}>Down</button>}
    </div>
  );
};

export default OutsideCallButton;
