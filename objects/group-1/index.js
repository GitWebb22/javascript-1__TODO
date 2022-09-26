//import av ENV fil
require('dotenv').config()
//import av lista på alla studenter
const students = require("./groups")
// Variable deklaration
 let ambitionDefined,
     groupsAssigned
 
 //Uppdelning av grupper
 function assignGroup(index, size) {
     let group = Math.floor((index + 1) / size) + 1
     students.all[index].group = group
     index++
 
     if(index >= students.all.length) {
         return true   
     } 
     assignGroup(index, size)
 }
 
 //Tilldelar ett slumpmässigt nummer
 function applyRandomNumber(index) {
     students.all[index].randomNumber = Math.floor(Math.random() * 7 + 1)
     index++
 
     if (index >= students.all.length) {
         return true
     }
     applyRandomNumber(index)
 }
 
 //Hämtning av student utifrån index
 const getStudent = (index) => {
     let i = Number(index) 
     if (isNaN(i) || students.all.length < i){
        console.log('Invalid Input, Index Set To 0');
        i = 0;
     }
     else i = index
     return console.log(students.all[i])
 }

//Hämting av alla studenter i listan
 const getStudents = () =>{
     return students.all
 }
 
 //Uppdelning av grupper utifrån slumpmässigt nummer och sortering
 const setupGroups = () => {
     
    ambitionDefined = applyRandomNumber(0)
    function myComparator(a, b) {return a.randomNumber - b.randomNumber }
    students.all.sort(myComparator)
    groupsAssigned = assignGroup(0, 6)
    return students.all
}

//Hämting av en specifik grupp 
 const getGroup = (arg) => {
  const group = [];
    for(let i = 0; i < students.all.length; i++){
        if(students.all[i].group == arg){
          group.push(students.all[i]);
        }  
    } return group;
    
 }
 

//Export av funktioner
 exports._setupGroups = setupGroups
 exports._getStudents = getStudents
 exports._getStudent = getStudent
 exports._getGroup = getGroup
 exports._assignGroup = assignGroup
