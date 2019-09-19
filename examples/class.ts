class Animal {
  private readonly name: string
  protected age: number
  constructor (name: string, age: number) {
    this.name = name
    this.age = age
  }
  movie (distanceInMeters: number = 0) {
    console.log(`${this.name} moved ${distanceInMeters} m`)
  }
}

class Snake extends Animal {
  constructor (name: string, age: number) {
    super(name, age)
  }
  movie(distanceInMeters: number = 10) {
    console.log(this.age)
    super.movie(distanceInMeters)
  }
}

let sam: Animal = new Snake('Sammy', 23)
// sam.name = 'Jack'
sam.movie()

class Person {
  name: string
  constructor(name: string) {
    this.name = name
  }
  get getName() {
    console.log('getName')
    return this.name
  }
  set setName(name: string) {
    console.log('setName')
    this.name = name
  }
}

let p: Person = new Person('Jack')
console.log(p.name)
p.name = 'Tom'
console.log(p.name)
