var countDuplicates = function (values) {
    console.log('values are: ' + values);
    var numberOfDuplicates = 5;
    var duplicatesOfThisCard;
    for (var i = 0; i < values.length; i++) {
        duplicatesOfThisCard = 0;
        console.log(numberOfDuplicates);
        console.log(duplicatesOfThisCard);
        if (values[i] == values[0]) {
            duplicatesOfThisCard += 1;
        }
        if (values[i] == values[1]) {
            duplicatesOfThisCard += 1;
        }
        if (values[i] == values[2]) {
            duplicatesOfThisCard += 1;
        }
        if (values[i] == values[3]) {
            duplicatesOfThisCard += 1;
        }
        if (values[i] == values[4]) {
            duplicatesOfThisCard += 1;
        }
        if (duplicatesOfThisCard > numberOfDuplicates) {
            numberOfDuplicates = duplicatesOfThisCard;
        }
    }
    return numberOfDuplicates;
};

let count = countDuplicates(10);
console.log(count)