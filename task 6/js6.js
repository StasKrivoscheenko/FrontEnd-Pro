const students = [
    {
        id: 1,
        name: 'Alex',
        marks: [10, 10, 5],
    },
    {
        id: 2,
        name: 'Bob',
        marks: [10, 10, 10],
    },
    {
        id: 3,
        name: 'John',
        marks: [10, 10, 5],
    },
];
function calculateStudentAverageMark({ marks }) {
    return getAverage(marks);
}
function calculateGroupAverageMark(students) {
    const allMarks = students.flatMap(({ marks }) => marks);
    return getAverage(allMarks);
}
function getAverage(values) {
    return values.reduce((sum, value) => sum + value) / values.length;
}