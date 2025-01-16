import { addIcon } from '../../utils'

const BalanceBox = ({ balanceInfo, index, showAddBalance, setShowAddBalance, isHomepage = true }) => {
	return (
		<div 
			className='flex flex-col items-center justify-center py-7 bg-white flex-1 rounded-2xl shadow-box relative'
		>
			<img src={balanceInfo.icon} alt={balanceInfo.icon} />

			<h4 className="font-normal text-sm mt-4 mb-2 font-sans">{balanceInfo.title}</h4>

			<div className="font-normal text-sm text-gray font-sans">{balanceInfo.value} руб.</div>

			{index == 0 && !isHomepage ? (
				<button 
					className='absolute top-4 right-4 p-1 bg-[#D4FFEA] rounded-full'
					onClick={() => setShowAddBalance(true)}	
				>
					<img src={addIcon} alt="add" width={24} />
				</button>
			) : (null)}
		</div>
	)
}

export default BalanceBox