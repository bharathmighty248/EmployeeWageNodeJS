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
let empDailyWageMap=new Map();
let empDailyHrsMap = new Map();

while(totalEmpHrs<=MAX_HOURS && totalWorkingDays <= WORKING_DAYS)
{
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random()*10)%3;
    let empHrs = GetWorkingHours(empCheck);
    totalEmpHrs+=empHrs;
    empDailyWageArr.push(CalculateWage(empHrs));
    empDailyHrsMap.set(totalWorkingDays, empHrs);
    empDailyWageMap.set(totalWorkingDays, CalculateWage(empHrs));
}

let empWage= CalculateWage(totalEmpHrs);
console.log("Total Days : "+ totalWorkingDays + 
"\nTotal Hours : " + totalEmpHrs + 
"\nEmployee Wage: " + empWage);
console.log(empDailyWageMap);

//Array Helper Functions
//UC 7A -Calc total Wage Using Array forEach or reduce method
//Use of forEach Function
let totalEmpWage =0 ;
function sum(dailyWage)
{
    totalEmpWage +=dailyWage;
}
empDailyWageArr.forEach(sum);
console.log(" UC-7A : Emp Wage With ForEach : " + totalEmpWage);

//Use of Reduce Function
function totalWages(totalWage,dailyWage)
{
    return totalWage + dailyWage;
}
console.log(" UC-7A : Emp Wage With reduce : " + empDailyWageArr.reduce(totalWages,0));


//UC-7B Show the Day along with Daily wage  using along array map helper function
let dailyCounter =0 ;
function mapDayWithWage (dailyWage)
{
    dailyCounter++;
    return "Day "+dailyCounter + " = "+dailyWage;
}
let mapDailyWageArr = empDailyWageArr.map(mapDayWithWage);
console.log("UC-7B :Day Along With Daily Wage");
console.log(mapDailyWageArr);

//UC 7C - Show Days When Full Time Wage of 160 were earned
function fulltimeWage(dailyWage)
{
    return dailyWage.includes("160");
}

let fullDayWageArr = mapDailyWageArr.filter(fulltimeWage);
console.log("UC-7C : Daily Wage Filter When FullTime Wage Earned");
console.log(fullDayWageArr);

//UC 7D - Find the first Occurance  When Full Time Wage was earned using Find Function
function findfulltimeWage(dailyWage)
{
    return dailyWage.includes("160");
}
console.log("UC-7D : First time FullTime Wage was Earned on : " +
            mapDailyWageArr.find(findfulltimeWage));

// UC-7E - Check if Every Element of Full Time Wage Is Truely holding Full Time Wage
function isAllfulltimeWage(dailyWage)
{
    return dailyWage.includes("160");
}
console.log("UC-7E : Check All Element have FullTime Wage : "+
            mapDailyWageArr.every(isAllfulltimeWage));

// UC-7F - Check there is any Part Time Wage 
function isAnyfulltimeWage(dailyWage)
{
    return dailyWage.includes("80");
}
console.log("UC-7F : Check If any have Part-Time Wage : "+
            mapDailyWageArr.some(isAnyfulltimeWage));

//UC-7G - Find the number of Days the Employee Worked
function totalDaysWorked(numOfDays,dailyWage)
{
    if(dailyWage > 0)
        return numOfDays+1;
        return numOfDays;
}
console.log("UC-7G : Number of Days the Employee Worked : "+ empDailyWageArr.reduce(totalDaysWorked,0));

console.log(empDailyWageMap);
console.log("Emp wage map total wages : "+ Array.from(empDailyWageMap.values()).reduce(totalWages, 0));

const findTotal = (totalVal, dailyVal) => {
    return totalVal + dailyVal;
}
let count = 0;
let totalHours = Array.from(empDailyHrsMap.values()).reduce(findTotal, 0);
let totalSalary = empDailyWageArr.filter(dailyWage => dailyWage > 0).reduce(findTotal, 0);
console.log("Emp wage with arrow fn : Total Hours : "+ totalHours +" total wage : "+totalSalary);

let nonWorkingDays = new Array();
let partWorkingDays = new Array();
let fullWorkingDays = new Array();
empDailyHrsMap.forEach((value, key, map) => {
    if(value == 8) fullWorkingDays.push(key);
    else if(value == 4) partWorkingDays.push(key);
    else nonWorkingDays.push(key);
});

console.log("Full working days : "+fullWorkingDays);
console.log("Part working days : "+partWorkingDays);
console.log("Non working days : "+nonWorkingDays);