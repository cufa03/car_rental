import { CarProps, FilterProps } from '@/types/index';
export async function fetchCars(filters: FilterProps) {
  const { manufacturer, year, model, limit, fuel } = filters;
  const headers = {
    'X-RapidAPI-Key': 'e751d66c30msh99424e8435d6b85p13fab4jsn939af1988ff0',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com',
  };

  try {
    const response = await fetch(
      `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,
      { headers: headers }
    );
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
}

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // Precio base del rental
  const mileageFactor = 0.1; // Coste adicional por milla
  const ageFactor = 0.05; // Adicional por año del vehiculo

  // Calculo del adicional basado en las millas y el año
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculo total del rental por dia
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};

export const generateCardImageUrl = (car: CarProps, angle?: string) => {
  const url = new URL('https://cdn.imagin.studio/getimage');
  const { make, model, year } = car;

  url.searchParams.append('customer', 'hrjavascript-mastery');
  url.searchParams.append('make', make);
  url.searchParams.append('modelFamily', model.split(' ')[0]);
  url.searchParams.append('zoomType', 'fullscreen');
  url.searchParams.append('modelYear', `${year}`);
  url.searchParams.append('angle', `${angle}`);
  return `${url}`;
};

export const updateSerchParams = (type: string, value: string) => {
  const searchParams = new URLSearchParams(window.location.search);

  searchParams.set(type, value);

  const newPathname = `${window.location.pathname}?${searchParams.toString()}`;
  return newPathname;
};
