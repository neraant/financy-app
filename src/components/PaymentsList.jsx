import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { months } from '../utils';
import PaymentsItem from './PaymentsItem';

const paymentsList = [
	{
		id: uuidv4(),
		total: 100,
		category: "Еда",
		date: processDate(new Date()),
	},
	{
		id: uuidv4(),
		total: 200,
		category: "Работа",
		date: processDate(new Date()),
	},
	{
		id: uuidv4(),
		total: 300,
		category: "Учёба",
		date: processDate(new Date()),
	},
	{
		id: uuidv4(),
		total: 400,
		category: "Еда",
		date: processDate(new Date()),
	},
	{
		id: uuidv4(),
		total: 50000000000000000,
		category: "Отсальное",
		date: processDate(new Date()),
	},
	{
		id: uuidv4(),
		total: 100,
		category: "Еда",
		date: processDate(new Date()),
	},
	{
		id: uuidv4(),
		total: 200,
		category: "Работа",
		date: processDate(new Date()),
	},
	{
		id: uuidv4(),
		total: 300,
		category: "Учёба",
		date: processDate(new Date()),
	},
	{
		id: uuidv4(),
		total: 400,
		category: "Еда",
		date: processDate(new Date()),
	},
	{
		id: uuidv4(),
		total: 50000000000000000,
		category: "Отсальное",
		date: processDate(new Date()),
	},
	{
		id: uuidv4(),
		total: 100,
		category: "Еда",
		date: processDate(new Date()),
	},
	{
		id: uuidv4(),
		total: 200,
		category: "Работа",
		date: processDate(new Date()),
	},
	{
		id: uuidv4(),
		total: 300,
		category: "Учёба",
		date: processDate(new Date()),
	},
	{
		id: uuidv4(),
		total: 400,
		category: "Еда",
		date: processDate(new Date()),
	},
	{
		id: uuidv4(),
		total: 50000000000000000,
		category: "Отсальное",
		date: processDate(new Date()),
	},
]

function processDate(date) {
	const day = date.getDate()
	const month = months[date.getMonth()]
	const hours = date.getHours()
	const minutes = date.getMinutes()
	const seconds = date.getSeconds()

	return `${day} ${month} в ${hours}:${minutes}:${seconds}`
}

const PaymentsList = () => {
	const [visibleCount, setVisibleCount] = useState(8)

	const loadMore = () => {
		setVisibleCount(pre => pre + 4)
	}

	return (
		<section className='px-6 pb-6 mt-8 flex flex-col items-center'>
			<div className="screen-max-width w-full mb-4">
				<button className='font-sans text-sm bg-white py-2 w-full shadow-sm rounded-md'>
					Добавить 
				</button>
			</div>

			<div className="screen-max-width rounded-2xl shadow-md bg-white w-full">
				<div className="flex items-center justify-between px-6 py-6 relative ">
					<h4 className='font-normal font-sans text-md flex items-center gap-4'>
						Всего выплат:
						<span className='font-sans text-gray'>{paymentsList.length}</span>
					</h4>

					<span className='block w-full h-[1px] bg-gray absolute bottom-0 left-0 opacity-20' />
				</div>

				<div className="flex flex-col px-6">
					{paymentsList.slice(0, visibleCount).map((item, index) => (
						<PaymentsItem key={item.id} payment={item} paymentsList={paymentsList} index={index} />
					))}
				</div>
			</div>

			{
				visibleCount < paymentsList.length && (
					<button 
						className='py-2 px-4 bg-white rounded-2 shadow-md mt-6 font-sans text-sm rounded-md'
						onClick={loadMore}
					>
						Загрузить ещё
					</button>
				)
			}
		</section>
	)
}

export default PaymentsList