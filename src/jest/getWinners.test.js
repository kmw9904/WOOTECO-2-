const getWinners = require("../race/getWinners");

describe("getWinners", () => {
  test("단일 우승자 테스트", () => {
    const names = ["kmw", "m1", "s1"];
    const progress = [["-", "-"], ["-"], ["-"]];
    expect(getWinners(names, progress)).toEqual(["kmw"]);
  });

  test("공동 우승자 테스트", () => {
    const names = ["kmw", "m1", "s1"];
    const progress = [["-", "-"], ["-", "-"], ["-"]];
    expect(getWinners(names, progress)).toEqual(["kmw", "m1"]);
  });

  test("모두 0칸일 때 전원 우승 테스트", () => {
    const names = ["kmw", "m1", "s1"];
    const progress = [[], [], []];
    expect(getWinners(names, progress)).toEqual(["kmw", "m1", "c1"]);
  });
});
