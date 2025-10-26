export default function shouldAdvance(rng = Random.pickNumberInRange) {
  return rng(0, 9) >= 4;
}
