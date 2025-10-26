export default function hasValidCarNameLength(carNamesList) {
  for (let carName of carNamesList) {
    if (carName.length > 5) {
      throw new Error("[ERROR] 이름은 5자 이하만 가능합니다.");
    }
  }
}
