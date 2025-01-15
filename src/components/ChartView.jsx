import { faker } from '@faker-js/faker';
import {
	CategoryScale,
	Chart as ChartJS,
	Legend,
	LinearScale,
	LineElement,
	PointElement,
	Title,
	Tooltip,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
	scales: {
    x: {
      display: true,
    },
    y: {
      display: true,
    },
  },
};

const generateData = (points) => {
  return Array.from({ length: points }, () => faker.number.int({ min: 0, max: 1000 }));
};

const datasets = {
  day: {
    labels: Array.from({ length: 24 }, (_, i) => `${i}:00`),
    data: generateData(24),
  },
  week: {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    data: generateData(7),
  },
  month: {
    labels: Array.from({ length: 30 }, (_, i) => `Day ${i + 1}`),
    data: generateData(30),
  },
	halfyear: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    data: generateData(12),
  },
  year: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    data: generateData(12),
  },
};

const ChartView = ({ pickedDate }) => {
	const data = {
    labels: datasets[pickedDate.def].labels,
    datasets: [
      {
        label: `Spent`,
        data: datasets[pickedDate.def].data,
        borderColor: '#2992F0',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0.4,
      },
    ],
  };

	return (
		<Line 
			className='px-4 pt-1 pb-3'
			options={options} 
			data={data} 
		/>		
	)
}

export default ChartView