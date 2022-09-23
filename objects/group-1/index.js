require('dotenv').config()
 const students = require("./groups")
 // const students = require("../data/groups")
 
 const allStudents = students.all // read students from imported module
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
     students.all[index].hoursPerWeek = Math.floor(Math.random() * 24)
     // students.all[index].hasJob = true 
     // ... 
     index++
 
     if (index >= allStudents.length) {
         return true // remember that it's good practice to have single point of return for a function
     }
     applyAmbition(index)
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
     
     ambitionDefined = applyAmbition(0)
     groupsAssigned = assignGroup(0, 6) // TODO: maybe this need more thought?
 
     return students.all
 }

  //Hannas version:
 //  const setupGroups = () => {
     
 //    ambitionDefined = applyAmbition(0)
 // Hannas add: Sorts after hoursPerWeek and then divides into groups. TODO: Separate the array into groups in getGroup.
 
 //   function myComparator(a, b) {return a.hoursPerWeek - b.hoursPerWeek }
//students.all.sort(myComparator);
     
 // groupsAssigned = assignGroup(0, 6)
   //  return students.all
// }
 
 //End Hannas version!

 // TODO: return an array with only the students that belongs to a group with a specific index
 const getGroup = (arg) => {
     return({
         TODO: "return group " + arg
         // students: students.all.splice(11,6) // TODO: this works as long as the array of students is sorted by group. Also the size 
     })
 }
 // Hannas version: When you call the function with groupnumber, it returns the students in the group.
//  const getGroup = (group) => {
//     let groupDivided = [];
//     switch(group) {
//     case 1:
//         groupDivided = students.all.slice(0,5)
//         return groupDivided;
//     case 2:
//         groupDivided = students.all.slice(6,11)
//         return groupDivided;
//     case 3:
//         groupDivided = students.all.slice(12,17)
//         return groupDivided;
//     case 4:
//         groupDivided = students.all.slice(18,23)
//         return groupDivided;
//     case 5:
//         groupDivided = students.all.slice(24,29)
//         return groupDivided;
//     case 6:
//         groupDivided = students.all.slice(30,36)
//         return groupDivided;
//     default:
//             return console.log("Group not found");
//         }
//     }   

    //End Hannas version!
 exports._setupGroups = setupGroups
 exports._getStudents = getStudents
 exports._getStudent = getStudent
 exports._getGroup = getGroup
 exports._getStudent = getStudent