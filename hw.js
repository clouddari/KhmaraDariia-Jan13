let hours;

do {
    hours = prompt('Please input amount of hours you would like to convert to seconds');
    if (hours === null) {
        alert('Operation cancelled');
        break;
    } else if (hours === '' || isNaN(hours)) {
        alert('Please input a valid number');
    }
} while (hours === '' || isNaN(hours));

if (hours !== null && hours !== '' && !isNaN(hours)) {
    hours = Number(hours); // Convert the input to a number - because it's a string by default
    let seconds = hours * 3600;
    alert('In ' + hours + " hour(s) " + 'there are ' + seconds + " seconds");
}