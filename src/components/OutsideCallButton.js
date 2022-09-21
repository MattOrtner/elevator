import React from "react";
import triangleDownIcon from "../assets/triangle-small-down.svg";
import triangleUpIcon from "../assets/triangle-small-up.svg";

const OutsideCallButton = ({
  index,
  indicatorLights,
  callFloor,
  floorNumber,
  elevatorLength,
  toggleIndicatorLight,
}) => {
  const buttonHandler = (floorNumber, direction) => {
    callFloor(floorNumber, direction);
    const newLights = [...indicatorLights];
    floorNumber === 0 || floorNumber === elevatorLength
      ? newLights.splice(floorNumber, 1, true)
      : newLights[floorNumber].splice(direction === "up" ? 0 : 1, 1, true);
    toggleIndicatorLight(newLights);
  };

  return (
    <div className={`outside-call-button-container`}>
      <div style={{ paddingLeft: 10 }}>{floorNumber}</div>
      {floorNumber === 0 ? (
        <div className="single-button-container">
          <div style={{ paddingLeft: 10 }}>
            <div
              style={
                indicatorLights[floorNumber]
                  ? { ...styles.container, ...styles.selected }
                  : styles.container
              }
            ></div>
          </div>
          <img
            className="directional-button"
            onClick={() => buttonHandler(floorNumber, "up")}
            src={triangleUpIcon}
            alt="button to call elevator in the up direction"
          />
        </div>
      ) : floorNumber === elevatorLength ? (
        <>
          <div style={{ paddingLeft: 10 }}>
            <div
              style={
                indicatorLights[floorNumber]
                  ? { ...styles.container, ...styles.selected }
                  : styles.container
              }
            ></div>
          </div>
          <img
            className="directional-button"
            onClick={() => buttonHandler(floorNumber, "down")}
            src={triangleDownIcon}
            alt="button to call elevator in the down direction"
          />
        </>
      ) : (
        <div className="up-and-down-outside-container">
          <div className="up-and-down-indicator-container">
            <div style={{ paddingLeft: 10, paddingBottom: 3 }}>
              <div
                style={
                  indicatorLights[floorNumber][0]
                    ? { ...styles.container, ...styles.selected }
                    : styles.container
                }
              ></div>
            </div>
            <div style={{ paddingLeft: 10 }}>
              <div
                style={
                  indicatorLights[floorNumber][1]
                    ? { ...styles.container, ...styles.selected }
                    : styles.container
                }
              ></div>
            </div>
          </div>
          <div className="upDown-button-container">
            <img
              className="directional-button"
              onClick={() => buttonHandler(floorNumber, "up")}
              src={triangleUpIcon}
              alt="button to call elevator in the up direction"
            />
            <img
              className="directional-button"
              onClick={() => buttonHandler(floorNumber, "down")}
              src={triangleDownIcon}
              alt="button to call elevator in the down direction"
            />
          </div>
        </div>
      )}
    </div>
  );
};
export default OutsideCallButton;

const styles = {
  container: {
    height: 50,
    width: 50,
    border: "2px solid black",
    borderRadius: 50,
  },
  selected: {
    backgroundColor: "black",
    color: "white",
  },
};
