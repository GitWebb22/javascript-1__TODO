
const prompt = require("prompt-sync")();
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
    let i = Number(index) 
    if (isNaN(i) || students.all.length > i) i = 0 // TODO: fix this. What happens when we don't get good input?
    else i = index
    return students.all[i]
}
const getStudents = () =>{
    return students.all
}

const setupGroups = () => {
    
    sortIndexDefined = applySortIndex(0)

    students.all.sort(function(a ,b){
        return a.sortIndex - b.sortIndex
    })

    groupsAssigned = assignGroup(0, 6) // TODO: maybe this need more thought? It works?!

    for (let i = 0; i < 6; i++) {
        const studentsByGroup = students.all.splice(0,6);
        allGroups[i] = [];
        studentsByGroup.forEach(student => {
            allGroups[i].push("Group: " + student.group + " " + student.firstname + student.lastname)
        })
    }
    // console.log(allGroups)

    return allGroups
}
// TODO: return an array with only the students that belongs to a group with a specific index
const getGroup = (index) => {
    return allGroups[index - 1];
    // return({
    //     TODO: "return group " + arg
    //     // students: students.all.splice(11,6) // TODO: this works as long as the array of students is sorted by group. Also the size 
    // })
}

exports._setupGroups = setupGroups
exports._getStudents = getStudents
exports._getStudent = getStudent
exports._getGroup = getGroup
// exports._getStudent = getStudent

// console.log(setupGroups())

setupGroups();

while (true) {
    const input = prompt("Enter operation: ");
    if (input === "q") {process.exit(0);}

    console.log(getGroup(input))
}