const students = require("../groups");
//added prompt sync so the user can iput information
const prompt = require("prompt-sync")();
 
 const allStudents = students.all; // read students from imported module
 let colourDefined, groupsAssigned, amount;

 function assignGroup(index, size) {
    
    /*localeCompare (default engelska) 
    jämför sort number ordning eller alfabetiskordning
    */
    allStudents.sort((a,b) => {
        return a.favouriteColour.localeCompare(b.favouriteColour);
    });

     let group = Math.floor((index) / size) + 1; //removed - 1 after index 
     allStudents[index].group = group;
     index++;
 
     if(index >= allStudents.length) {
         return true;   
     } 
     assignGroup(index, size);
 }
 //function assignColour(index) {

  //  let colour = Math.random
//}
 // TODO: Time isn't everything. Or is it?
 function applyColour(index) {

   // allStudents[index].favouriteColour = Math.floor((Math.random()* 5)+ 1);

    switch (allStudents[index].favouriteColour = Math.floor((Math.random()* 5)+ 1)){
        case 1:
            allStudents[index].favouriteColour = 'blue';
           break; 

        case 2:
            allStudents[index].favouriteColour = 'red';
            break; 
        
        case 3:
            allStudents[index].favouriteColour = 'green';
            break; 

        case 4:
            allStudents[index].favouriteColour = 'yellow';
            break; 

        case 5:
            allStudents[index].favouriteColour = 'pink';
            break; 
    }
    /*

    if (allStudents[index].favouriteColour == 1){
        allStudents[index].favouriteColour = 'blue';
    }
    else if (allStudents[index].favouriteColour == 2){
        allStudents[index].favouriteColour = 'red';
    }
    else if (allStudents[index].favouriteColour == 3){
        allStudents[index].favouriteColour = 'green';
    }
    else if (allStudents[index].favouriteColour == 4){
        allStudents[index].favouriteColour = 'yellow';
    }
    else if (allStudents[index].favouriteColour == 5){
        allStudents[index].favouriteColour = 'pink';
    }
    */

   // allStudents[index].favouriteColour.sort();


     // TODO: should scheduled time in the classroom be accounted for?
     //allStudents[index].personalityColour = Math.random(blue, green, red)
     //allStudents[index].personalityColour = Math.floor(Math.random(colour))
     // Some examples of attributes for inspiration. Booleans can be used on their own or grouped in an anonymous object
     //  students.all[index].personalityType = {
    //      red: false, blue: false, green: true, yellow: false
    //   }
    // ...
     index++;
 
     if (index >= allStudents.length) {
        
         return true // remember that it's good practice to have single point of return for a function
     }
     applyColour(index);
 }
 
 const getStudent = (index) => {
     let i = Number(index-1);    //changed to index - 1 to make it possible for the  user to get the correct student info when requesting it.
    //operator inside if is fixed. Index is changed 
     if (isNaN(i) || i > allStudents.length || i >= 0)
     //i -= i;    //changed so that the value is  
     //else i = index //no need to have else 
     return students.all[i];
 }

 const getStudents = () => {
    /*
    amount makes it possible for the user to input how many students should be 
    put in each group. It will only return true if the inputed value is a number 
    higher than zero and equal/or lower than the total number of students. 
    */
    amount = prompt("Enter how many students requested in each group? ");
    amount = Number(amount);
    if (amount <= allStudents.length && amount > 0){
    assignGroup(0, amount);
    return allStudents;
    }
 }

 const setupGroups = () => {
     
     colourDefined = applyColour(0);
     
     //assignGroup(0, 6); //removed, not necessary to have it here 
        
      // TODO: maybe this need more thought? //Fixed!!
 
     return allStudents;  
 }
 // TODO: return an array with only the students that belongs to a group with a specific index
 const getGroup = (arg) => {
    //filter -> filtrerar alla studenter 
    //student --> vad man vill kalla värdet för
    //return allStudents.filter(student => student.group == arg); => funkar också 
    return allStudents.filter((student) => student.group == arg);
 }
 
 exports._setupGroups = setupGroups
 exports._getStudents = getStudents
 exports._getStudent = getStudent
 exports._getGroup = getGroup
 exports._getStudent = getStudent