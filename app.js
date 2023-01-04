//Generate a random race number, a whole number between 0 (inclusive) & 1,000 (exclusive)
let raceNumber = Math.floor(Math.random() * 1000);

//Boolean value assigned to variable to determine early registraiton or late
const earlyRegistration = false;

//Capture the age of a runner and set it equal to a number
const age = 21;

//Implement a control flow statement, here, determine if the applicant registered early and is an Adult,
//if yes then add +1000 to their race number
if (earlyRegistration && age >= 21) {
    raceNumber += 1000;
}

//Provide race time and race number to specific runners that registered early and are adults.
if (earlyRegistration && age >= 21) {
    console.log(`Your race time will start at 9:30AM, and your race number is: ${raceNumber}`);
}

//Provide race time and race number to specific runners that registered late and are adults.
else if(!earlyRegistration && age >= 21) {
    console.log(`Your race time will start at 11:00AM, and your race number is: ${raceNumber}`)
}

//Provide race time and race number to specific runners that are younger than adults.
else if(age < 21) {
    console.log(`Your race time will start at 12:00PM, and your race number is: ${raceNumber}`)
}

//Catchall for runners that do not submit correct information
else {
    console.log("Please approach the registration desk for assistance")
}