// Having two dots before "groups" makes it possible to go back the previous folder.
const students = require("../groups");
/* Added prompt sync so the user can input information, in this program, making
 ** it possible for the user to decide how many student should be placed in each
 ** group.
 */
const prompt = require("prompt-sync")();

const allStudents = students.all; // read students from imported module
let colourDefined, groupsAssigned, amount;

function applyColour(index) {
  /* We tried to use if and else if first but noticed that switch made it more
  ** visually easy to understand.
  **  
  ** Math.floor is used so that the random number given by using Math.random is rounded
  ** down to the closet Integer. Here we take Math.random, multiply by 4 and adding 1 
  ** to get a random number between 1-4.
  ** Depending on which number is randomly given the number will be changed to the a
  ** assigned colour. 
  */

  switch (
    (allStudents[index].PersonalityColour = Math.floor(Math.random() * 4 + 1))
  ) {
    case 1:
      allStudents[index].PersonalityColour = "blue";
      break;

    case 2:
      allStudents[index].PersonalityColour = "red";
      break;

    case 3:
      allStudents[index].PersonalityColour = "green";
      break;

    case 4:
      allStudents[index].PersonalityColour = "yellow";
      break;
  }

  index++;

  if (index >= allStudents.length) {
    return true;
  }
  applyColour(index);
}
  /* Function applyPersonalityType, checks which colour allStudents have been assigned
  ** and depending on which colour they have, an assigned Personality type will be added 
  ** based on the colour.
  */
function applyPersonalityType(index) {
  switch (allStudents[index].PersonalityColour) {
    case "blue":
      allStudents[index].PersonalityType = "Structured";
      break;
    case "red":
      allStudents[index].PersonalityType = "Dominant";
      break;

    case "green":
      allStudents[index].PersonalityType = "Stable";
      break;

    case "yellow":
      allStudents[index].PersonalityType = "Social";
      break;
  }
  index++;

  if (index >= allStudents.length) {
    return true;
  }

  applyPersonalityType(index);
}

const getStudent = (index) => {
   /* 
   ** create a copy of students object
   */
  const temp = JSON.parse(JSON.stringify(allStudents));
  /* by adding -1 to index, will make it possible for the user to get the correct student info
  ** when requesting student 1, otherwise the user would get student 2 that is placed in index 1.
  */
  let i = Number(index - 1); 
  /* If the user have inputted a value that is not a number, is higher than the length of the 
  ** student list, a message will be shown that the user have inputted the wrong index.
  */
  if (isNaN(i) || i >= temp.length || i < 0) return "Wrong index";
  else return allStudents[i];
};
/* For the future this variable name "getStudents" should maybe be changed to avoid accidentally 
** mistaking it for the variable getStudent which have a similar name.
*/
const getStudents = () => {
/*
** amount makes it possible for the user to input how many students that should be 
** put in each group. It will only return true if the input value is a number higher
** than zero and equal/or lower than the total number of students. 
*/
  amount = Number(prompt("Enter how many students requested in each group? "));
  //amount = Number(amount);
  if (amount <= allStudents.length && amount > 0) {
    assignGroup(0, amount);
    return allStudents;
  }
  else if (amount > allStudents.length){
    return "You have entered a higher number than the total amount of students!"
  }
  else {
    return ("That is not a number, please try again!");
  }
}

/* Function assignGroup sort allStudents alphabetically based on the colour they have
** been assigned. After allStudents have been sorted they get divided in groups based 
** on the index the user have written on how many students should be in each group.
*/

function assignGroup(index, size) {
/* localeCompare has default language, English. This means that Strings will be sorted 
** alphabetically and Numbers will be sorted from low to high.
*/
  allStudents.sort((a, b) => {
    return a.PersonalityColour.localeCompare(b.PersonalityColour);
  });

  let group = Math.floor(index / size) + 1;
  allStudents[index].group = group;
  index++;

  if (index >= allStudents.length) {
    return true;
  }
  assignGroup(index, size);
}

/* Function setupGroups will start the functions applyColour and applyPersonalityType
** and return allStudents.
*/

const setupGroups = () => {
  colourDefined = applyColour(0);
  personalityDefined = applyPersonalityType(0);
  return allStudents;
};

/* Function getGroup will filter allStudents based on which group they are in and is
** requested by the user. If the user request students from group 2, the function filter
** will check all students and only return the students in the requested group.
*/
const getGroup = (arg) => {
  /* Writing as below comments is also possible and will resolve in the same outcome, but
  ** to make it more clear, we have placed "student" inside brackets ().
  **
  ** return allStudents.filter(student => student.group == arg);
  */
  return allStudents.filter((student) => student.group == arg);
};

exports._setupGroups = setupGroups;
exports._getStudents = getStudents;
exports._getStudent = getStudent;
exports._getGroup = getGroup;
exports._getStudent = getStudent;
