import React from "react";
import InsideCallButton from "./InsideCallButton";

const InsideCallButtonContainer = ({
  callFloor,
  elevator,
  indicatorLights,
  toggleIndicatorLight,
}) => {
  return (
    <div style={styles.container}>
      <h2 style={{ color: "black", paddingLeft: 30 }}>
        Inside Elevator where is thisButtons
      </h2>
      <div style={styles.buttonContainer}>
        {elevator &&
          elevator.map((floor) => (
            <InsideCallButton
              toggleIndicatorLight={toggleIndicatorLight}
              indicatorLights={indicatorLights}
              floorNumber={floor}
              key={floor}
              callFloor={callFloor}
            />
          ))}
      </div>
    </div>
  );
};

export default InsideCallButtonContainer;

const styles = {
  container: {
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    border: "1px solid black",
    color: "black",
    margin: "0px 30px",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "column-reverse",
  },
};
