/* //Practice: Doctors
Lightning Exercise 1: Write a factory function that creates an object that represents a doctor. The function should accept three arguments. */


//First create Factory Function so you can create the object that will represent your data
const createDoctor =  (name, specialty, address) => ({
    "doctorName": name,
    "doctorSpecialty": specialty, 
    "practiceAddress": address
})

//now create Doctor using the factory function so you can attach your own data 
const doctor = createDoctor("Doctor Mario", "Magic", "Mushroom Kingdom")
console.log(doctor);


/* Lightning Exercise 2: Write a factory function that creates an object that represents a pet. The function should accept two arguments.

Pet name
Pet breed
Invoke the factory function 3 times and place each animal in an array stored in a variable named BowWowKennels */



const createPet = ("petName", "petBreed") => ({
"name": petName,
"breed": petBreed


})