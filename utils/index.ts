export async function fetchCars() {
  const headers = {
    'X-RapidAPI-Key': 'e751d66c30msh99424e8435d6b85p13fab4jsn939af1988ff0',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com',
  };

  try {
    const response = await fetch(
      'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla',
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
