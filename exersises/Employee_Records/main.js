var employee =[]
function Emploee(name, job_title, salary, status= "Full Time"){
    this.name =  name;
    this.job_title=job_title;
    this.salary=salary;
    this.status=status;
    this.printEmployeeForm = function(){
        console.log("Name: "+ name +"," + " Job Title: " + job_title + "," + " Salary: " + salary + ","+ " Status: " + status);
}
    
}
var epl1 = new Emploee("Ivan", "student", 5000)
var epl2 = new Emploee("Dima", "Teacher", 50000, "Contract")
var epl3 = new Emploee("Natasha", "Managert", 445000, "Full-Time")
employee.push(epl1,epl2,epl3)
epl1.printEmployeeForm()
epl2.printEmployeeForm()
epl3.printEmployeeForm()