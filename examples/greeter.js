function greeter(person) {
    return "Hello, " + person.firstName + ' ' + person.lastName;
}
var user = {
    firstName: "Jane User",
    lastName: "Jack"
};
console.log(greeter(user));
