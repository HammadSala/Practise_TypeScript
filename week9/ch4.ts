// Description
// Write a program to do the following
// Create an interface IHouse and declare houseNumber, area, pinCode.
// Create a file and implement interface as type
// Create a file and implement interface as function type
// Create a file and implement interface as array type
// Create a file and implement interface in class and print the value
// Create a file with interface class and implement it as interface as type.
//  You can make some variables as optional in the file


interface IHouse {
    houseNumber : number;
    area : string;
    pinCode : number;
    
}

var fileType : IHouse = {
    houseNumber : 10 ,
    area : "string",
    pinCode : 12213
}

console.log( fileType);

interface IHouse1 {
    houseNumber : number;
    area : string;
    pinCode : number;
    display(houseNumber: any, area: any, pinCode: any) : void;
    
}

function filefunction (houseNumber : number,  area : string, pinCode : number ): void{

    console.log(  houseNumber,  area , pinCode );
}

filefunction( 21, "India", 112123);


interface IHouseArrya {
    // houseNumber : number;
    // area : string;
    // pinCode : number;
    [index:number]:IHouse;
    
}


let ArryaHouse : IHouseArrya = [{houseNumber:12,area:"2323",pinCode:12}];

ArryaHouse[1] = {houseNumber:12,area:"232",pinCode:232};

console.log(ArryaHouse);


class TryIpl implements IHouse {
    houseNumber: number;
    area: string;
    pinCode: number;
    constructor( houseNumber: number,  area: string, pinCode: number ) {
        this.houseNumber= houseNumber;
        this.area = area;
        this.pinCode = pinCode ;
    }
    
}

var obj1 = new TryIpl(10,"dsfs",12);
console.log("objeft" +  obj1.area, obj1.houseNumber, obj1.pinCode);
console.log(JSON.stringify(obj1));


interface OptionlaHouse {
    area?: string;
    house?: number;
    details( area: string, house:number): OptionlaHouse;
}

let op1 : OptionlaHouse ={
    details (area, house ){
        this.area = area;
        this.house = house;
        return this;
    }
        
    }
    op1.details("one", 20);

console.log( "optional" + JSON.stringify(op1));
