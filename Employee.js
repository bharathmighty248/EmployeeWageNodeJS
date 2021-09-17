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
let empDailyHrsAndWageArr = new Array();

while(totalEmpHrs<=MAX_HOURS && totalWorkingDays <= WORKING_DAYS)
{
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random()*10)%3;
    let empHrs = GetWorkingHours(empCheck);
    totalEmpHrs+=empHrs;
    empDailyHrsAndWageArr.push(
        {
            dayNum: totalWorkingDays,
            dailyHours: empHrs,
            dailyWage: CalculateWage(empHrs),
            toString(){
                return "\nDay "+ this.dayNum+ " working hours : "+ this.dailyHours + " wage : "+ this.dailyWage
            },
        }
    );
}

console.log(empDailyHrsAndWageArr.toString());

let totalWages = empDailyHrsAndWageArr.filter(dailyHrsAndWage => dailyHrsAndWage.dailyWage > 0)
                                      .reduce((totalWages, dailyHrsAndWage) => totalWages += dailyHrsAndWage.dailyWage, 0);

let totalHours = empDailyHrsAndWageArr.filter(dailyHrsAndWage => dailyHrsAndWage.dailyWage > 0)
                                      .reduce((totalHours, dailyHrsAndWage) => totalHours += dailyHrsAndWage.dailyHours, 0);

console.log("Total Hours : "+ totalHours+ " total wage : "+ totalWages);  
console.log("\nFull work days :");
empDailyHrsAndWageArr.filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 8)
                     .forEach(dailyHrsAndWage => process.stdout.write(dailyHrsAndWage.toString()));

let partWorkingDayStrArr = empDailyHrsAndWageArr.filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 4)
                                                .map(dailyHrsAndWage => dailyHrsAndWage.toString());
console.log("\n\nPart working days : \n" + partWorkingDayStrArr);

let nonWorkingDayNums = empDailyHrsAndWageArr.filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 0)
                                             .map(dailyHrsAndWage => dailyHrsAndWage.dayNum);
console.log("\nNon working days : "+ nonWorkingDayNums);