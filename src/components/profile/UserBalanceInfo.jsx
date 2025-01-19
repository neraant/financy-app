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

const UserBalanceInfo = ({ showAddBalance, setShowAddBalance, balanceInput, setBalanceInput, isHomepage = true, addBalance, isEditing, setIsEditing, editBalance }) => {
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
								isHomepage={isHomepage}
								setIsEditing={setIsEditing}
								setBalanceInput={setBalanceInput}
								balance={balance}
							/>
						))}
					</div>
				</div>
			</section>

			<div 
				className='absolute w-full h-full top-0 left-0 transition-all duration-300'
				style={{
					opacity: !showAddBalance ? 0 : 1,
					visibility: !showAddBalance ? 'hidden' : 'visible'
				}}
			>
				<div 
					className={`absolute w-full h-full bg-black top-0 left-0 z-10 opacity-40 `} 
					onClick={() => {
						setShowAddBalance(false)
						setIsEditing(false)
					}}
				/>
				<AddBalancePopup 
					showAddPopup={showAddBalance} 
					balanceInput={balanceInput}
					setBalanceInput={setBalanceInput}	
					addBalance={addBalance}
					editBalance={editBalance}
					isEditing={isEditing}
					balance={balance}
				/>
			</div>
		</div>
	)
}

export default UserBalanceInfo