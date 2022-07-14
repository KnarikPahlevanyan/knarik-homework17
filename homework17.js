function person(firstName, lastName) {
    console.log(`${firstName} ${lastName}`);
}
person("Anna", "Yan");



const myName = {
    fName: "Anna",
    lName: "Yan"
};
const pers = {
    ...myName
};
console.log(pers);