import React from "react";

const ElevatorPanelButton = (props) => {
  const { floorNumber, panelCall, isPanelSelected, setIsPanelSelected } = props;
  const buttonSelected = (floorNumber) => {
    panelCall(floorNumber);
    isPanelSelected.splice(floorNumber, 1, true);
    setIsPanelSelected(isPanelSelected);
  };

  return (
    <div>
      <div
        className={` ${isPanelSelected[floorNumber]} panel-button`}
        onClick={() => buttonSelected(floorNumber)}
      >
        {floorNumber}
      </div>
    </div>
  );
};

export default ElevatorPanelButton;
