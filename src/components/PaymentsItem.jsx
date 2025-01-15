const PaymentsItem = ({ payment, paymentsList, index }) => {
	return (
		<div className='flex items-center justify-between py-5 relative'>
			<div className="flex flex-col gap-[2px]}">
				<p className="font-sans text-md font-normal">
					{payment.category}
				</p>
				<span className='font-sans text-sm font-light text-gray'>
					{payment.date}
				</span>
			</div>

			<span className="font-sans text-sm py-1 px-2 bg-[#E5F9F7] w-full max-w-24 text-center rounded-md overflow-hidden text-ellipsis">{payment.total}</span>

			{index !== paymentsList.length - 1 && (
					<span className='block w-[100%] h-[1px] bg-gray absolute bottom-0 left-0 opacity-20' />
			)}
		</div>
	)
}

export default PaymentsItem