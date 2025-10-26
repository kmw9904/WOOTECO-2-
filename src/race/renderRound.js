export default function renderRound(names, progress) {
  return names
    .map((name, nameIdx) => `${name} : ${progress[nameIdx].join("")}`)
    .join("\n");
}
