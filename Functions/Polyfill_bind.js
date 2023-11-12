let person = {
    firstName: 'RS',
    lastName: 'Mohamed',
}

function printMyName(state, city){
    console.log("Name is " + this.firstName + " " + this.lastName + "from "+ state + ", " + city);
}
const print = printMyName.bind(person, "TN");
print("CHN")

Function.prototype.customBind = function(...bindArgs){
    let obj = this;
    return function(...fnArgs){

        let params = [...bindArgs.slice(1), ...fnArgs];
        obj(bindArgs[0],...params);
    }
}
const myCustomPrint = printMyName.bind(person, "TN");
myCustomPrint("CHN");