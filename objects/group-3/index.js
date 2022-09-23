const prompt = require("prompt-sync")()
students ={
	all :
    [
        { firstname: 'Mattias', lastname: 'Alm', email: 'Mattias.Alm@yh.nackademin.se', group: 1},
        { firstname: 'Erik', lastname: 'Thorsson', email: 'Erik.Thorsson@yh.nackademin.se' },
        { firstname: 'Hanna', lastname: 'Arefiardakani', email: 'Hanna.Arefiardakani@yh.nackademin.se' },
        { firstname: 'Linus', lastname: 'H\u00e4r\u00e9n', email: 'Linus.Haren@yh.nackademin.se' },
        { firstname: 'Dennis', lastname: 'Tarbiat', email: 'Dennis.Tarbiat@yh.nackademin.se' },
        { firstname: 'Robin', lastname: 'Lock', email: 'Robin.Lock@yh.nackademin.se' }, 
        { firstname: 'Anders', lastname: 'Kull', email: 'Anders.Kull@yh.nackademin.se' },
        { firstname: 'Johan', lastname: 'B\u00e4cklin', email: 'Johan.Backlin@yh.nackademin.se' },
        { firstname: 'Terese', lastname: 'Bod\u00e9rus', email: 'Terese.Boderus@yh.nackademin.se' },
        { firstname: 'Sirojiddin', lastname: 'Khamidullaev ', email: 'Sirojiddin.Khamidullaev@yh.nackademin.se' },
        { firstname: 'Zichun', lastname: 'Zhao', email: 'Zichun.Zhao@yh.nackademin.se' },
        { firstname: 'Sofia', lastname: 'Laas', email: 'Sofia.Laas@yh.nackademin.se' }, 
        { firstname: 'Alex', lastname: 'Saxena', email: 'Alex.Saxena@yh.nackademin.se' },
        { firstname: 'Alexander', lastname: 'Wikl\u00f6w', email: 'Alexander.Wiklow@yh.nackademin.se' },
        { firstname: 'Andreas', lastname: 'Warncke', email: 'Andreas.Warncke@yh.nackademin.se' },
        { firstname: 'Anton', lastname: 'Ottern\u00e4s', email: 'Anton.Otternas@yh.nackademin.se' },
        { firstname: 'Araceli', lastname: 'Prieto Gallego', email: 'Araceli.PrietoGallego@yh.nackademin.se' },
        { firstname: 'tollis', lastname: 'papadopoulos', email: 'tollis.papadopoulos@yh.nackademin.se' }, 
        { firstname: 'Bagher', lastname: 'Hosseini', email: 'Bagher.Hosseini@yh.nackademin.se' },
        { firstname: 'Claude', lastname: 'Loba', email: 'Claude.Loba@yh.nackademin.se' },
        { firstname: 'Daniel', lastname: 'Jansson', email: 'Daniel.Jansson@yh.nackademin.se' },
        { firstname: 'Elin', lastname: 'Horn', email: 'Elin.Horn@yh.nackademin.se' },
        { firstname: 'Emil', lastname: 'Sund\u00e9n', email: 'Emil.Sunden@yh.nackademin.se' },
        { firstname: 'Tom', lastname: 'Johansson', email: 'Tom.Johansson@yh.nackademin.se' }, 
        { firstname: 'Fosiya ', lastname: 'Giama', email: 'Fosiya.Giama@yh.nackademin.se' },
        { firstname: 'Gustav', lastname: 'Franchell', email: 'Gustav.Franchell@yh.nackademin.se' },
        { firstname: 'Jirawan', lastname: 'Sangthong', email: 'Jirawan.Sangthong@yh.nackademin.se' },
        { firstname: 'Jonathan', lastname: 'Ljung Perki\u00f6', email: 'Jonathan.LjungPerkio@yh.nackademin.se' },
        { firstname: 'Juliett', lastname: 'Busuioc', email: 'Juliett.Busuioc@yh.nackademin.se' },
        { firstname: 'Karl', lastname: '\u00d6sterberg', email: 'Karl.Osterberg@yh.nackademin.se' },
        { firstname: 'Kenneth', lastname: 'Ellebring', email: 'Kenneth.Ellebring@yh.nackademin.se' },
        { firstname: 'Kimberley', lastname: 'Ahnlund Matthews', email: 'Kimberley.AhnlundMatthews@yh.nackademin.se' },
        { firstname: 'Lucas', lastname: 'Larsson', email: 'Lucas.Larsson2@yh.nackademin.se' },
        { firstname: 'Mette', lastname: 'af Ekenstam', email: 'Mette.afEkenstam@yh.nackademin.se' },
        { firstname: 'Vadzim', lastname: 'Kulikouski', email: 'Vadzim.Kulikouski@yh.nackademin.se' }, 
        { firstname: 'Miguel', lastname: 'Vallin', email: 'Miguel.Vallin@yh.nackademin.se' },
        { firstname: 'Mika', lastname: 'Munterud', email: 'Mika.Munterud@yh.nackademin.se' },
        { firstname: 'Noel', lastname: 'Perland', email: 'Noel.Perland@yh.nackademin.se' },
        { firstname: 'Patrik', lastname: 'Skantz', email: 'Patrik.Skantz@yh.nackademin.se' },
        { firstname: 'Rebecca', lastname: 'Fischer', email: 'Rebecca.Fischer@yh.nackademin.se' },
        { firstname: 'Sanaz', lastname: 'Effati Khajehha', email: 'Sanaz.EffatiKhajehha@yh.nackademin.se' }
]
}
const allStudents = students.all
let storlekPåGrupp = Number(prompt("Storlek på grupp?: "));

//----------------------------------------------------------------

function assignGroup(index, size) {
    let group = Math.floor((index + 1) / size) + 1
    students.all[index].group = group
    index++

    if(index >= students.all.length) {
        return console.log(true);   
    }
 }

 //----------------------------------------------------------------
 
   function applyAmbition(index) {
// let perWeek sparar värder som index-pesonen 
   let perWeek = (students.all[index].hoursPerWeek = Math.floor(Math.random() * 24));
    students.all[index].hoursInClassromPerDay = Math.floor(Math.random() * 8);

    //om index-personen är i klassrummet mindre än 10h i veckan har den ett jobb på sidan av
    if (perWeek < 10){
        students.all[index].hasJob = true;
     }
     else{
        students.all[index].hasJob = false;
     }
    index++

    if (index >= allStudents.length) {
        return true; // remember that it's good practice to have single point of return for a function
    }}

    console.log(students.all)
   
//-----------------------------------------------------------------

const getStudent = (index) => {
    
    let i = Number(index) 
    if (isNaN(i)){console.log("ERROR, INPUT = NOT A NUMBER ")} // ändra > till <
    else if (students.all.length < i){
        i = 0  // TODO: fix this. What happens when we don't get good input?
        console.log("Välj en siffra mellan 0-40")
    } 
    else i = index
    return console.log(students.all[i])
}

//getStudent("ds")

//------------------------------------------------------------------



const setupGroups = () => {
    for(i=0; i<students.all.length; i++){
    applyAmbition(i)
    assignGroup(i,storlekPåGrupp) // TODO: maybe this need more thought?
    }
    return students.all  
}

setupGroups();
console.log(students.all)

 
//------------------------------------------------------------------

let grupp = [];
const getGroup = (vilkenGrupp) => {
   
    for (let i = 0; i < students.all.length; i++) {
        if(students.all[i].group === vilkenGrupp){
            grupp.push(students.all[i])
        }
    }
  return console.log(grupp)
}


getGroup(storlekPåGrupp);
let vilkenGrupp = Number(prompt("Skriv ut gruppen: "));
getGroup(vilkenGrupp);

//------------------------------------------------------------------

exports._setupGroups = setupGroups
exports._getStudent = getStudent
exports._getGroup = getGroup
exports._getStudent = getStudent