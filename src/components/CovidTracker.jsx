import { useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { useQuery } from 'react-query';
import { fetchCountryData } from '../api';
import {CategoryScale} from 'chart.js'; 
import Chart from 'chart.js/auto';

Chart.register(CategoryScale);
const CovidTracker = () => {
  const { data: countryData, isLoading } = useQuery('countryData', fetchCountryData);

  useEffect(() => {
    // Optionally, you can fetch data at regular intervals using refetchInterval or useInterval hook
    // For simplicity, we're not adding the interval update in this example
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  
  
  const countryNames = countryData.map((country) => country.country);
  const countryCases = countryData.map((country) => country.cases);

  const chartData = {
    labels: countryNames,
    datasets: [
      {
        label: 'Cases',
        data: countryCases,
        fill: false,
        borderColor: '#3182ce',
      },
    ],
  };
  
  

  const chartOptions = {
    scales: {
      x: {
        type: 'category',
      },
    },
    responsive: true,
    maintainAspectRatio: true,
  };

  return (
    <div>
      <h1>COVID-19 Cases Fluctuation</h1>
      <Line data={chartData} options={chartOptions} />
    </div>
  );
};

export default CovidTracker;
