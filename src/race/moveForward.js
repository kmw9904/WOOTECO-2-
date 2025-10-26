import { Random, Console } from "@woowacourse/mission-utils";
import getWinners from "./getWinners.js";
import playRound from "./playRound.js";
import renderRound from "./renderRound.js";

export default async function moveForward(
  carNamesList,
  tryCount,
  rng = Random.pickNumberInRange
) {
  const raceProgress = Array.from({ length: carNamesList.length }, () => []);

  Console.print(`\n실행 결과`);
  for (let round = 0; round < tryCount; round++) {
    playRound(raceProgress, rng);
    Console.print(`${renderRound(carNamesList, raceProgress)}\n`);

    await new Promise((resolve) => setTimeout(resolve, 1000));
  }

  return getWinners(carNamesList, raceProgress);
}
