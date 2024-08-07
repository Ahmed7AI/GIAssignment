/*
//Assignment no 2
let fname:string() = 'Khalid';
console.log(`Hello ${fname},would you like to learn some Python today?`)

//Assignment no 3
let cname:string='Danish ahmed qureshi';
console.log(cname.toLowerCase());
console.log(cname.toUpperCase());
console.log("Titlecase:", toTitleCase(cname));

//Assignment no 4
let quote:string='A person who never made a mistake never tried anything new';
let author:string="Albert Einstein"
console.log(`${author} once said,"${quote}"`);

//Assignment no 5
 let quote:string ="A person who never made a mistake never tried anything new"
 let famousperon:string="Albert Einstein"
 let messageN :string=`${famousperon} once said,"${quote}"`;
console.log(messageN)

//Assignment no 6
let namewithwhitespace: string = "\t \n Danish Ahmed Qureshi \n\t ";
console.log("Name With Whitespace:", namewithwhitespace);
let strippedName: string = namewithwhitespace.trim();
console.log("Stripped name:", strippedName);

//Assignment no 7
let add=6+2;
let sub=10-2;
let mul=4*2;
let div=16/2;
console.log('Ans:', add);
console.log('Ans:',sub);
console.log('Ans:',mul);
console.log('Ans:',div);

//Assignment no 8
//Programme written by Danish Ahmed
// Today is April02,2024

console.log(5+3)
console.log(10-2)
console.log(4*2)
console.log(16/2)

//Assignment no 9
//Programme written by Danish Ahmed
// Today is April02,2024
let favNum: number =36;
let message:string=`My favourite number is ${favNum}.;`
console.log(message)

//Assignment no 10
//Programme written by Danish Ahmed
// Today is April02,2024
//let favNum: number =7;
//let message:string=`My favourite number is ${favNum}.;`
//console.log(message)

//Assignment no 11
let names: string[]= ['Asad','Khalid','Saeed'];
names.forEach(name => console.log(name));

//Assignment no 12
let names: string[]= ['Asad','Khalid','Saeed'];
names.forEach(name => console.log(`salam,${name}! My friend.`));

//Assignment no 13
let transport: string[]= ['Honda','Superpower','Hero'];
transport.forEach(name => console.log(`I would like to own ${name}!.`));

// Assignment no 14
let guest:string[]=["Khalid","Raheel","Fawad"];
guest.forEach(guest=>console.log(`Dear${guest},\nYou are Welcome to dinner with us.\n\nSincerely,\n\n\nDanish Ahmed`));

//Assignment no15
let guestn:string[]=["Khalid","Raheel","Asad"];
guestn.forEach(guestn=>console.log(`Dear${guestn},\nYou are Welcome to dinner with us.\n\nSincerely,\n\n\nDanish Ahmed`));
console.log("newlist:");
guestn.forEach(guestn=>console.log(guestn));
console.log("\nSecond set of Invitation message:");
guestn.forEach(guestn=>console.log(`Dear${guestn},\nYou are Welcome to dinner with us.\n\nSincerely,\n\n\nDanish Ahmed`));

//Assignment 16
let guestList: string[] = ["Afshaan Iqbal", "Maria Overseas", "Nelum Mandela"];

// Print the initial guest list
console.log("Initial Guest List:");
guestList.forEach(guest => console.log(guest));

// Add three more guests
guestList.push("Ghazal Aftab", "Roshan Parks", "Abida Love");

// Print the updated guest list
console.log("\nUpdated Guest List:");
guestList.forEach(guest => console.log(guest));

//Assignment 17
let guestListNew: string[] = ["Asad", "Arsalan ", "Jawed", "Maria ", "Nelum ", "Aleema Tahir"];

// Print the updated final guest list
console.log("Updated Final Guest List:");
let finalGuestList = guestListNew.join(', ');

console.log(finalGuestList);

// Print message indicating that only two people can be invited for dinner
console.log("\nDue to the limited space available, we can only invite two people for dinner.");

// Array of initial guests
let guestList1: string[] = ["Asad", "Arsalan ", "Jawed", "Maria ", "Nelum ", "Aleema Tahir"];

// Print the updated final guest list
console.log("Updated Final Guest List:");
console.log(guestList1.join(', '));

// Remove guests until only two names remain
while (guestList1.length > 2) {
    // Remove the last guest from the list
    const removedGuest = guestList1.pop();
    // Print a message to the removed guest
    console.log(`Sorry ${removedGuest}, we can't invite you to dinner.`);
}

// Array of initial guests
let guestListNeew: string[] = ["Asad", "Arsalan ", "Jawed", "Maria ", "Nelum ", "Aleema Tahir"];

// Print the updated final guest list
console.log("Updated Final Guest List:");
console.log(guestListNeew.join(', '));

// Remove guests until only two names remain
while (guestListNeew.length > 2) {
    // Remove the last guest from the list
    const removedGuest = guestListNeew.pop();
    // Print a message to the removed guest
    console.log(`Sorry ${removedGuest}, we can't invite you to dinner.`);
}

// Print a message to the remaining two guests
guestListNeew.forEach(guest => {
    console.log(`Dear ${guest}, you're still invited to dinner. Please join us!`);
});

//Assignment no 18
let placesToVisit: string[] = [
    "Kyoto, Japan",
    "Machu Picchu, Peru",
    "Santorini, Greece",
    "Paris, France",
    "Great Barrier Reef, Australia"
];

// Print the list of places to visit
console.log("Places I'd Like to Visit:");
placesToVisit.forEach(place => console.log(place));

// let placesToVisit: string[] = [
//     "Kyoto, Japan",
//     "Machu Picchu, Peru",
//     "Santorini, Greece",
//     "Paris, France",
//     "Great Barrier Reef, Australia"
// ];

// Print the list of places to visit in its original order
console.log("Places I'd Like to Visit (Original Order):");
for (let place of placesToVisit) {
    console.log(place);
}
let sortedPlaces: string[] = [...placesToVisit];

// Sort the copy in alphabetical order
sortedPlaces.sort();

// Print the sorted array without modifying the original list
console.log("Places I'd Like to Visit (Alphabetical Order):");
for (let place of sortedPlaces) {
    console.log(place);
}

//let sortedPlaces: string[] = [...placesToVisit];

// Sort the copy in alphabetical order
sortedPlaces.sort();

// Print the sorted array without modifying the original list
console.log("Places I'd Like to Visit (Alphabetical Order):");
for (let place of sortedPlaces) {
    console.log(place);
}

// Print the original array to show it is still in its original order
console.log("\nOriginal Order of Places to Visit:");
for (let place of placesToVisit) {
    console.log(place);
}

let reverseSortedPlaces: string[] = [...placesToVisit];

// Sort the copy in reverse alphabetical order
reverseSortedPlaces.sort((a, b) => b.localeCompare(a));

// Print the sorted array without modifying the original list
console.log("Places I'd Like to Visit (Reverse Alphabetical Order):");
for (let place of reverseSortedPlaces) {
    console.log(place);
}

//let reverseSortedPlaces: string[] = [...placesToVisit];

// Sort the copy in reverse alphabetical order
reverseSortedPlaces.sort((a, b) => b.localeCompare(a));

// Print the sorted array without modifying the original list
console.log("Places I'd Like to Visit (Reverse Alphabetical Order):");
for (let place of reverseSortedPlaces) {
    console.log(place);
}

// Print the original array to show it is still in its original order
console.log("\nOriginal Order of Places to Visit:");
for (let place of placesToVisit) {
    console.log(place);
}

placesToVisit.reverse();

// Print the reversed array to show the changed order
console.log("Reversed Order of Places to Visit:");
for (let place of placesToVisit) {
    console.log(place);
}

placesToVisit.sort();

// Print the sorted array to show the changed order
console.log("Sorted Order of Places to Visit:");
for (let place of placesToVisit) {
    console.log(place);
}

placesToVisit.sort((a, b) => b.localeCompare(a));

// Print the sorted array to show the changed order
console.log("Reverse Alphabetical Order of Places to Visit:");
for (let place of placesToVisit) {
    console.log(place);
}

//Assignment no 19
let guestListNew: string[] = ["Asad", "Arsalan ", "Jawed", "Maria ", "Nelum ", "Aleema Tahir"];

// Print the number of people invited to dinner
console.log(`Number of people invited to dinner: ${guestListNew.length}`);

//Assignment no 20
let cities: string[]= ['Karachi','Lahore','Islamabad'];
cities.forEach(name => console.log(`I would like to live in ${name}!.`));

//Assignment no 21
interface Country{
    name:string;
    population:number;
    capital:string;
    city?:string;
}
const countries:Country[] = [{name:"Pakistan",
population:237587900,
capital:"Islamabad",

},
{
name:"Bangladesh",
population:137587900,
capital:"Dhaka",
city:"Chatagong"
}
];
console.log("listofcountries");
countries.forEach(Country => {console.log(`country: ${Country.name},Population: ${Country.population},Capital:${Country.capital},City:${Country.city}`)
    
});

//Assignment no 22
const languages: string[] = [
    "JavaScript",
    "TypeScript",
    "Python",
    "Java",
    "C++",
    "C#",
    "Swift",
    "Go",
    "Ruby",
    "Rust"
];

// Intentional Error: Accessing an index that is out of bounds
console.log(languages[20]); // Accessing index 20, which is out of bounds

//Assignment 23
let car = 'subaru';

console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');

console.log("Is car == 'honda'? I predict False.");
console.log(car == 'honda');

console.log("Is car != 'toyota'? I predict True.");
console.log(car != 'toyota');

console.log("Is car === 'subaru'? I predict True.");
console.log(car === 'subaru');

console.log("Is car !== 'subaru'? I predict False.");
console.log(car !== 'subaru');

console.log("Is car !== '5'? I predict True."); // Corrected comparison
console.log(car !== '5');

console.log("Is car > 'ford'? I predict True.");
console.log(car > 'ford');

console.log("Is car < 'volvo'? I predict False.");
console.log(car < 'volvo');

console.log("Does car have 6 characters? I predict False."); // Modified statement
console.log(car.length == 6);

console.log("Does car start with 's'? I predict True."); // Alternative approach
console.log(car[0] === 's');

//Assignment 24
const string1: string = "Hello";
const string2: string = "hello";
console.log(string1 === string2);   //  false
console.log(string1 !== string2);   //  true
console.log("Equality test: Is 'apple' == 'apple'? I predict True.");
console.log('apple' == 'apple'); // True
console.log("Inequality test: Is 'apple' != 'orange'? I predict True.");
//console.log("apple" != "orange"); // True
console.log("Lowercase test: Is 'HELLO' converted to lowercase 'hello'? I predict True.");
console.log('HELLO'.toLowerCase() == 'hello'); // True
console.log("Numerical equality test: Is 5 == 5? I predict True.");
console.log(5 == 5); // True
console.log("Numerical inequality test: Is 10 != 5? I predict True.");
//console.log(10 != 5); // True
console.log("Greater than test: Is 10 > 5? I predict True.");
console.log(10 > 5); // True
console.log("Less than test: Is 5 < 10? I predict True.");
console.log(5 < 10); // True

console.log("Greater than or equal to test: Is 3 >= 3? I predict True.");
console.log(3 >= 3); // True

console.log("Less than or equal to test: Is 5 <= 3? I predict False.");
console.log(5 <= 3); // False

console.log("AND operator test: Is (5 > 3) && (7 < 10)? I predict True.");
console.log((5 > 3) && (7 < 10)); // True

console.log("OR operator test: Is (5 > 3) || (5 > 10)? I predict True.");
console.log((5 > 3) || (5 > 10)); // True
const fruits = ['apple', 'banana', 'orange'];
console.log("Array inclusion test: Is 'banana' in the array ['apple', 'banana', 'orange']? I predict True.");
console.log(fruits.includes('banana')); // True
console.log("Array exclusion test: Is 'grape' not in the array ['apple', 'banana', 'orange']? I predict True.");
console.log(!fruits.includes('grape')); // True

//Assignment 25

// Define the variable alien_color and assign it a value
let alien_color: string = 'green';

// Check if the alien's color is green
if (alien_color === 'green') {
    // If it is, print a message that the player just earned 5 points
    console.log("The player just earned 5 points.");
}

// Assigning different values to alien_color
alien_color = 'yellow';

// Check if the alien's color is green
if (alien_color === 'green') {
    // If it is, print a message that the player just earned 5 points
    console.log("The player just earned 5 points.");
}

alien_color = 'red';

// Check if the alien's color is green
if (alien_color === 'green') {
    // If it is, print a message that the player just earned 5 points
    console.log("The player just earned 5 points.");
}

//Assignment 26
let alien_color: string = 'green';

if (alien_color === 'green') {
    console.log("The player just earned 5 points for shooting the alien.");
} else {
    console.log("The player just earned 10 points.");
}

// Program version where alien's color is not green
alien_color = 'yellow'; // You can change this to 'red' for testing the else block

if (alien_color === 'green') {
    console.log("The player just earned 5 points for shooting the alien.");
} else {
    console.log("The player just earned 10 points.");
}
//Assignment 27
let alien_color_1: string = 'green';

if (alien_color_1 === 'green') {
    console.log("The player earned 5 points.");
} else if (alien_color_1 === 'yellow') {
    console.log("The player earned 10 points.");
} else if (alien_color_1 === 'red') {
    console.log("The player earned 15 points.");
}

// Version 2: Alien color is yellow
let alien_color_2: string = 'yellow';

if (alien_color_2 === 'green') {
    console.log("The player earned 5 points.");
} else if (alien_color_2 === 'yellow') {
    console.log("The player earned 10 points.");
} else if (alien_color_2 === 'red') {
    console.log("The player earned 15 points.");
}

// Version 3: Alien color is red
let alien_color_3: string = 'red';

if (alien_color_3 === 'green') {
    console.log("The player earned 5 points.");
} else if (alien_color_3 === 'yellow') {
    console.log("The player earned 10 points.");
} else if (alien_color_3 === 'red') {
    console.log("The player earned 15 points.");
}

//Assignment 28
let age:number=74;
if(age<=2){
    console.log("the person is a baby")
}
else if(age<=4) {
    console.log("the person is a toddler.")
}
 else if(age<=13) {
        console.log("the person is a kid.")
  }
   else if(age<=20) {
        console.log("the person is a teenager")
  }
   else if(age<=65) {
        console.log("the person is a adult.")
  }
else{
    console.log("the person is an elder.")
}
console.log(age);

//Assignment 29
let favourite_fruits:string[]=["Mango","Orange","Pineapple"];
if(favourite_fruits.includes("Mango")){
    console.log("you really like mangoes.");
}
if(favourite_fruits.includes("Orange")){
    console.log("you really like Oranges.");
}
if(favourite_fruits.includes("Pineapple")){
     console.log("you really like Pineapples.");
}
 if(favourite_fruits.includes("Tomato")){
     console.log("you really like tomatoes.");
 }
 if(favourite_fruits.includes("guava")){
    console.log("you really like guavas.");
}

//Assignment 30
let usernames:string[]=['Admin','Asad','Khalid','Baber','Saad'];
usernames.forEach(username=>{
    if(username='Admin'){
        console.log("Hello admin, Would you like to see a status report?");
    }else{
        console.log(`Hello${username}, Thank you for logging in again`);
    }
})

//Assignment 31
let notEmptylist:string[]=['Admin','Asad','Khalid','Baber','Saad'];
if(notEmptylist.length === 0){
    console.log("We need to find some new users!");
}
let emptyList: string[]=[]
if(emptyList.length===0){
    console.log("We need to find some users!");
}
let users :string[]=['Admin','Asad','Khalid','Baber','Saad'];
users.splice(0,users.length);
if(users.length===0){
    console.log("We need to find some vip users!");
}

//Assignment no 32
// List of current users
const current_users: string[] = ['john', 'alice', 'bob', 'emily', 'charlie'];

// List of new users
const new_users: string[] = ['emily', 'dave', 'john', 'sarah', 'bob'];

console.log("List of current users:", current_users);
console.log("List of new users:", new_users);

for (const new_user of new_users) {
    // Convert both current and new usernames to lowercase for case-insensitive comparison
    const lowercase_new_user = new_user.toLowerCase();
    const lowercase_current_users = current_users.map(user => user.toLowerCase());

    // Check if the lowercase version of the new username is in the list of lowercase current usernames
    if (lowercase_current_users.includes(lowercase_new_user)) {
        console.log(`Username '${new_user}' is not available. Please enter a new username.`);
    } else {
        console.log(`Username '${new_user}' is available.`);
    }
}
const lowercase_current_users: string[] = current_users.map(user => user.toLowerCase());

// Loop through new_users to check if each username is available
for (const new_user of new_users) {
    // Convert the new username to lowercase for case-insensitive comparison
    const lowercase_new_user: string = new_user.toLowerCase();

    // Check if the lowercase version of the new username is in the list of lowercase current usernames
    const index = lowercase_current_users.indexOf(lowercase_new_user);
    if (index !== -1) {
        console.log(`Username '${new_user}' is not available. Please enter a new username.`);
    } else {
        console.log(`Username '${new_user}' is available.`);
    }
}

//Assignment no 33
let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Loop through the array
for (let number of numbers) {
    // Check the last digit of the number to determine the ordinal ending
    let ordinal: string;
    if (number === 1) {
        ordinal = 'st';
    } else if (number === 2) {
        ordinal = 'nd';
    } else if (number === 3) {
        ordinal = 'rd';
    } else {
        ordinal = 'th';
    }
    
    // Print the number with the proper ordinal ending
    console.log(`${number}${ordinal}`);
}

//Assignment no 34
const pizzas: string[] = ['Pepperoni', 'Margherita', 'Supreme'];

// Loop through the array and print each pizza name
for (let i = 0; i < pizzas.length; i++) {
    console.log(pizzas[i]);
}
for (let i = 0; i < pizzas.length; i++) {
    console.log(`I like ${pizzas[i]} pizza.`);
}
console.log("I really love pizza!");

//Assignment 35
var animals = ["Animal1", "Animal2", "Animal3"];
console.log("Animals:");
animals.forEach(function (animal){return console.log(animal);});
console.log("\nAnimal Characteristics:");
animals.forEach(function(animal){
console.log("A".concat(animal.toLowerCase(), "would make a great pet."));
});
console.log("\nWhat these animals have in common :");
console.log("Any of these animals would make a great pet!");

//Assignment 36
function make_shirt(Size: string, Message: string): void{
    console.log(`The shirt size is ${Size} and it has the message: "${Message}".`);
}
make_shirt('Large','This is Assignment #36');

//Assignment 37
function  make_shirt(size: string = 'Large', message: string = 'I love typescript' ): void{
console.log(`The shirt size is ${size} and it has the message:"${message}".`);
}
make_shirt();
make_shirt('Medium');
make_shirt('small','Keep Growing!');

//Assignment 38
function describe_city(city: string, country: string = "Pakistan"):void{
    console.log('${city} is in ${country}.');
}
describe_city("Karachi");
describe_city("Islamabad");
describe_city("");

//Assignment 39
function city_country(city: string, country: string):string{
    return`"${city},${country}"`;
}
console.log(city_country("Lahore","Pakistan"));
console.log(city_country("Washington","USA"));
console.log(city_country("Mombassa","Kenya"));

//Assignment 40
function make_album(artist: string, title: string, tracks?:number):{ artist: string, title: string, tracks?:number}{
    const album: {artist: string, title: string, tracks? :number}={
        artist:artist,title:title
    };
    if(tracks !== undefined){
        album.tracks = tracks;
    }
    return album;
}
const album1 = make_album('Atif Aslam', 'Album #1',2);
const album2 = make_album('Ali Zafar', 'Album #2');
const album3 = make_album('Shahzad Roy', 'Album #5',10);

console.log(album1);
console.log(album2);
console.log(album3);
//Assignment 41
let magiciansName: string[]=["Aslam","Khalid","Asad"]

function show_magicians(magicians:string[]):void{
     console.log("List of Magicians");
    magiciansName.forEach(magician=>console.log(magician));
   
}


    show_magicians(magiciansName);
         
 //Assignment 42
//  let magician_Names: string[]=["Aslam","Khalid","Asad"];

// function show_magicians(magicians:string[]):void{
//      console.log("List of Magicians");
//     magicians.forEach(magician=>console.log(magician));
   
// }


//     show_magicians(magician_Names);
       
let magician_Names: string[]=["Aslam","Khalid","Asad"]

function make_great(magicians:string[]):string[]{
    let great_magicians:string[]=[];
    magicians.forEach(magician=>{
        great_magicians.push('The great${magician}');
    });
    return great_magicians;
    }
let great_magicians:string[]=make_great(magician_Names);
   function show_magicians(magicians:string[]):void{
    console.log("List of Magicians");
    magicians.forEach(magician=>{
        console.log(magician);
    });
   }
   show_magicians(great_magicians);
  
//Assignment no 43
let original_magicians:string[]=['AB','BC','CD','EF'];
function show_magicians(magicians:string[]):void{
    magicians.forEach(magician => console.log(magician));
}
const make_great=(magicians:string[]):string[]=>{
    return magicians.map(magician => `the Great ${magician}`);
    };
const modified_magicians: string[] = make_great([... original_magicians]);
console.log("Original Magicians:");
show_magicians(original_magicians);
console.log("\n Modified Magicians :");
show_magicians(modified_magicians);

//Assignment no 44
function makeSandwich(...items: string[]): void {
    console.log("Sandwich Summary:");
    if (items.length === 0) {
        //  console.log("You ordered an empty sandwich.");
        console.log("You ordered an empty sandwich. Please add some ingredients.");
    } else {
        console.log("You ordered a sandwich with the following items:");
        for (const item of items) {
            console.log(`- ${item}`);
        }
    }
    console.log(); // Add an empty line for better readability
}

// Call the function with different numbers of arguments
makeSandwich('Ham', 'Cheese', 'Lettuce', 'Tomato');
makeSandwich('Turkey', 'Swiss', 'Mayonnaise');
makeSandwich('Peanut Butter', 'Jelly');


//Assignment no 3
let cname:string='Khalid';
console.log(cname.toLowerCase());
console.log(cname.toUpperCase());
console.log(cname.replace(\))

let myPercentage:number =80;
let statusOfStudent:string=""
let gradeOfstudent: string=""
if(myPercentage > 30){
    statusOfStudent="Pass";
}else{
    statusOfStudent="Fail";
}
if(myPercentage>=80){
    gradeOfstudent="A+"
}else if (myPercentage>=70){
    gradeOfstudent="A";
}else if (myPercentage>=60){
    gradeOfstudent="B";
}else if (myPercentage>=50){
        gradeOfstudent="C";
}else if (myPercentage>=40){
            gradeOfstudent="D";}
else if (myPercentage>=30){
       gradeOfstudent="E";
}else{
        gradeOfstudent="Fail";
    }
console.log(gradeOfstudent)
console.log(statusOfStudent)

let isDoorOpen:boolean=false
if(isDoorOpen){
    console.log("Door close kr do");
 } else{
        console.log("Door open kr do")
    }

let nums :number[]=[1,2,3,4,5];
let chars: string[]=["A","B","C","C","D"];
let bools: boolean[]=[true,false];

function isExistInList<T>(item: T,list :T[]):boolean{
    return list.includes(item);
}
console.log(isExistInList<string>("H",chars))
console.log(isExistInList<number>(2,nums))
console.log(isExistInList<boolean>(false,bools))

//let num1: number = 40
console.log(10 > 100)
console.log(50 < 25)
console.log(80 >= 80)
console.log(95 <= 100)
console.log(100 == 100)
let num1 = 60;
let num2 = 70;
console.log(num1 != num2)
//console.log(40 != 30)


*/
//Assignment no 45
function storeCarInfo(manufacturer, modelName) {
    var extras = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        extras[_i - 2] = arguments[_i];
    }
    var carInfo = {
        "Manufacturer": manufacturer,
        "Model": modelName
    };
    // Store any additional information provided as key-value pairs
    extras.forEach(function (_a) {
        var key = _a[0], value = _a[1];
        carInfo[key] = value;
    });
    return carInfo;
}
// Call the function with required information and additional details
var carDetails = storeCarInfo("Suzuki", "FX-800", ["Color", "Off White"], ["Year", 1984]);
// Print the object to ensure all information is stored correctly
console.log(carDetails);
