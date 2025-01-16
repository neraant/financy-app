const AddBalancePopup = ({ showAddBalance, balanceInput, setBalanceInput, addBalance }) => {
	return (
		<form 
			className={`absolute z-20 top-[50%] left-[50%] translate-x-[-50%] transition-all duration-300 bg-white p-6 rounded-md flex flex-col w-full max-w-80 ${!showAddBalance ? 'translate-y-[-50%] opacity-1 visible' : 'translate-y-[-10%] opacity-0 hidden'}`}
		>
			<h4 className='font-bold font-sans text-lg mb-2'>
				Введите сумму
			</h4>

			<input 
				value={balanceInput}
				onChange={(e) => setBalanceInput(e.target.value)}
				type="text" 
				placeholder='Сумма' 
				className='font-sans text-base placeholder-gray py-2 px-3 bg-[#8ecaff30] rounded-md focus:border-none focus:outline-none mb-4' 
			/>

			<button
				className='py-2 bg-[#D4FFEA] font-sans font-normal text-base'
				onClick={(e) => addBalance(e, balanceInput)}
			>
				Добавить
			</button>
		</form>
	)
}

export default AddBalancePopup