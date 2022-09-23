const students = require("../groups")
 // const students = require("../data/groups")
 
 const allStudents = students.all // read students from imported module
 let ambitionDefined, groupsAssigned

 function assignGroup(index, size) {
     let group = Math.floor((index + 1) / size) + 1;
     students.all[index].group = group
     index++
 
     if(index >= students.all.length) {
         return true;   
     } 
     assignGroup(index, size);
 }
 // TODO: Time isn't everything. Or is it?
 function applyAmbition(index) {
     // TODO: should scheduled time in the classroom be accounted for?
     students.all[index].hoursPerWeek = Math.floor(Math.random() * 24)
     // Some examples of attributes for inspiration. Booleans can be used on their own or grouped in an anonymous object
     //  students.all[index].personalityType = {
    //      red: false, blue: false, green: true, yellow: false
    //   }
    // ...
     index++
 
     if (index >= allStudents.length) {
         return true // remember that it's good practice to have single point of return for a function
     }
     applyAmbition(index)
 }
 
 const getStudent = (index) => {
     let i = Number(index-1)    //changed to index - 1 to make it possible for the  user to get the correct student info.
    //operator inside if is fixed. Index is changed 
     if (isNaN(i) || i > students.all.length || i > 0)
     i += 0;    //changed so that the value 
     //else i = index
     return students.all[i]
 }
 const getStudents = () =>{
     return students.all
 }
 
 const setupGroups = () => {
     
     ambitionDefined = applyAmbition(0)
     groupsAssigned = assignGroup(0, 5) // TODO: maybe this need more thought?
 
     return students.all   
 }
 // TODO: return an array with only the students that belongs to a group with a specific index
 const getGroup = (arg) => {
     return({
         TODO: "return group " + arg
         // students: students.all.splice(11,6) // TODO: this works as long as the array of students is sorted by group. Also the size 
     })
 }
 
 exports._setupGroups = setupGroups
 exports._getStudents = getStudents
 exports._getStudent = getStudent
 exports._getGroup = getGroup
 exports._getStudent = getStudent