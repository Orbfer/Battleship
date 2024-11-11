import { shipLog } from "./startGame";
import cruiserImg from "../assets/images/cruiser.svg";
import battleshipImg from "../assets/images/battleship.svg";
import submarineImg from "../assets/images/submarine.svg";
import warshipImg from "../assets/images/warship.svg";
import aircraftCarrierImg from "../assets/images/aircraft-carrier.svg";
if ((shipLog = "Cruiser")) {
  placeShip(2);
}
if ((shipLog = "Batlleship")) {
  placeShip(3);
}
if ((shipLog = "Submnarine")) {
  placeShip(3);
}
if ((shipLog = "Warship")) {
  placeShip(4);
}
if ((shipLog = "Aircraft Carrier")) {
  placeShip(5);
}
function placeShip(num) {}
