function calculate_sum(i, i2) {
    console.log('Adding ' + i2 + ' to ' + i);
    return i2 + i;
}

function show_sum() {
    console.log('Result: ' + calculate_sum(5, 1));
}

show_sum();