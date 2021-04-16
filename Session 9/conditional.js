var a = 20;

if(a%10 === 0) {
    console.log(a + " is divisible by 10.");
} else {
    console.log(a + " is not divisible by 10.");
}

var day;
switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
}
console.log(day);

var typeOfDay;
switch (new Date().getDay()) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        typeOfDay = "Weekday";
        break;
    case 0:
    case 1:
        typeOfDay = "Weekend";
        break;
    default:
        typeOfDay = "Nope";
}
console.log(typeOfDay);