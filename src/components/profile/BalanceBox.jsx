import { addIcon, editIcon } from '../../utils'

const BalanceBox = ({ balanceInfo, index, setShowAddBalance, isHomepage = true, setIsEditing, setBalanceInput, balance }) => {
	return (
		<div 
			className='flex flex-col items-center justify-center py-7 bg-white flex-1 rounded-2xl shadow-box relative'
		>
			<img src={balanceInfo.icon} alt={balanceInfo.icon} />

			<h4 className="font-normal text-sm mt-4 mb-2 font-sans text-center">{balanceInfo.title}</h4>

			<div className="font-normal text-sm text-gray font-sans text-center">{balanceInfo.value} руб.</div>

			{index == 0 && !isHomepage ? (
				<div className='absolute top-4 right-4 flex flex-col md:flex-row items-center gap-2'>
					<button 
						className='p-1 bg-[#D4FFEA] rounded-md transition-all duration-300 shadow-md hover:shadow-sm'
						onClick={() => {
							setShowAddBalance(true)
							setBalanceInput("")
						}}	
						>
						<img src={addIcon} alt="add" width={20} />
					</button>

					<button 
						className='p-1 bg-[#feffd4] rounded-md transition-all duration-300 shadow-md hover:shadow-sm'
						onClick={() => {
							setBalanceInput(balance)
							setIsEditing(true)
							setShowAddBalance(true)
						}}	
					>
						<img src={editIcon} alt="edit" width={20} />
					</button>
				</div>
			) : (null)}
		</div>
	)
}

export default BalanceBox