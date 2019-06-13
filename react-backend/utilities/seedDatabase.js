const {Student,Campus}=require('../database/models');

const students=require('../data/students');
const campuses=require('../data/campuses');

const populateStudentTable=async(students)=>{
    for(let i=0;i<students.length;i++){
        let currentStudent=students[i];
        let buildStudent=await Student.build(currentStudent);
        buildStudent.id=i+1;
        await buildStudent.save();
    }
}

const populateCampusTable=async(campuses)=>{
    for(let i=0;i<campuses.length;i++){
        let currentCampus=campuses[i];
        let buildCampus=await Campus.build(currentCampus);
        buildCampus.id=i+1;
        await buildCampus.save();
    }
}

const seedDatabase=async()=>{
    try{
        await populateCampusTable(campuses);
        await populateStudentTable(students);

        console.log("successfully seeded");
        process.exit(0);
    
    }
    catch(error){
        console.log(error);
        process.exit(1);
    }
}
seedDatabase();