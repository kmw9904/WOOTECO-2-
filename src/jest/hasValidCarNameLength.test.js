const hasValidCarNameLength = require("../hasValidCarNameLength");

test("차량 이름 글자 수 예외테스트", () => {
  expect(() => hasValidCarNameLength(["pretty", "bts"]).toThrow("[ERROR]"));
});

test("차량 이름 글자 수 성공테스트", () => {
  expect(() => hasValidCarNameLength(["prety", "bts"].toThrow()));
});
