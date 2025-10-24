import { Console, Random } from "@woowacourse/mission-utils";
import hasValidCarNameLength from "./hasValidCarNameLength.js";

class App {
  async run() {
    const carNamesInput = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요. (이름은 쉼표(,) 기준으로 구분)\n"
    );

    const carNamesList = carNamesInput
      .split(",")
      .map((carName) => carName.trim())
      .filter(Boolean);

    hasValidCarNameLength(carNamesList);

    const tryCountInput = await Console.readLineAsync(
      "시도할 횟수는 몇 회인가요?\n"
    );

    const tryCount = +tryCountInput;

    const raceProgress = Array.from({ length: carNamesList.length }, () => []);
    
    for (let count = 0; count < tryCount; count++) {
      for (let name_idx = 0; name_idx < carNamesList.length; name_idx++) {
        if (Random.pickNumberInRange(0, 9) >= 4) {
          raceProgress[name_idx].push("-");
        }
      }

      const roundRaceResult = [];
      for (let i = 0; i < carNamesList.length; i++) {
        roundRaceResult.push(carNamesList[i] + " : " + raceProgress[i]);
      }
      Console.print(`실행 결과\n${roundRaceResult.join("\n")}`);
    }

    Console.print("최종 우승지 : name1, name2");
  }
}

export default App;
