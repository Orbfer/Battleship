import cruiserImg from '../assets/images/cruiser.png'
import shipImg from '../assets/images/ship.png'
import submarineImg from '../assets/images/submarine.png'
import warshipImg from '../assets/images/warship.png'
import aircraftCarrierImg from '../assets/images/aircraft-carrier.png'
const computerBoard = document.querySelector('#computer-board')
function startGame() {
    const shipsPopUp = document.createElement('div')
    shipsPopUp.id = 'ships-pop-up'
    computerBoard.append(shipsPopUp)
    const shipsPopUpCont1 = document.createElement('div')
    shipsPopUpCont1.classList.add('pop-up-cont1')
    const shipsPopUpCont2 = document.createElement('div')
    shipsPopUpCont2.classList.add('pop-up-cont2')
    shipsPopUp.append(shipsPopUpCont1)
    shipsPopUp.append(shipsPopUpCont2)
    const cruiser = document.createElement('img')
    cruiser.src = cruiserImg
    cruiser.classList.add('ship-img')
    shipsPopUpCont1.append(cruiser)
    const ship = document.createElement('img')
    ship.src = shipImg
    ship.classList.add('ship-img')
    shipsPopUpCont1.append(ship)
    const submarine = document.createElement('img')
    submarine.src = submarineImg
    submarine.classList.add('ship-img')
    shipsPopUpCont1.append(submarine)
    const warship = document.createElement('img')
    warship.src = warshipImg
    warship.classList.add('ship-img')
    shipsPopUpCont2.append(warship)
    const aircraftCarrier = document.createElement('img')
    aircraftCarrier.src = aircraftCarrierImg
    aircraftCarrier.classList.add('ship-img')
    shipsPopUpCont2.append(aircraftCarrier)
}
export { startGame };
