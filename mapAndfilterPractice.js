
let firstStudents = ['adam',"bob","tommy","oussama","billy"]
let firstGrades = [5,3,7,6,10]
firstStudents.forEach((student,index) => {
console.log(student+" has a grade of "+firstGrades[index])
});

let firstNumbers = [1,2,3,4,5,6,7,8,9,10]


let doubledNumbers = firstNumbers.map(num => num * 2);
console.log(doubledNumbers)

let oddEven= firstNumbers.map((number)=>{
    if(number%2==0){
        return number + " is Even"
    }
    else{
        return number + " is odd"
    }
})
console.log(oddEven)

let squred = firstNumbers.map((number)=>{
    return  "square root of "+number+" is: "+ Math.sqrt(number) 
})
console.log(squred)

let power = firstNumbers.map((number)=>{
    return Math.pow(number,15)
})
console.log(power)

let students = ['adam',"bob","tommy","oussama","billy"]
let grades = [5,3,7,6,10]
let newStudent= students.map((student,index)=>{
    let obj= {
        name:student,
        grade: grades[index]
    }
    return obj
})

let learners = newStudent.map((student)=>{
 student.school ="perscholas"  
if(student.grade >5){
    student.passed=true
}
else{
    student.passed=false
}
student.test=student.grade>5? true: false
return student
})

//newStudent.push(nextStudents);
console.log(learners)

let numbers=[5,4,-8,5,85,-85,6,86,89,-5,6,8]

let newNumbers=numbers.map((number)=>{

        if(number>0 && number%2===0){
            obj={
            number:number,
            isEven:true,
            sign:"Positive"
        }
        }
        else{
            obj={
            number:number,
            isEven:false,
            sign:"Negative"
        }
        }
    return obj
    
})
console.log(newNumbers)

let anotherNumber=[2,3,4,5,4,4,564,54,6959,99]
let filterNumbers=anotherNumber.filter((number)=>{
    // if(number % 2==0){
    //     return true
    // }
    // else{
    //     return false
    // }
    // return number
    return number%2 !==0;
})
console.log(filterNumbers)

let lastStudents =  [
      { name: 'adam', grade: 5 },
      { name: 'bob', grade: 3 },
      { name: 'tommy', grade: 7 },
      { name: 'oussama', grade: 6 },
      { name: 'billy', grade: 10 }
    ]
    
    let failedStudent=lastStudents.filter((student)=>{
        return student.grade>5 && student.name[0]==="b"
    })
    console.log(failedStudent)





    let ListedStudents = [{
        name:"Alice",
        age:20,
        grades:[
            85,
            95,
            88
        ]},
        {
        name:"bob",
        age:22,
        grades:[
            78,
            81,
            79
        ]},
        {
        name:"charlie",
        age:23,
        grades:[
           95,
           90,
           93
        ]
    },
    {
        name:"David",
        age:21,
        grades:[
            70,
            75,
            72
        ]
    
    }]
   ListedStudents.forEach(student =>{
        let avg=0
        student.grades.forEach(grade=>{
            avg += grade
        })
    student.averageGrade =Math.floor(avg/student.grades.length)
    console.log(avg)
    console.log(student.name)    
    })
    console.table(ListedStudents)

   let studentsummary = ListedStudents.map ((student) =>{
    let summary = student.name + "is " + student.age+ " years old and has and average grade of : "+ student.averageGrade
    return summary
})
console.log(studentsummary)

// let honorRoll = students.filter((student)=>{
//     let obj = student.averageGrade >=85

//     return "student with honor roll " + student.name + " has a grade of "+obj
// })
// console.log(honorRoll)
const honorRoll = ListedStudents.filter(student => student.averageGrade >= 85);
console.table(honorRoll);
