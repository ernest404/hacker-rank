function gradingStudents(grades) {
  if (grades.length >= 1 && grades.lenghth <= 60) {
    finalGrades = [];
    for (let i = 0; i < grades.length; i++) {
      if (grade[i] >= 0 && grade[i] <= 100) {
        const remainder = grade[i] % 5;
        if (grade[i] < 38) {
          finalGrades.push(grade[i]);
          return finalGrades;
        } else if (remainder >= 3) {
          grade[i] += 5 - remainder;
          finalGrades.push(grade[i]);
          return finalGrades;
        }
      } else return `Grade ${grade[i]} is not in range `;
    }
  } else return `The number of students ${grades.length} not in range`;
}
