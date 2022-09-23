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
     students.all[index].randomNumber = Math.floor(Math.random() * 7 + 1)
     index++
 
     if (index >= students.all.length) {
         return true
     }
     applyAmbition(index)
 }
 
 const getStudent = (index) => {
     let i = Number(index) 
     if (isNaN(i) || students.all.length < i){
        console.log('Invalid Input, Index Set To 0');
        i = 0;
     }
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

 const getGroup = (arg) => {
  const group = [];
    for(let i = 0; i < students.all.length; i++){
        if(students.all[i].group == arg){
          group.push(students.all[i]);
        }  
    } return group;
    
 }
 


 exports._setupGroups = setupGroups
 exports._getStudents = getStudents
 exports._getStudent = getStudent
 exports._getGroup = getGroup
 exports._assignGroup = assignGroup
