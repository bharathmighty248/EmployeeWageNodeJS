class EmployeePayrollData{

    constructor(...params){
        this.id = params[0];
        this.name = params[1];
        this.salary = params[2];
        this.gender = params[3];
        this.startDate = params[4];
    }
    get id(){return this._id;}
    set id(id){this._id = id;}

    get name(){return this._name;}
    set name(name){
        let nameRegex = RegExp("^[A-Z]{1}[a-z]{2,}$");
        if(nameRegex.test(name))this._name = name;
        else throw "Name is Incorrect";
    }

    get salary(){return this._salary;}
    set salary(salary){this._salary = salary;}

    get gender(){return this._gender;}
    set gender(gender){this._gender = gender;}

    get startDate(){return this._startDate;}
    set startDate(startDate){this._startDate = startDate;}

    toString(){
        const options ={ year : "numeric", month : "long", day : "numeric"};
        const empDate = this.startDate === undefined ? "undefined" :
                        this.startDate.toLocaleDateString("en-US", options);
        return "id = "+ this.id + ", name = "+ this.name +", salary = "+this.salary +", gender = "+ this.gender +", startDate = "+ empDate;
    }
}

let employeePayrollData = new EmployeePayrollData(1, "Bharath", 100);
console.log(employeePayrollData.toString());
try{
    let newEmployeePayrollData = new EmployeePayrollData(2, "Raj", 200, "M", new Date());
    console.log(newEmployeePayrollData.toString());
    }catch(e){
        console.error(e);
    }