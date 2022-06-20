
interface RentCar {
    period: string,
    price: number,
  };

interface AccessoriesCar {
    type: string;
    name: string;
}

export interface CarDto {
    about: string,
    brand: string,
    accessories: AccessoriesCar[],
    fuel_type: string,
    id: string,
    name: string,
    photos: string[],
    rent: RentCar,
    thumbnail: string;
}
