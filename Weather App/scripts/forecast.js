//Interacting With The API's

const key = 'BMO2AzSwixo3oYT0tAnpZF2aRpN5M8J8';

//get weather information
const getWeather = async (id) => {

  const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
  const query = `${id}?apikey=${key}`;

  const reponse = await fetch(base + query);
  const data = await reponse.json();

  return data[0];

}

// get city information
const getCity = async (city) => {

  const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
  const query = `?apikey=${key}&q=${city}`;

  const response = await fetch(base + query);
  const data = await response.json();

  return data[0];

};

