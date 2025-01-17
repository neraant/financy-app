import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { loadFromLocalStorage, saveToLocalStorage } from '../../utils/storage';
import PaymentsItem from './PaymentsItem';

const PaymentsList = () => {
	const [paymentsList, setPaymentsList] = useState([])
	const [visibleCount, setVisibleCount] = useState(8)
	const [total, setTotal] = useState(0)

	useEffect(() => {
		setPaymentsList(loadFromLocalStorage('paymentsList'))
	}, [])

	useEffect(() => {
    const totalAmount = paymentsList.reduce((acc, cur) => acc + parseFloat(cur.total), 0);
    setTotal(totalAmount);
	}, [paymentsList]);

	const deleteSpent = (spentId) => {
		const filteredPaymentsList = paymentsList.filter(payment => payment.id != spentId)
		setPaymentsList(filteredPaymentsList) 
		saveToLocalStorage("paymentsList", filteredPaymentsList)
	}

	const loadMore = () => {
		setVisibleCount(pre => pre + 4)
	}

	return (
		<section className='px-6 pb-6 mt-8 flex flex-col items-center'>
			<div className="flex screen-max-width w-full mb-4">
					<Link to="/addSpent" className='font-sans text-sm bg-[#D4FFEA] py-2 w-full shadow-md rounded-md text-center transition-all duration-300 hover:scale-[1.005] hover:shadow-lg'>
						Добавить 
					</Link>
			</div>

			<div className="screen-max-width rounded-2xl shadow-md bg-white w-full">
				<div className="flex items-center justify-between px-3 sm:px-6 py-6 relative ">
					<div className="flex sm:items-center flex-col sm:flex-row justify-between w-full">
						<h4 className='font-normal font-sans text-md flex items-center gap-4'>
							Всего выплат:
							<span className='font-sans text-gray'>{paymentsList.length}</span>
						</h4>

						<h4 className='font-normal font-sans text-md flex items-center gap-4 overflow-hidden text-ellipsis'>
							Всего потрачено:
							<span className='font-sans text-gray'>
    						{total} руб.
							</span>
						</h4>
					</div>

					<span className='block w-full h-[1px] bg-gray absolute bottom-0 left-0 opacity-20' />
				</div>

				<div className="flex flex-col px-3 sm:px-6">
					{paymentsList.slice(0, visibleCount).map((item, index) => (
						<PaymentsItem key={item.id} payment={item} paymentsList={paymentsList} deleteSpent={deleteSpent} index={index} />
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