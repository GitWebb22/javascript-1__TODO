require('dotenv').config()
 const students = require("./groups")
 
 let ambitionDefined,
     groupsAssigned
 
 
 function assignGroup(index, size) {
     let group = Math.floor((index + 1) / size) + 1
     students.all[index].group = group
     index++
 
     if(index >= students.all.length) {
         return true   
     } 
     assignGroup(index, size)
 }
 
 function applyAmbition(index) {
     // TODO: Time isn't everything
     // TODO: Scheduled time in the classroom should be accounted for?
     students.all[index].randomNumber = Math.floor(Math.random() * 7 + 1)
     // students.all[index].hasJob = true 
     // ... 
     index++
 
     if (index >= students.all.length) {
         return true // remember that it's good practice to have single point of return for a function
     }
     applyAmbition(index)
 }
 
 const getStudent = (index) => {
     let i = Number(index) 
     if (isNaN(i) || students.all.length < i){
        console.log('Invalid Input, Index Set To 0');
        i = 0;
     }  // TODO: fix this. What happens when we don't get good input?
     else i = index
     return console.log(students.all[i])
 }


 const getStudents = () =>{
     return students.all
 }
 
 const setupGroups = () => {
     
    ambitionDefined = applyAmbition(0)
    function myComparator(a, b) {return a.randomNumber - b.randomNumber }
    students.all.sort(myComparator)
    groupsAssigned = assignGroup(0, 6)
    return students.all
}
 // TODO: return an array with only the students that belongs to a group with a specific index


 let grupp = [];
 const getGroup = (arg) => {
    for(let i = 0; i < students.all.length; i++){
        if(students.all[i].group == arg){
            grupp.push(students.all[i]);
        }  
    } return grupp;
    
 }
 
 exports.setupGroups = setupGroups
 exports.getStudents = getStudents
 exports.getStudent = getStudent
 exports.getGroup = getGroup
 exports.assignGroup = assignGroup
