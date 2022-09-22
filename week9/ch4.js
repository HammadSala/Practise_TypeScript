// Description
// Write a program to do the following
// Create an interface IHouse and declare houseNumber, area, pinCode.
// Create a file and implement interface as type
// Create a file and implement interface as function type
// Create a file and implement interface as array type
// Create a file and implement interface in class and print the value
// Create a file with interface class and implement it as interface as type.
//  You can make some variables as optional in the file
var fileType = {
    houseNumber: 10,
    area: "string",
    pinCode: 12213
};
console.log(fileType);
function filefunction(houseNumber, area, pinCode) {
    console.log(houseNumber, area, pinCode);
}
filefunction(21, "India", 112123);
var ArryaHouse = [{ houseNumber: 12, area: "2323", pinCode: 12 }];
ArryaHouse[1] = { houseNumber: 12, area: "232", pinCode: 232 };
console.log(ArryaHouse);
var TryIpl = /** @class */ (function () {
    function TryIpl(houseNumber, area, pinCode) {
        this.houseNumber = houseNumber;
        this.area = area;
        this.pinCode = pinCode;
    }
    return TryIpl;
}());
var obj1 = new TryIpl(10, "dsfs", 12);
console.log("objeft" + obj1.area, obj1.houseNumber, obj1.pinCode);
console.log(JSON.stringify(obj1));
var op1 = {
    details: function (area, house) {
        this.area = area;
        this.house = house;
        return this;
    }
};
op1.details("one", 20);
console.log("optional" + JSON.stringify(op1));
