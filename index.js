const cities = [
  {
    id: 301,
    name: 'New York',
    population: 8398748,
    country: 'United States',
  },
  {
    id: 302,
    name: 'Paris',
    population: 2140526,
    country: 'France',
  },
  {
    id: 303,
    name: 'Tokyo',
    population: 13960000,
    country: 'Japan',
  },
  {
    id: 304,
    name: 'Sydney',
    population: 5230330,
    country: 'Australia',
  },
  {
    id: 305,
    name: 'Cairo',
    population: 9121515,
    country: 'Egypt',
  },
];

/**********
Question 1:
You have a function getCityPopulation(city) that:
- receives a city object
- returns the population of the city
Don't forget to uncomment the console.log
===
ANSWER: 8398748
**********/
// Yousef
function getCityPopulation(city) {
  return city['population'];
}
// console.log(getCityPopulation(cities[0]));

/**********
Question 2:
You have a function that:
- receives a city object
- receives a population threshold (number)
- returns true if the city's population is greater than or equal to the threshold, otherwise returns false
===
ANSWER: true
**********/
// Meshal
function isPopulationAboveThreshold(city, threshold) {
  return city.population >= threshold;
}
// console.log(isPopulationAboveThreshold(cities[1], 2000000));

/**********
Question 3:
addCity(cities, city):
- receives an array of city objects
- receives a new city object (with id, population, and country)
- adds the new city to the array
- returns the updated array
===
ANSWER:
[
  {
    "id": 301,
    "name": "New York",
    "population": 8398748,
    "country": "United States"
  },
  {
    "id": 302,
    "name": "Paris",
    "population": 2140526,
    "country": "France"
  },
  {
    "id": 303,
    "name": "Tokyo",
    "population": 13960000,
    "country": "Japan"
  },
  {
    "id": 304,
    "name": "Sydney",
    "population": 5230330,
    "country": "Australia"
  },
  {
    "id": 305,
    "name": "Cairo",
    "population": 9121515,
    "country": "Egypt"
  },
  {
    "id": 306,
    "population": 1200000,
    "country": "Canada"
  }
]
**********/
// Y
function addCity(cities, city) {
  cities.push(city);
  return cities;
}

// const newCity = {
//   id: 306,
//   population: 1200000,
//   country: 'Canada',
// };

// console.log(addCity(cities, newCity));

/**********
Question 4:
countCitiesInCountry(cities, country):
- receives an array of city objects
- receives a country name (string)
- returns the number of cities in the specified country
===
ANSWER: 1
**********/
// M
function countCitiesInCountry(cities, country) {
  return cities.filter((city) => city.country === country).length;
}
// console.log(countCitiesInCountry(cities, 'France'));
