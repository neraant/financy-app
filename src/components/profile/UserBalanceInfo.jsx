import { useEffect, useState } from 'react'
import { cashIcon, purseIcon } from '../../utils'
import { loadFromLocalStorage, saveToLocalStorage } from '../../utils/storage'
import AddBalancePopup from './AddBalancePopup'
import BalanceBox from './BalanceBox'

const calculateMonthlySpent = () => {
  const allPayments = loadFromLocalStorage('paymentsList') || [];
  
  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();

  const monthlyPayments = allPayments.filter(({ nonFormatedDate: date }) => {
    const paymentDate = new Date(date);
    return paymentDate.getMonth() === currentMonth && paymentDate.getFullYear() === currentYear;
  });

  return (monthlyPayments.reduce((acc, { total }) => acc + Number(total), 0)).toFixed(2);
};

const UserBalanceInfo = ({ showAddBalance, setShowAddBalance, balanceInput, setBalanceInput, isHomepage = true, addBalance }) => {
	const [spentThisMonth, setSpentThisMonth] = useState(0)
	const [balance, setBalance] = useState(0)

	useEffect(() => {
		// spent
		let monthlySpent = calculateMonthlySpent()
		saveToLocalStorage('monthlySpent', monthlySpent)
		setSpentThisMonth(monthlySpent)
	}, [])

	useEffect(() => {
		// balance
		let initialBalance = loadFromLocalStorage('balance') || (0).toFixed(2)
		if(Array.isArray(initialBalance)) initialBalance = (0).toFixed(2)
		setBalance(initialBalance)

		// calculating balance
		let calculatedMonthlySpent = calculateMonthlySpent()
	}, [balanceInput]);

	const balances = [
		{
			icon: cashIcon,
			title: "Баланс:",
			value: balance,
		},
		{
			icon: purseIcon,
			title: "Потрачено за месяц:",
			value: spentThisMonth,
		},
	]
	
	return (
		<div>
			<section className='py-8 px-6'>
				<div className="screen-max-width">
					<div className="flex items-center gap-5">
						{balances.map((_, i) => (
							<BalanceBox 
								key={i} 
								balanceInfo={balances[i]} 
								index={i}
								setShowAddBalance={setShowAddBalance}
								showAddBalance={showAddBalance}
								isHomepage={isHomepage}
							/>
						))}
					</div>
				</div>
			</section>

			{showAddBalance && (
				<>
					<div 
						className={`absolute w-full h-full bg-black top-0 left-0 z-10 ${showAddBalance ? 'opacity-40 visible' : ' opacity-0 hidden'}`} 
						onClick={() => setShowAddBalance(false)}
					/>
					<AddBalancePopup 
						showAddPopup={showAddBalance} 
						balanceInput={balanceInput}
						setBalanceInput={setBalanceInput}	
						addBalance={addBalance}
					/>
				</>
			)}
		</div>
	)
}

export default UserBalanceInfo