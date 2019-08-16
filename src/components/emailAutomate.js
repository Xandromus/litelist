const fs = require('fs');
const csv = require('csvtojson');

let instructorArray = [];
let mentorArray = [];
let finalArray = [];

function combineInput(inputOne, inputTwo) {
  csv({ output: "line",
  noheader:true })
    .fromFile(inputOne)
    .then((jsonObj) => {
      jsonObj.forEach(email => {
        instructorArray.push(email)
      })
    })
.then(() => {
  csv({ output: "line",
  noheader:true })
    .fromFile(inputTwo)
    .then((jsonObj) => {
      jsonObj.forEach(email => {
        mentorArray.push(email)
      })
    })
    .then(() => {
      finalArray = instructorArray.concat(mentorArray)
    })
    .then(() => {
      writeOutput(finalArray)
    })
})
}

function writeOutput(input) {
    let output = []
    
    input.forEach(email => {
        if (!output.includes(email)) {
            output.push(email);
            if (email.includes("+")) {
                let tagSplit = email.split("+");
                let atSplit = tagSplit[tagSplit.length - 1].split("@");
                let user = tagSplit[0];
                let domain = atSplit[atSplit.length - 1];
                let newEmail = user + "@" + domain;
                if (!output.includes(newEmail)) {
                output.push(newEmail)
                }
            }
        }
        
    });
    let jsonOutput = JSON.stringify(output, null, 4)
    fs.writeFileSync("emailOutput.json", jsonOutput)
}


combineInput('instructorEmails.csv', "mentorEmails.csv");