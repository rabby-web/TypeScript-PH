// basic data types

const age: number = 25;
const yourName: string = "Rifat Sarkar";
const isActive: boolean = true;

// array
const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // array

const info: [string, string, number, number, null] = ["Fahim", "Shafayet", 40, 35, null]; // tupple


// object

type PersonType = {
    name: string;
    age: number | string;
    isActive: boolean;
    designation: string;
    company: string;
}

const person: PersonType = {
    name: "Shariful Islam",
    age: "21",
    isActive: true,
    designation: "Next Level Developer",
    company: "Programming Hero"
}



