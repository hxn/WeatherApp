import React, { useState } from 'react';
import CitySelector from './components/CitySelector';
import ResultsBox from './components/ResultsBox';
import { getWeatherData } from './services/apiService';

const fetchData = async (cityName, setData, setLoading) => {
  setLoading(true);
  const data = await getWeatherData(cityName);
  setData(data);
  setLoading(false);
};

const App = () => {
  const [cityName, setCityName] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  return (
    <div className='app'>
      <h1>WeatherApp</h1>

      {isLoading ? (
        <div style={{ padding: 12 }}>Loading...</div>
      ) : (
        <>
          <ResultsBox data={data} />
          <CitySelector
            data={data}
            setCityName={(city) => setCityName(city)}
            cbClick={() => fetchData(cityName, setData, setLoading)}
          />
        </>
      )}
    </div>
  );
};

export default App;
