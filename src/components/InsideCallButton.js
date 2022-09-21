import React from "react";

const InsideCallButton = ({
  indicatorLights,
  toggleIndicatorLight,
  floorNumber,
  callFloor,
}) => {
  const insideCallHandler = (floorNumber, inside) => {
    callFloor(floorNumber, inside);
    const newLights = [...indicatorLights];
    newLights.splice(floorNumber, 1, true);
    toggleIndicatorLight(newLights);
  };

  return (
    <div
      style={
        indicatorLights[floorNumber]
          ? { ...styles.buttonContainer, ...styles.indicatorLight }
          : styles.buttonContainer
      }
      onClick={() => insideCallHandler(floorNumber, "inside")}
    >
      {floorNumber}
    </div>
  );
};

export default InsideCallButton;
const styles = {
  buttonContainer: {
    font: "30",
    border: "1px solid black",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    cursor: "pointer",
  },
  indicatorLight: {
    backgroundColor: "black",
    color: "white",
    border: "1px solid white",
  },
};
