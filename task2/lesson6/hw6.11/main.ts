// #4LJn7zBx
// взяти з arrays.js масив coursesArray
// написати пошук всіх об'єктів, в яких в modules є sass
// написати пошук всіх об'єктів, в яких в modules є docker

class Course {
    constructor(public title: string, public monthDuration: number, public hourDuration: number, public modules: string[]) {}
}

let coursesArray = [
    new Course('JavaScript Complex', 5, 909, ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']),
    new Course('Java Complex', 6, 909, ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'git', 'java core', 'java advanced']),
    new Course('Python Complex', 6, 909, ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'python core', 'python advanced']),
    new Course('QA Complex', 4, 909, ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']),
    new Course('FullStack', 7, 909, ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js', 'python', 'java']),
    new Course('Frontend', 4, 909, ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass'])
];

let coursesWithSass: Course[] = coursesArray.filter((course: Course) => course.modules.includes('sass'));
console.log(coursesWithSass);

let coursesWithDocker: Course[] = coursesArray.filter((course: Course) => course.modules.includes('docker'));
console.log(coursesWithDocker);