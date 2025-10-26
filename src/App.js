import { Console } from "@woowacourse/mission-utils";
import hasValidCarNameLength from "./hasValidCarNameLength.js";
import moveForward from "./moveForward.js";

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

    const winners = moveForward(carNamesList, tryCount);

    Console.print(`최종 우승자 : ${winners.join(", ")}`);
  }
}

export default App;
