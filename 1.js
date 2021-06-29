class Department {
    constructor(name){
        this.name = name;
    }

    printName() {
        console.log("Department name: " + this.name);
    }

    printMeeting() {
        console.log("The Accounting Department meets each Monday at 10am.");
    }
}

class AccountingDepartment extends Department {
    generateReports() {
        console.log("Generating accounting reports...");
    }
}

const ACDepartment = new AccountingDepartment("Rajesh");
ACDepartment.printName();
ACDepartment.printMeeting();
ACDepartment.generateReports();