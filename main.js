/* //Practice: Doctors
Lightning Exercise 1: Write a factory function that creates an object that represents a doctor. The function should accept three arguments. */


//First create Factory Function so you can create the object that will represent your data
const createDoctor = (name, specialty, address) => {
    return {
        "doctorName": name,
        "doctorSpecialty": specialty,
        "practiceAddress": address
    }
}

//now create a Doctor using the factory function so you can attach your own data 
const doctorMario = createDoctor("Doctor Mario", "Magic", "Mushroom Kingdom")
console.log("Doctor Mario", doctorMario);


/* Lightning Exercise 2: Write a factory function that creates an object that represents a pet. The function should accept two arguments.

Pet name
Pet breed
Invoke the factory function 3 times and place each animal in an array stored in a variable named BowWowKennels */

const createPet = (name, breed) => {
    return {
        "petName": name,
        "petBreed": breed
    }
}

const BowWowKennels = [
    createPet("Melly", "Ragdoll"),
    createPet("Cocoa", "Siamese"),
    createPet("Luna", "Maine Coon")

]

console.log("BowWowKennels", BowWowKennels);