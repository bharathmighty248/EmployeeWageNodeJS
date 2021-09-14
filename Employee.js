const IS_PART_TIME =1;
const IS_FULL_TIME =2;
const PART_TIME_HOURS =4;
const FULL_TIME_HOURS=8;
const WAGE_PER_HOURS=20;
const WORKING_DAYS=20;
const MAX_HOURS=160;

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

function CalculateWage(empHrs)
{
    return empHrs*WAGE_PER_HOURS;
}

let totalEmpHrs=0;
let totalWorkingDays=0;
let empDailyWageArr=new Array();

while(totalEmpHrs<=MAX_HOURS && totalWorkingDays <= WORKING_DAYS)
{
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random()*10)%3;
    let empHrs = GetWorkingHours(empCheck);
    totalEmpHrs+=empHrs;
    empDailyWageArr.push(CalculateWage(empHrs));
}

let empWage= CalculateWage(totalEmpHrs);
console.log("Total Days : "+ totalWorkingDays + 
"\nTotal Hours : " + totalEmpHrs + 
"\nEmployee Wage: " + empWage);