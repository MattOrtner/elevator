import React from "react";

const CallButton = (props) => {
  const { on, call, floor, setDownCallQue, setUpCallQue, isCalled } = props;

  return (
    <div className={`call-button`}>
      <div>{floor}</div>
      <div className="movement-ring">
        <div className={`${on} indicator`}></div>
      </div>
      <div
        className={`${isCalled}`}
        onClick={() => call(setUpCallQue, "up", floor)}
      >
        Up
      </div>

      <div
        className={`${isCalled}`}
        onClick={() => call(setDownCallQue, "down", floor)}
      >
        Down
      </div>
    </div>
  );
};
export default CallButton;
