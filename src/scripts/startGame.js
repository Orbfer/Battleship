import cruiserImg from "../assets/images/cruiser.svg";
import battleshipImg from "../assets/images/battleship.svg";
import submarineImg from "../assets/images/submarine.svg";
import warshipImg from "../assets/images/warship.svg";
import aircraftCarrierImg from "../assets/images/aircraft-carrier.svg";
const computerBoard = document.querySelector("#computer-board");
let shipLog = "Cruiser";
function startGame() {
  const shipsPopUp = document.createElement("div");
  shipsPopUp.id = "ships-pop-up";
  computerBoard.append(shipsPopUp);
  const shipsPopUpCont1 = document.createElement("div");
  shipsPopUpCont1.classList.add("pop-up-cont1");
  const shipsPopUpCont2 = document.createElement("div");
  shipsPopUpCont2.classList.add("pop-up-cont2");
  shipsPopUp.append(shipsPopUpCont1);
  shipsPopUp.append(shipsPopUpCont2);
  const cruiser = document.createElement("img");
  cruiser.src = cruiserImg;
  cruiser.classList.add("ship-img");
  shipsPopUpCont1.append(cruiser);
  const battleship = document.createElement("img");
  battleship.src = battleshipImg;
  battleship.classList.add("ship-img");
  shipsPopUpCont1.append(battleship);
  const submarine = document.createElement("img");
  submarine.src = submarineImg;
  submarine.classList.add("ship-img");
  shipsPopUpCont1.append(submarine);
  const warship = document.createElement("img");
  warship.src = warshipImg;
  warship.classList.add("ship-img");
  shipsPopUpCont2.append(warship);
  const aircraftCarrier = document.createElement("img");
  aircraftCarrier.src = aircraftCarrierImg;
  aircraftCarrier.classList.add("ship-img");
  shipsPopUpCont2.append(aircraftCarrier);
  const shipPickerLogCont = document.createElement("div");
  shipPickerLogCont.id = "ship-picker-log-cont";
  shipsPopUp.append(shipPickerLogCont);
  const shipPickerLog = document.createElement("div");
  shipPickerLog.id = "ship-picker-log";
  shipPickerLog.textContent = `Place your ${shipLog}`;
  shipPickerLogCont.append(shipPickerLog);
  cruiser.addEventListener("click", () => shipPicker("Cruiser"));
  battleship.addEventListener("click", () => shipPicker("Battleship"));
  submarine.addEventListener("click", () => shipPicker("Submarine"));
  warship.addEventListener("click", () => shipPicker("Warship"));
  aircraftCarrier.addEventListener("click", () =>
    shipPicker("Aircraft Carrier")
  );
}
function shipPicker(ship) {
  shipLog = ship;
  const shipPickerLog = document.querySelector("#ship-picker-log");
  shipPickerLog.textContent = `Place your ${shipLog}`;
}
export { startGame };
export { shipLog };
