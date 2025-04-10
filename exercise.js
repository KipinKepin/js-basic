const vehicleType = "car";
const duration = 27;
const firstHourCar = 5000;
const nextHourCar = 3000;
const carExtraCharge = 50000;
const firstHourBike = 2000;
const nextHourBike = 1000;
const bikeExtraCharge = 20000;

const calculateParkingFee = (vehicleType, duration) => {
  let fee = 0;
  if (vehicleType == "car") {
    if (duration <= 1) {
      fee += firstHourCar;
    } else if (duration <= 24) {
      fee += firstHourCar + nextHourCar * (duration - 1);
    } else {
      fee += firstHourCar + nextHourCar * (duration - 1) + carExtraCharge;
    }
  } else if (vehicleType == "bike") {
    if (duration <= 1) {
      fee += firstHourBike;
    } else if (duration <= 24) {
      fee += firstHourBike + nextHourBike * (duration - 1);
    } else {
      fee += firstHourBike + nextHourBike * (duration - 1) + bikeExtraCharge;
    }
  } else {
    console.log(
      "ANDA DIKENAKAN DENDA Rp. 1.000.000,-\nKarena kendaraan anda tidak ada dalam list."
    );
    fee += 1000000;
  }
  return fee;
};

console.log(calculateParkingFee(vehicleType, duration));
module.exports = calculateParkingFee;
