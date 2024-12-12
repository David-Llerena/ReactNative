let grades= [
    {subject: 'Matemáticas', grade: 8}, 
    {subject: 'Lengua', grade: 7}, 
    {subject: 'Historia', grade: 9}
];

export const saveGrade = (grade) => {
    grades.push(grade);
    console.log("Arreglo",grades);
};

export const getGrades = () => {
    return grades;
};  

export const updateGrade = (nota) => {
    let gradeIndex = findIndex(nota.subject);
    if (gradeIndex !== null) {
      grades[gradeIndex] = { ...grades[gradeIndex], grade: nota.grade };
    }
    console.log("Arreglo", grades);
  };

  const findIndex = (subject) => {
    for (let i = 0; i < grades.length; i++) {
      if (grades[i].subject === subject) {
        return i;
      }
    }
    return null;
  };
