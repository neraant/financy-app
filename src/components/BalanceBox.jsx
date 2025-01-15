const BalanceBox = ({ balanceInfo }) => {
	return (
		<div className='flex flex-col items-center justify-center py-7 bg-white flex-1 rounded-2xl shadow-box'>
			<img src={balanceInfo.icon} alt={balanceInfo.icon} />

			<h4 className="font-normal text-sm mt-4 mb-2 font-sans">{balanceInfo.title}</h4>

			<div className="font-normal text-sm text-gray font-sans">{balanceInfo.value}</div>
		</div>
	)
}

export default BalanceBox