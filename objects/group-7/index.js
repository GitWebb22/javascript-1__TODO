// Having two dots before "groups" makes it possible to go back the previous folder.
const students = require("../groups");
/* Added prompt sync so the user can iput information, in this program, making
** it possible for the user to decide how many student should be placed in each
** group.
*/
const prompt = require("prompt-sync")();
 
 const allStudents = students.all; // read students from imported module
 let colourDefined, groupsAssigned, amount;

 function applyColour(index) {

    /* We tried to use if and else if first but noticed that switch made it more
    visually easy to understand.
    
    Math.floor is used so that the random number given by using Math.random is round
    down to the closet Integer. Here we take Math.random, multiply by 4 and adding 1 
    to get a random number between 1-4.
    Depending on which number is randomly given the number 
    */
   
    switch (allStudents[index].PersonalityColour = Math.floor((Math.random()* 4)+ 1)){
        case 1:
            allStudents[index].PersonalityColour = 'blue';
           break; 

        case 2:
            allStudents[index].PersonalityColour = 'red';
            break; 
        
        case 3:
            allStudents[index].PersonalityColour = 'green';
            break; 

        case 4:
            allStudents[index].PersonalityColour = 'yellow';
            break; 
    }

     index++;
 
     if (index >= allStudents.length) {
        
         return true; 
     }
     applyColour(index);
 }

function applyPersonalityType(index) {

    switch (allStudents[index].PersonalityColour){
        case 'blue':
            allStudents[index].PersonalityType = 'Structured';
            break;
        case 'red':
            allStudents[index].PersonalityType = 'Dominant';
            break; 
        
        case 'green':
            allStudents[index].PersonalityType = 'Stable';
            break; 

        case 'yellow':
            allStudents[index].PersonalityType = 'Social';
            break; 
    }
    index++;
 
    if (index >= allStudents.length) {
       
        return true; 
    }
    
    applyPersonalityType(index);
}
 /* Sanaz
 ** 
 */
 
 const getStudent = (index) => {

    const temp = JSON.parse(JSON.stringify(allStudents));
     let i = Number(index-1);    //changed to index - 1 to make it possible for the  user to get the correct student info when requesting it.
    //operator inside if is fixed. Index is changed 
     if (isNaN(i) || i > temp.length || i >= 0)
     //i -= i;    //changed so that the value is  
     //else i = index //no need to have else 
     return allStudents[i];
 }

 /* For the future this variable name should maybe be changed to avoid accidentally mistaking it for the
 ** variable getStudent with such a similar name.
 */
 const getStudents = () => {
    /*
    ** amount makes it possible for the user to input how many students should be 
    ** put in each group. It will only return true if the input value is a number 
    ** higher than zero and equal/or lower than the total number of students. 

    ** 
    */
    amount = Number(prompt("Enter how many students requested in each group? "));
    //amount = Number(amount);
    if (amount <= allStudents.length && amount > 0){
    assignGroup(0, amount);
    return allStudents;
    }
 }
 
 function assignGroup(index, size) {
    
    /* localeCompare has default language, English 
    ** this compares sort number ordning eller alfabetiskordning
    */
    allStudents.sort((a,b) => {
        return a.PersonalityColour.localeCompare(b.PersonalityColour);
    });

     let group = Math.floor((index) / size) + 1; //removed - 1 after index 
     allStudents[index].group = group;
     index++;
 
     if(index >= allStudents.length) {
         return true;   
     } 
     assignGroup(index, size);
 }

 const setupGroups = () => {
     
     colourDefined = applyColour(0);
    
     personalityDefined = applyPersonalityType(0);
 
     return allStudents;  
 }


/*
**
*/
 const getGroup = (arg) => {
    /* filter -> filtrerar alla studenter 
    ** student --> vad man vill kalla värdet för
    ** return allStudents.filter(student => student.group == arg); => funkar också 
    */
    return allStudents.filter((student) => student.group == arg);
 }
 
 exports._setupGroups = setupGroups
 exports._getStudents = getStudents
 exports._getStudent = getStudent
 exports._getGroup = getGroup
 exports._getStudent = getStudent