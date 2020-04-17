const appid = '439d4b804bc8187953eb36d2a8c26a02'; // TODO: Hardcoded, presunout do configu

export const getWeatherData = (cityName) => {
  const dataFromApi = fetch(
    // TODO: Pozor, je pouzity cors-anywhere
    `https://cors-anywhere.herokuapp.com/https://samples.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${appid}`,
  )
    .then((resp) => resp.json())
    .then((data) => {
      return {
        name: data.name,
        temp: data.main.temp,
        humidity: data.main.humidity,
      };
    })
    .catch((err) => {
      console.log('Error', err);
      // TODO: Vyvolat error message do UI
    });

  return dataFromApi;
};
