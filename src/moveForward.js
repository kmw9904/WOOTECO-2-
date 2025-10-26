import { Random, Console } from "@woowacourse/mission-utils";
import getWinners from "./getWinners";

export default function moveForward(carNamesList, tryCount) {
  const raceProgress = Array.from({ length: carNamesList.length }, () => []);

  Console.print(`\n실행 결과`);
  for (let count = 0; count < tryCount; count++) {
    for (let name_idx = 0; name_idx < carNamesList.length; name_idx++) {
      if (Random.pickNumberInRange(0, 9) >= 4) {
        raceProgress[name_idx].push("-");
      }
    }

    const roundRaceResult = [];
    for (let i = 0; i < carNamesList.length; i++) {
      roundRaceResult.push(carNamesList[i] + " : " + raceProgress[i].join(""));
    }
    Console.print(`${roundRaceResult.join("\n")}\n`);
  }

  const winners = getWinners(carNamesList, raceProgress);

  return winners;
}
