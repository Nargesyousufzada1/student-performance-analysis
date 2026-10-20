const studentNames = ["Sara", "ALi", "Zahra", "Tina", "Tim", "Zaki", "Rozy", "Hasan", "Jim", "Lusy"];
const studentScores = [100, 95, 88, 50, 65, 89, 100, 98, 77, 90];

const infoStudent = studentNames.map((item, index) => {
    return ` ${item} - ${studentScores[index]}`;
});

console.log(infoStudent);

const passing = studentScores.filter(item => item >= 70)
console.log(`Passed Students ${passing}`);

const failed = studentScores.filter(item => item <= 69);
console.log(`Failed Studens: ${failed}`);

const namesList = studentNames.map((item, index) => `${index + 1}. ${item}`);
console.log(namesList);

const totalScores = studentScores.reduce((accum, curr) => {
    return accum + curr;
}, 0);

console.log(`Total of all students scores = ${totalScores}`);

const averageTotalScores = studentScores.reduce((accum, curr) => {
   return  accum + curr / studentScores.length
}, 0);
console.log(`Average score of all students = ${averageTotalScores}`);

const orderedNames = studentNames.sort();
console.log(`Ordered Students Name according to the Alphabet = ${orderedNames}`)

const orderedScores = studentScores.sort((a, b) => b - a);
console.log(`Ordered Scores according to the highest to the lowest score = ${orderedScores}`);

const findNames = studentNames.find(item => item === "Zaki");
console.log(`Dear student ${findNames}, your score is = ${studentScores[5]}`);

const highestAchievers = studentScores.some(item => item >= 90);
console.log(highestAchievers);

const passingStatus = studentScores.every(score => score >= 55);
console.log(passingStatus);

const brilliantScores = orderedScores.slice(0, 3);
console.log(`These three students ${studentNames[0]}, ${studentNames[6]} and ${studentNames[7]} are chosen as brilliant studenst with these scores: ${brilliantScores}`);

const lowestStudent = orderedScores.at(-1);
console.log(`The lowest number in the class is: ${lowestStudent}`);





