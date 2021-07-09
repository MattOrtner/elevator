import React from "react";

const CallButton = (props) => {
  const {
    isInMotion,
    setIsInMotion,
    floor,
    changeFloor,
    on,
    downCallQue,
    setDownCallQue,
    upCallQue,
    setUpCallQue,
  } = props;

  const isNewCall = (arr, selectedFloor) => {
    for (let i = 0; i < arr.length; i += 1) {
      if (
        arr[i].floorNumber !== selectedFloor.floorNumber &&
        arr[i].direction !== selectedFloor.direction
      ) {
        return true;
      } else if (
        arr[i].floorNumber !== selectedFloor.floorNumber &&
        arr[i].direction === selectedFloor.direction
      ) {
        return true;
      } else if (
        arr[i].floorNumber === selectedFloor.floorNumber &&
        arr[i].direction !== selectedFloor.direction
      ) {
        return true;
      } else {
        return false;
      }
    }
  };
  /**
   * the floor makes the call
   * useEffect - calls a checkQue()
   * if(there is a call in either of the array's) >> then checkDoors() -this
   *    has a close door situation in ti?- >> then moveTheElevator() that works in conjunction with visuallyMoveTheElevator()
   * >> then there is a sound for arrival
   *
   * maybe there can be elevator music playing the whole time.
   *
   * */
  const call = (callQue, setForQue, direction, floor) => {
    if (callQue.length === 0) {
      changeFloor(floor);
      setForQue([{ direction: direction, floorNumber: floor }]);
    } else if (callQue.length > 0) {
      if (isNewCall(callQue, { direction: direction, floorNumber: floor })) {
        changeFloor(floor);
        setForQue([...callQue, { direction: direction, floorNumber: floor }]);
      } else {
        console.log("it's included");
        console.log("everything is on fire!!!");
      }
    }
  };

  const floorArrival = () => {
    setIsInMotion(!isInMotion);
  };

  return (
    <div className={`call-button`}>
      <div>{floor}</div>
      <div className={`${isInMotion} movement-ring`}>
        <div className={`${on} indicator`}></div>
      </div>
      <div onClick={() => call(upCallQue, setUpCallQue, "up", floor)}>Up</div>
      <div onClick={() => call(downCallQue, setDownCallQue, "down", floor)}>
        Down
      </div>
    </div>
  );
};
export default CallButton;
