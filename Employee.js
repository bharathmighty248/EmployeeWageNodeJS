const IS_PART_TIME =1;
const IS_FULL_TIME =2;
const PART_TIME_HOURS =4;
const FULL_TIME_HOURS=8;
const WAGE_PER_HOURS=20;
const WORKING_DAYS=20;

function GetWorkingHours(empCheck)
{
    switch(empCheck)
    {
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
}

let empHrs=0;
for(let day=0;day<WORKING_DAYS;day++){
    let empCheck = Math.floor(Math.random()*10)%3;
    empHrs += GetWorkingHours(empCheck);
}
let empWage= empHrs * WAGE_PER_HOURS;
console.log("Employee Wage: " + empWage);