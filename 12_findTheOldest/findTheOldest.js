const findTheOldest = function (people) {
    let ageInOrder = [];
    let oldest = 0;
    for (i = 0; i < people.length; i++) {
        ageInOrder.push(getAge(people[i].yearOfBirth, people[i].yearOfDeath));
    }
    for (i = 0; i < ageInOrder.length; i++) {
        if (ageInOrder[i] > oldest) { oldest = ageInOrder[i]; }
    }
    let oldestPerson = ageInOrder.indexOf(oldest);
    return people[oldestPerson];
}
const getAge = function (birth, death) {
    if (!death) {
        death = new Date().getFullYear();
    }
    return death - birth;
}

// Do not edit below this line
module.exports = findTheOldest;
