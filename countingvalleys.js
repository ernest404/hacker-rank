function countingValleys(steps, path) {
  let valleys = 0;
  let elevation = 0;

  for (let i = 0; i < steps, i++; ) {
    if (path[i] == "D") {
      elevation--;
    } else {
      if (elevation == -1) {
        valleys++;
      }
      elevation++;
    }
  }
  return valleys;
}

function countingValleys(steps, path) {
  let valleys = 0;
  let seaLevel = 0;
  let path = path.split("");
  p.forEach((step) => {
    if (step === "U") {
      seaLevel += 1;
      if (seaLevel === 0) {
        valleys += 1;
      }
    } else {
      seaLevel -= 1;
    }
  });
  return valleys;
}
