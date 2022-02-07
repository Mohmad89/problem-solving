"use strict";

// 1) ---------------------
//
//  using the (objLat) function; return the formatted text based on the provided object as the example:
//  let obj = {
//      firstName: 'Jaber',
//      lastName: 'Saleh',
//      age: 67,
//      hobby: 'Gaming and Sleeping'
//  }
//   ===>
//   'my name is Jaber Saleh I am 67 YO, and I love Gaming and Sleeping.'

//  Note that:
//  1- The text template is 'my name is ** ** I am ** YO, and I love **.'
//  2- The first letters of the firstName and lastName should be capital letter

// ------------------------

const objLat = (obj) => {
    let resulte = `my name is ${obj.firstName.charAt(0).toUpperCase()+ obj.firstName.slice(1)} ${obj.lastName.charAt(0).toUpperCase()+ obj.lastName.slice(1)} I am ${obj.age} YO, and I love ${obj.hobby}.`;
    return resulte;
};

// 2) ---------------------
//
//  Rekey is receiving info about applicants for his startup company (as array of objects), containing first name,
//  last name, age and technology they know.
//  Rekey only cares about the full name and the technology if the applicant have more than one year of Experience
//
//  Reformat the array of objects that you are receiving by returning a new array of objects that contain only
//  fullName and tech if the applicant has more than one year of Experience

// EX:
// let cvs = [
//     {
//         firstName: "Jason",
//         LastName: "James",
//         yearsOfExperience: 20,
//         tech: "JS"
//     },
//     {
//         firstName: "Shira",
//         LastName: null,
//         yearsOfExperience: 5,
//         tech: ".Net"
//     },
//     {
//         firstName: "Dmitri",
//         LastName: "Akkerman",
//         yearsOfExperience: 1,
//         tech: "Python"
//     },
//     {
//         firstName: "Isabella",
//         LastName: null,
//         yearsOfExperience: 7,
//         tech: "Java"
//     }
// ]
//
//   ===>

//
// [
//     {
//         fullName: "Jason James",
//         tech: "JS"
//     },
//     {
//         fullName: "Shira",
//         tech: ".Net"
//     },
//     {
//         fullName: "Isabella",
//         tech: "Java"
//     }
// ]

//  Note that:
//  1- Full name is first name + last name
//  2- If one of the names is null dont add it to the full name

// ------------------------
const cvFormatter = (arr) => {
    let fullName = "";
    let arr1 = [];
    let re = {};
    let index = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].firstName === null) {
            fullName = arr[i].lastName
        } else if (arr[i].lastName === null) {
            fullName = arr[i].firstName;
        } else {
            fullName = arr[i].firstName + " " + arr[i].lastName;
        }
        if (arr[i].yearsOfExperience > 1) {
            index++;
            re.fullName = fullName; 
            re.tech = arr[i].tech;
            arr1.push({fullName : fullName,tech : arr[i].tech});
        }
    }
    return arr1;

};
// 3) ---------------------
//
//  Rekey wants to get statistic about the applicants
//  using the array of object you will be getting, return an object that has the following properties
//
// let result = {
//     python_Devs: 0,
//     javaScript_Devs: 0,
//     dotNet_Devs: 0,
//     java_Devs: 0,
//     totalApplicants: 0,
//     rejectedApplicants: 0,
// }
//
// and fill it up based on the results
//  Note that:
//  1- rejectedApplicants are applications that has both the names empty or null and whoever have less than one year of Experience

// ------------------------
const applicationsStatics = (arr) => {
  let python_Devss = 0;
    let javaScript_Devss = 0;
    let dotNet_Devss = 0;
    let java_Devss = 0;
    let totalApplicantss = 0;
    let rejectedApplicantss = 0;
    let result = {};
    for(let i =0; i<arr.length; i++){
        if(arr[i].yearsOfExperience < 1 || arr[i].lastName === null || arr[i].firstName === null){
            rejectedApplicantss++;
        } if(arr[i].tech === "JS"){
            javaScript_Devss++;
        }else if(arr[i].tech === ".Net"){
            dotNet_Devss++;
        }else if(arr[i].tech === "Java"){
            java_Devss++;
        }else if(arr[i].tech === "Python"){
            python_Devss++;
        }
    }
    totalApplicantss = python_Devss + javaScript_Devss + dotNet_Devss + java_Devss;
    result.python_Devs = python_Devss;
    result.javaScript_Devs = javaScript_Devss;
    result.dotNet_Devs = dotNet_Devss;
    result.java_Devs = java_Devss;
    result.totalApplicants = totalApplicantss;
    result.rejectedApplicants = rejectedApplicantss;
    return result;
};

// 4) ---------------------
//
//  A Certain School principal wants to calculate the average score of each class in each grade in the school
//  so he requested a programmer to solve this issue for him instead of doing it again every time
//
//  given the school data, calculate the average score of the students of each class in each grade
//  then change the avg value for the class
//  EX:

let data = {
    SchoolName: "David Academy",
    Capacity: 1000,
    grades: [
        {
            grade: "First",
            numberOFClasses: 3,
            classes: [
                {
                    avg: 0,
                    classNumber: "01",
                    classScores: [
                        89, 87, 45, 48, 89, 65, 21, 54, 78, 62, 51, 54, 50, 49
                    ]
                },
                {
                    avg: 0,
                    classNumber: "02",
                    classScores: [

                    ]
                },
                {
                    avg: 0,
                    classNumber: "03",
                    classScores: [
                        74, 85, 20, 51, 59, 58, 62, 71, 74, 99, 84, 71, 38, 70
                    ]
                },
            ]
        },
        {
            grade: "Second",
            numberOFClasses: 2,
            classes: [
                {
                    avg: 0,
                    classNumber: "01",
                    classScores: [
                        71, 82, 86, 3, 1, 52, 91, 84, 44, 68, 64, 23, 80, 60,
                    ]
                },
                {
                    avg: 0,
                    classNumber: "02",
                    classScores: [
                        86, 39, 71, 17, 61, 76, 60, 54, 42, 65, 49, 75, 96, 70
                    ]
                },
            ]
        },
        {
            grade: "Third",
            numberOFClasses: 2,
            classes: [
                {
                    avg: 0,
                    classNumber: "01",
                    classScores: [
                        11, 12, 28, 78, 57, 3, 54, 72, 14, 19, 88, 74, 68, 58
                    ]
                },
                {
                    avg: 0,
                    classNumber: "02",
                    classScores: [
                        62, 8, 35, 43, 96, 9, 97, 73, 4, 32, 18, 81, 70, 42
                    ]
                },
            ]
        },
        {
            grade: "Forth",
            numberOFClasses: 4,
            classes: [
                {
                    avg: 0,
                    classNumber: "01",
                    classScores: [
                        63, 71, 93, 87, 83, 85, 67, 49, 62, 45, 38, 48, 58, 52
                    ]
                },
                {
                    avg: 0,
                    classNumber: "02",
                    classScores: [
                        100, 45, 70, 75, 87, 63, 39, 46, 54, 68, 74, 96, 52, 49
                    ]
                },
                {
                    avg: 0,
                    classNumber: "03",
                    classScores: [
                        97, 54, 80, 95, 69, 31, 88, 84, 50, 81, 67, 34, 41, 87
                    ]
                },
                {
                    avg: 0,
                    classNumber: "04",
                    classScores: [
                        64, 96, 66, 38, 78, 58, 43, 100, 34, 56, 82, 53, 89, 72
                    ]
                },
            ]
        },
    ],
};

//  Note that:
//  1- This is not the exact data you will be getting every time and the solution should be dynamic
//  2- You need to round the average to the nearest lower number 

const classesAvg = (data) => {
    let sum = 0;
    let counter= 0;
        for(let j= 0; j <data.grades.length; j++) {
            for (let k= 0; k<data.grades[j].classes.length; k++){
                for(let l= 0; l<data.grades[j].classes[k].classScores.length; l++) {
                    sum += data.grades[j].classes[k].classScores[l];
                    counter++;
                }
                data.grades[j].classes[k].avg =Math.floor(sum / counter);
                counter = 0;
                sum= 0;
            }
        }
    return data;
};

module.exports = { objLat, cvFormatter, applicationsStatics, classesAvg };