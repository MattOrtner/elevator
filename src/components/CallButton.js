import React from "react";

const CallButton = (props) => {
  const { on, call, floor, isFloorCalled } = props;

  return (
    <div className={`call-button`}>
      <div>{floor}</div>
      <div className="location-ring">
        <div className={`${on} indicator`}></div>
      </div>
      <div
        className={`${isFloorCalled} floor-button`}
        onClick={() => call("up", floor)}
      >
        Up
      </div>

      <div
        className={`${isFloorCalled} floor-button`}
        onClick={() => call("down", floor)}
      >
        Down
      </div>
    </div>
  );
};
export default CallButton;
