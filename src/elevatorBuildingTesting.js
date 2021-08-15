// let level = 0;
// const something = [
//   { floor: 0, on: true },
//   { floor: 1, on: false },
//   { floor: 2, on: false },
//   { floor: 3, on: false },
// ];
// const copy = [(something[level].on = false), (something[level + 1].on = true)];

// // console.log(something, "something");
// // console.log(copy, "copy");
// // console.log(copy.length, "copy.length");

// const callQue = [
//   { floor: 2, direction: "up" },
//   { floor: 4, direction: "up" },
//   { floor: 8, direction: "up" },
//   { floor: 1, direction: "up" },
//   { floor: 3, direction: "up" },
//   { floor: 7, direction: "down" },
//   { floor: 3, direction: "down" },
// ];
// // making the que one array, filtering when it's moving up or down...
// const filteredUp = callQue.filter((call) => call.direction === "up");
// const filteredDown = callQue.filter((call) => call.direction === "down");
// filteredUp.sort((level) => level.floor);
// const order = (arr) => {
//   let currentLowest = arr[0];
//   for (let i = 1; i < arr.length; i += 1) {
//     let levelInQuestion = arr[i];
//     console.log(levelInQuestion, "levelInQuestion");
//     console.log(currentLowest, "currentLowest");
//     if (levelInQuestion.floor < currentLowest.floor) {
//       console.log("yes it is...");
//     }
//   }
// };

// console.log(order(callQue));
// console.log(filteredUp, "filteredUp");
// console.log(filteredDown, "filteredDown");
// console.log(callQue, "callQue");
const isSelected = [false, false, false, false];

let updatedIsSelected = isSelected.splice(1, 2, "apples");
console.log(`updatedIsSelected`, updatedIsSelected);
