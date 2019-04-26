let raceNumber = Math.floor(Math.random() * 1000);

let early = false; 

let age = 45;

if (early && age > 18) {
  (raceNumber += 1000);
}; 

if (age > 18 && early) {
  console.log (`Your race number is ${raceNumber} and you will race at 09:30 am.`);
} else if (age > 18 && !early) {
  console.log (`Your race number is ${raceNumber} and you will race at 11:00 am.`);
} else if (age < 18) {
  console.log (`Your race number is ${raceNumber} and you will race at 12:30 am.`); 
} else {
  console.log ('We invite you to go to the registration desk.'); 
}; 



/*Age: 
There are adult runners (over 18 years of age) and youth runners (under 18 years of age). They can register early or late.*/

/*Race number:
Early adults receive a race number at or above 1000.
All others receive a number below 1000.*/

/*Start time:
Adult registrants run at 9:30 am or 11:00 am.
Registration early adults run at 9:30 am.
Registration late adults run at 11:00 am.
Youth registrants run at 12:30 pm (regardless of registration).*/

/*Runners are assigned a race number and start time based on their age and registration.*/
/*But we didnt plan for runners that are exactly 18! Well handle that by the end of the project.*/