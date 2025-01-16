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
import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { isInLast6Months, isSameDay, isSameMonth, isSameWeek, isSameYear, loadFromLocalStorage } from '../utils';

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

const getData = (intervalDate) => {
  const data = loadFromLocalStorage('paymentsList')
  const totalArr = []

  const now = new Date();

  switch (intervalDate) {
    case "day":
      for(let hour = 0; hour < 24; hour++) {
        const hourlyTotal = data.reduce((acc, {total, nonFormatedDate: date}) => {
          const parsedDate = new Date(date);
          
          if (isSameDay(parsedDate, now) && parsedDate.getHours() === hour) {
            acc += parseFloat(total);
          }
          return acc;
        }, 0)
        totalArr.push(hourlyTotal);
      }
      break;
  
    case "week":
      const weekLabels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
      weekLabels.forEach((label, index) => {
        const weeklyTotal = data.reduce((acc, { total, nonFormatedDate: date }) => {
          const parsedDate = new Date(date);
          
          if (isSameWeek(parsedDate, now) && parsedDate.getDay() === index) {
            acc += parseFloat(total);
          }
          return acc;
        }, 0);
        totalArr.push(weeklyTotal);
      });
      break;

    case "month":
      for (let day = 1; day <= 31; day++) {
        const dailyTotal = data.reduce((acc, { total, nonFormatedDate: date }) => {
          const parsedDate = new Date(date);

          if (isSameMonth(parsedDate, now) && parsedDate.getDate() === day) {
            acc += parseFloat(total);
          }
          return acc;
        }, 0);
        totalArr.push(dailyTotal);
      }
      break;

    case "halfyear":
      const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      months.slice(0, 6).forEach((month, index) => {
        const monthlyTotal = data.reduce((acc, { total, nonFormatedDate: date }) => {
          const parsedDate = new Date(date);

          if (isInLast6Months(parsedDate, now) && parsedDate.getMonth() === index) {
            acc += parseFloat(total);
          }
          return acc;
        }, 0);
        totalArr.push(monthlyTotal);
      });
      break;

    case "year":
        const yearLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        yearLabels.forEach((month, index) => {
          const yearlyTotal = data.reduce((acc, { total, nonFormatedDate: date }) => {
            const parsedDate = new Date(date);

            if (isSameYear(parsedDate, now) && parsedDate.getMonth() === index) {
              acc += parseFloat(total);
            }
            return acc;
          }, 0);
          totalArr.push(yearlyTotal);
        });
        break;
    default:
      return []
      break;
  }

  return totalArr
};

const datasets = {
  day: {
    labels: Array.from({ length: 24 }, (_, i) => `${i}:00`),
    data: getData("day"),
  },
  week: {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    data: getData("week"),
  },
  month: {
    labels: Array.from({ length: 30 }, (_, i) => `Day ${i + 1}`),
    data: getData("month"),
  },
	halfyear: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    data: getData("halfyear"),
  },
  year: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    data: getData("year"),
  },
};

const ChartView = ({ pickedDate }) => {
  const [chartData, setChartData] = useState({
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
  })

  useEffect(() => {
    const newData = {
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
    }
    setChartData(newData)
  }, [])

	return (
		<Line 
			className='px-4 pt-1 pb-3'
			options={options} 
			data={chartData} 
		/>		
	)
}

export default ChartView