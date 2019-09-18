export {}
interface Person {
  firstName: string
  lastName: string
}

function greeter(person: Person): string {
  return "Hello, " + person.firstName + ' ' + person.lastName
}

let user = {
  firstName: "Jane User",
  lastName: "Jack"
}

console.log(greeter(user))
