// #yo06d74c1C
// є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];

// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// -- за допомоги map перетворити кожен елемент на наступний тип {id, title, monthDuration}

class Course {
    constructor(public title: string, public monthDuration: number) {}
}

class CourseWithId extends Course {
    constructor(public id: number, public title: string, public monthDuration: number) {
        super(title, monthDuration);
    }
}

let coursesAndDurationArray = [
    new Course('JavaScript Complex', 5),
    new Course('Java Complex', 6),
    new Course('Python Complex', 6),
    new Course('QA Complex', 4),
    new Course('FullStack', 7),
    new Course('Frontend', 4)
];

let resultArray: CourseWithId[] = coursesAndDurationArray
    .slice().sort((a: Course, b: Course) => b.monthDuration - a.monthDuration)
    .filter((value: Course) => value.monthDuration > 5)
    .map((value: Course, index: number) => new CourseWithId(index + 1, value.title, value.monthDuration));

console.log(resultArray);




