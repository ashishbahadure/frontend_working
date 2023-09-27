class Vehicle 
{
    vehicle_company:string;
    vehicle_name:string;
    vehicle_tyres:number;
    air_bag:number ;
    fuel_type:string;
    seats:number ;

    constructor(vehicle_company:string,vehicle_name:string,vehicle_tyres:number,air_bag:number,fuel_type:string,seats:number)
    {
        this.vehicle_company=vehicle_company;
        this.vehicle_name=vehicle_name;
        this.vehicle_tyres=vehicle_tyres;
        this.air_bag=air_bag;
        this.fuel_type=fuel_type;
        this.seats=seats
    }
    getAllInfo(){
        console.log(this.vehicle_company);
        console.log(this.vehicle_name);
        console.log(this.vehicle_tyres);
        console.log(this.air_bag);
        console.log(this.fuel_type);
        console.log(this.seats);
    }
}

var neno=new Vehicle("neno",'city',4,4,'pterol',7);
neno.getAllInfo();
