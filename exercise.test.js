const calculateParkingFee = require("./exercise");

describe("calculateParkingFee", () => {
  it("should return 5000 when vehicleType = car and duration=1", () => {
    //given
    const vehicleType = "car";
    const duration = 1;

    //when
    const parkingFee = calculateParkingFee(vehicleType, duration);

    //then
    const expectedResult = 5000;

    expect(parkingFee).toBe(expectedResult);
  });

  it("should return 17000 when vehicleType = car and duration=5", () => {
    //given
    const vehicleType = "car";
    const duration = 5;

    //when
    const parkingFee = calculateParkingFee(vehicleType, duration);

    //then
    const expectedResult = 17000;

    expect(parkingFee).toBe(expectedResult);
  });

  it("should return 127000 when vehicleType = car and duration=25", () => {
    //given
    const vehicleType = "car";
    const duration = 25;

    //when
    const parkingFee = calculateParkingFee(vehicleType, duration);

    //then
    const expectedResult = 127000;

    expect(parkingFee).toBe(expectedResult);
  });

  it("should return 2000 when vehicleType = bike and duration=1", () => {
    //given
    const vehicleType = "bike";
    const duration = 1;

    //when
    const parkingFee = calculateParkingFee(vehicleType, duration);

    //then
    const expectedResult = 2000;

    expect(parkingFee).toBe(expectedResult);
  });

  it("should return 13000 when vehicleType = bike and duration=12", () => {
    //given
    const vehicleType = "bike";
    const duration = 12;

    //when
    const parkingFee = calculateParkingFee(vehicleType, duration);

    //then
    const expectedResult = 13000;

    expect(parkingFee).toBe(expectedResult);
  });

  it("should return 47000 when vehicleType = bike and duration=26", () => {
    //given
    const vehicleType = "bike";
    const duration = 26;

    //when
    const parkingFee = calculateParkingFee(vehicleType, duration);

    //then
    const expectedResult = 47000;

    expect(parkingFee).toBe(expectedResult);
  });

  it("should return 1000000 when vehicleType = helicopter", () => {
    //given
    const vehicleType = "helicopter";
    const duration = 2;

    //when
    const parkingFee = calculateParkingFee(vehicleType, duration);

    //then
    const expectedResult = 1000000;

    expect(parkingFee).toBe(expectedResult);
  });
});
