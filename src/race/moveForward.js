import { Random, Console } from "@woowacourse/mission-utils";
import getWinners from "./getWinners";
import playRound from "./playRound";
import renderRound from "./renderRound";

export default function moveForward(
  carNamesList,
  tryCount,
  rng = Random.pickNumberInRange
) {
  const raceProgress = Array.from({ length: carNamesList.length }, () => []);

  Console.print(`\n실행 결과`);
  for (let round = 0; round < tryCount; round++) {
    playRound(raceProgress, rng);
    Console.print(`${renderRound(carNamesList, raceProgress)}\n`);
  }

  return getWinners(carNamesList, raceProgress);
}
