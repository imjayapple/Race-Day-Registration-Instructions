//Generate a random race number, a whole number between 0 (inclusive) & 1,000 (exclusive)
let raceNumber = Math.floor(Math.random() * 1000);

//Boolean value assigned to variable to determine early registraiton or late
const earlyRegistration = false;

//Capture the age of a runner and set it equal to a number
const age = 21;

//Implement a control flow statement, here, determine if the applicant registered early and is an Adult,
//if yes then add +1000 to their race number
if (earlyRegistration && age >= 21)
    raceNumber += 1000;

    