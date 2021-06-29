function Multiplication(a, b) {
    c = a + b;
    d = c * c;
    return d;
}

function Division(a, b) {
    c = a + b;
    d = Multiplication(a, b);
    result = c / d;
    return result;
}

console.log(Division(2,4));