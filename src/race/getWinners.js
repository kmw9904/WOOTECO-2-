export default function getWinners(carNamesList, raceProgress) {
  let winners = [];
  let max = 0;

  for (let nameIdx = 0; nameIdx < carNamesList.length; nameIdx++) {
    const distance = raceProgress[nameIdx].length;

    if (distance > max) {
      max = distance;
      winners = [carNamesList[nameIdx]];
    } else if (distance === max) {
      winners.push(carNamesList[nameIdx]);
    }
  }

  return winners;
}
