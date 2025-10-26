import shouldAdvance from "./shouldAdvance";

export default function playRound(
  raceProgress,
  rng = Random.pickNumberInRange
) {
  for (let nameIdx = 0; nameIdx < raceProgress.length; nameIdx++) {
    if (shouldAdvance(rng)) raceProgress[nameIdx].push("-");
  }
}
