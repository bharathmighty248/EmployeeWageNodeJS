class EmployeePayrollData{
  
    constructor(...params){
        this.id = params[0];
        this.name = params[1];
        this.salary = params[2];
        this.gender = params[3];
        this.startDate = params[4];
    }
    get id(){return this._id;}
    set id(id){
        if(id > 0) this._id = id;
        else throw "Invalid id";
    }

    get name(){return this._name;}
    set name(name){
        let nameRegex = RegExp("^[A-Z]{1}[a-z]{2,}$");
        if(nameRegex.test(name))this._name = name;
        else throw "Name is Incorrect";
    }

    get salary(){return this._salary;}
    set salary(salary){
        if(salary > 0) this._salary = salary;
        else throw "Enter Valid salary";
    }

    get gender(){return this._gender;}
    set gender(gender){
        let genderRegex = RegExp("^[MF]$");
        if(genderRegex.test(gender))this._gender = gender;
        else throw "Enter Valid gender";
    }

    get startDate(){return this._startDate;}
    set startDate(startDate){
        if(startDate <= new Date())this._startDate = startDate;
        else throw "Enter valid date";
    }

    toString(){
        const options ={ year : "numeric", month : "long", day : "numeric"};
        const empDate = this.startDate === undefined ? "undefined" :
                        this.startDate.toLocaleDateString("en-US", options);
        return "id = "+ this.id + ", name = "+ this.name +", salary = "+this.salary +", gender = "+ this.gender +", startDate = "+ empDate;
    }
}

let employeePayrollData = new EmployeePayrollData(1, "Bharath", 100, "M", new Date());
console.log(employeePayrollData.toString());
try{
let newEmployeePayrollData = new EmployeePayrollData(2, "Raj", 200, "m", new Date());
console.log(newEmployeePayrollData.toString());
}catch(e){
    console.error(e);
}