// This function demerit points Calculation system
function calculateDemeritPoints(speed) {
    // Here the Variables of speedLimit, demeritPoints, and demerit Points limit are declared
    const speedLimit = 70;
    const pointsPerDemerit = 5;
    const demeritPointsLimit = 12;

    // The Conditions to check speed and return demerit points
    if (speed < speedLimit) {
        console.log("OK");
    } else {
        const demeritPoints = Math.floor((speed - speedLimit) / pointsPerDemerit);
        if (demeritPoints > demeritPointsLimit) {
            console.log("License Suspended");
        } else {
            console.log("Points: " + demeritPoints);
        }
    }
}
const carSpeed = prompt("Enter car speed");
calculateDemeritPoints(carSpeed);
