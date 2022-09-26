
// const prompt = require("prompt-sync")();
// const students = require("./groups");
// const students = genStudents();
const students = require("../../data/groups");

// console.log(students)

const allStudents = students.all // read students from imported module'
const allGroups = [];

let sortIndexDefined,
    groupsAssigned


function assignGroup(index, size) {
    let group = Math.floor((index) / size) + 1
    students.all[index].group = group
    index++

    if(index >= students.all.length) {
        return true   
    } 
    assignGroup(index, size)
}

function applySortIndex(index) {
    students.all[index].sortIndex = Math.floor(Math.random() * 24)

    index++

    if (index >= allStudents.length) {
        return true
    }

    applySortIndex(index)
}

const getStudent = (index) => {
    if (!Number(index)) {
        if (typeof index !== "string") return;
        const inputString = index;
        return students.all.filter((student) => {return student.firstname === inputString})
    } else {
        return students.all[Math.floor(index) - 1]
    }
}
const getStudents = () =>{
    return students.all
}

const setupGroups = (studentsPerGroup = 6) => {
    sortIndexDefined = applySortIndex(0)

    students.all.sort(function(a ,b){
        return a.sortIndex - b.sortIndex
    })

    groupsAssigned = assignGroup(0, studentsPerGroup) // TODO: maybe this need more thought? It works?!

    const studentsClone = JSON.parse(JSON.stringify(students.all))
    let i = 0;
    // for (let i = 0; i < studentsPerGroup; i++) {
    while (studentsClone.length > 0) {
        const studentsByGroup = studentsClone.splice(0, studentsPerGroup); //Yank out the first 6 students

        allGroups[i] = []; //assign the current rotations index to an empty array
        studentsByGroup.forEach(student => {
            allGroups[i].push("Group: " + student.group + " " + student.firstname + " " + student.lastname)
        })
        
        i++;
    }
    return allGroups
}
// TODO: return an array with only the students that belongs to a group with a specific index
const getGroup = (index) => {
    if (!index) return allGroups;
    return allGroups[index - 1];
}

exports._setupGroups = setupGroups
exports._getStudents = getStudents
exports._getStudent = getStudent
exports._getGroup = getGroup
// exports._getStudent = getStudent

// console.log(setupGroups())

// setupGroups();

// while (true) {
//     const input = prompt("Enter operation: ");
//     if (input === "q") {process.exit(0);}

//     console.log(getGroup(input))
// }