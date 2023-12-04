class Person {
    constructor(firstName, lastName, age, country, city) {
      console.log(this) // Check the output from here
      this.firstName = firstName
      this.lastName = lastName
      this.age = age
      this.country = country
      this.city = city
    }
  }
  
  const person1 = new Person('ravi', 'kumar', 25, 'india', 'namakkal')
  
  console.log(person1)


  //calculate the uber price


  let baseFee = .44
let cities = ["thiruchengode", "namakkal", "tamilnadu", ]
let uberRates = [5, 10, 15]
let customerName = "ravi" 
let customerCity = "thiruchengode"
console.log("Hello", customerName+ ", welcome to the Uber Rate Program")
function getRate(customerCity) {
    function uberRate(customerCity, index) {
        let finalRate = (uberRates[index]) * baseFee
    return finalRate
  }
  console.log(customerCity, "rate is:", uberRate(customerCity, cities.indexOf(customerCity)))
}
getRate(customerCity)