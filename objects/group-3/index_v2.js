const prompt = require("prompt-sync")();
students = {
  all: [
    {
      firstname: "Mattias",
      lastname: "Alm",
      email: "Mattias.Alm@yh.nackademin.se",
    },
    {
      firstname: "Erik",
      lastname: "Thorsson",
      email: "Erik.Thorsson@yh.nackademin.se",
    },
    {
      firstname: "Hanna",
      lastname: "Arefiardakani",
      email: "Hanna.Arefiardakani@yh.nackademin.se",
    },
    {
      firstname: "Linus",
      lastname: "H\u00e4r\u00e9n",
      email: "Linus.Haren@yh.nackademin.se",
    },
    {
      firstname: "Dennis",
      lastname: "Tarbiat",
      email: "Dennis.Tarbiat@yh.nackademin.se",
    },
    {
      firstname: "Robin",
      lastname: "Lock",
      email: "Robin.Lock@yh.nackademin.se",
    },
    {
      firstname: "Anders",
      lastname: "Kull",
      email: "Anders.Kull@yh.nackademin.se",
    },
    {
      firstname: "Johan",
      lastname: "B\u00e4cklin",
      email: "Johan.Backlin@yh.nackademin.se",
    },
    {
      firstname: "Terese",
      lastname: "Bod\u00e9rus",
      email: "Terese.Boderus@yh.nackademin.se",
    },
    {
      firstname: "Sirojiddin",
      lastname: "Khamidullaev ",
      email: "Sirojiddin.Khamidullaev@yh.nackademin.se",
    },
    {
      firstname: "Zichun",
      lastname: "Zhao",
      email: "Zichun.Zhao@yh.nackademin.se",
    },
    {
      firstname: "Sofia",
      lastname: "Laas",
      email: "Sofia.Laas@yh.nackademin.se",
    },
    {
      firstname: "Alex",
      lastname: "Saxena",
      email: "Alex.Saxena@yh.nackademin.se",
    },
    {
      firstname: "Alexander",
      lastname: "Wikl\u00f6w",
      email: "Alexander.Wiklow@yh.nackademin.se",
    },
    {
      firstname: "Andreas",
      lastname: "Warncke",
      email: "Andreas.Warncke@yh.nackademin.se",
    },
    {
      firstname: "Anton",
      lastname: "Ottern\u00e4s",
      email: "Anton.Otternas@yh.nackademin.se",
    },
    {
      firstname: "Araceli",
      lastname: "Prieto Gallego",
      email: "Araceli.PrietoGallego@yh.nackademin.se",
    },
    {
      firstname: "tollis",
      lastname: "papadopoulos",
      email: "tollis.papadopoulos@yh.nackademin.se",
    },
    {
      firstname: "Bagher",
      lastname: "Hosseini",
      email: "Bagher.Hosseini@yh.nackademin.se",
    },
    {
      firstname: "Claude",
      lastname: "Loba",
      email: "Claude.Loba@yh.nackademin.se",
    },
    {
      firstname: "Daniel",
      lastname: "Jansson",
      email: "Daniel.Jansson@yh.nackademin.se",
    },
    {
      firstname: "Elin",
      lastname: "Horn",
      email: "Elin.Horn@yh.nackademin.se",
    },
    {
      firstname: "Emil",
      lastname: "Sund\u00e9n",
      email: "Emil.Sunden@yh.nackademin.se",
    },
    {
      firstname: "Tom",
      lastname: "Johansson",
      email: "Tom.Johansson@yh.nackademin.se",
    },
    {
      firstname: "Fosiya ",
      lastname: "Giama",
      email: "Fosiya.Giama@yh.nackademin.se",
    },
    {
      firstname: "Gustav",
      lastname: "Franchell",
      email: "Gustav.Franchell@yh.nackademin.se",
    },
    {
      firstname: "Jirawan",
      lastname: "Sangthong",
      email: "Jirawan.Sangthong@yh.nackademin.se",
    },
    {
      firstname: "Jonathan",
      lastname: "Ljung Perki\u00f6",
      email: "Jonathan.LjungPerkio@yh.nackademin.se",
    },
    {
      firstname: "Juliett",
      lastname: "Busuioc",
      email: "Juliett.Busuioc@yh.nackademin.se",
    },
    {
      firstname: "Karl",
      lastname: "\u00d6sterberg",
      email: "Karl.Osterberg@yh.nackademin.se",
    },
    {
      firstname: "Kenneth",
      lastname: "Ellebring",
      email: "Kenneth.Ellebring@yh.nackademin.se",
    },
    {
      firstname: "Kimberley",
      lastname: "Ahnlund Matthews",
      email: "Kimberley.AhnlundMatthews@yh.nackademin.se",
    },
    {
      firstname: "Lucas",
      lastname: "Larsson",
      email: "Lucas.Larsson2@yh.nackademin.se",
    },
    {
      firstname: "Mette",
      lastname: "af Ekenstam",
      email: "Mette.afEkenstam@yh.nackademin.se",
    },
    {
      firstname: "Vadzim",
      lastname: "Kulikouski",
      email: "Vadzim.Kulikouski@yh.nackademin.se",
    },
    {
      firstname: "Miguel",
      lastname: "Vallin",
      email: "Miguel.Vallin@yh.nackademin.se",
    },
    {
      firstname: "Mika",
      lastname: "Munterud",
      email: "Mika.Munterud@yh.nackademin.se",
    },
    {
      firstname: "Noel",
      lastname: "Perland",
      email: "Noel.Perland@yh.nackademin.se",
    },
    {
      firstname: "Patrik",
      lastname: "Skantz",
      email: "Patrik.Skantz@yh.nackademin.se",
    },
    {
      firstname: "Rebecca",
      lastname: "Fischer",
      email: "Rebecca.Fischer@yh.nackademin.se",
    },
    {
      firstname: "Sanaz",
      lastname: "Effati Khajehha",
      email: "Sanaz.EffatiKhajehha@yh.nackademin.se",
    },
  ],
};
const allStudents = students.all;

console.log("");

//frågar vilken storlek på grupp, gör om till nummer och tilldelar det till variabeln storlekPåGrupp
let storlekPåGrupp = Number(prompt("Storlek på grupp?: "));

while (isNaN(storlekPåGrupp) || storlekPåGrupp == 0) {
  console.log("Välj en siffra: ");
  storlekPåGrupp = Number(prompt("Storlek på grupp?: "));
}

//----------------------------------------------------------------
//Kallar på applyAmbition() 40 gånger då längden på students.all.length är 40.

for (i = 0; i < students.all.length; i++) {
  applyAmbition(i);
}

// Filter metod, sortera student Arrayn efter om dom har jobb eller inte.
students.all.sort((a, b) => Number(b.hasJob) - Number(a.hasJob));

for (i = 0; i < students.all.length; i++) {
  assignGroup(i, storlekPåGrupp);
}

//funktionen tar in parameter (i, storlekPåGrupp) från for loopen och tilldelar alla studenter en grupp baserat på storlek på grupp.
function assignGroup(index, size) {
  let group = Math.floor((index + 1) / size) + 1;
  students.all[index].group = group;
}

//----------------------------------------------------------------

// Funktion som tilldelar studie-timmar per vecka samt klassrumstimmar per dag till varje person.
function applyAmbition(index) {
  //tilldelar perWeek ett random nummer mellan 0 och 24
  let perWeek = (students.all[index].hoursPerWeek =
    Math.floor(Math.random() * 24) + 8);
  //tilldelar en student en parameter till som är hoursInClassroomPerDay som är ett random nummer mellan 0 och 8
  students.all[index].hoursInClassroomPerDay = Math.floor(Math.random() * 8);
  //här tilldelas studenten en parameter till som heter hasJob. Om studenten är i skolan mindre än 10h/veckan har den ett jobb och tilldelas true, annars false.
  if (perWeek < 10) {
    students.all[index].hasJob = true;
  } else {
    students.all[index].hasJob = false;
  }

  if (index >= allStudents.length) {
    return true;
  }
}
//skriver ut alla studenter med grupp,jobb(true/false),tid i skolan och totalt plugg.
console.log(students.all);
console.log(
  `Då var alla grupper uppdelade med ${storlekPåGrupp} i varje grupp!`
);

//-----------------------------------------------------------------

//tar in en siffra och skriver ut personen som har den positionen i objectet. mata in Nan och du får frågan igen.
let person = Number(prompt("välj en person mellan 0-40: "));
const getStudent = (person) => {
  let i = person;
  while (isNaN(person)) {
    console.log("Vänligen mata in ett nummer!");
    person = Number(prompt("välj en person mellan 0-40: "));
  }

  i = person;
  console.log(`Det här är den ${Number(person) + 1} personen i listan!`);
  return console.log(students.all[i]);
};

getStudent(person);

//------------------------------------------------------------------
let vilkenGrupp = Number(
  prompt(`Skriv en grupp mellan 1 - ${students.all[40].group}: `)
);

while (isNaN(vilkenGrupp)) {
  console.log("Skriv in en siffra: ");
  vilkenGrupp = Number(
    prompt(`Skriv en grupp mellan 1 - ${students.all[40].group}: `)
  );
}
//-------------------------------------------------------------------
// Deklarera en global array utan värden
let grupp = [];

// Baserat på given parameter fylls grupp-arrayn.
const getGroup = (vilkenGrupp) => {
  if (
    isNaN(vilkenGrupp) ||
    vilkenGrupp > students.all[40].group ||
    vilkenGrupp === 0
  ) {
    console.log(`Det finns ingen grupp ${vilkenGrupp}.`);
  } else {
    for (let i = 0; i < students.all.length; i++) {
      if (students.all[i].group === vilkenGrupp) {
        grupp.push(students.all[i]);
      }
    }
    console.log(`Det här är grupp ${vilkenGrupp}`);
    return console.log(grupp);
  }
};

getGroup(vilkenGrupp);

//------------------------------------------------------------------
/*
exports.setupGroups = setupGroups
exports.getStudent = getStudent
exports.students = students
exports.applyAmbition = applyAmbition
exports.assignGroup = assignGroup
exports.getGroup = getGroup
exports.allt = allt
*/
