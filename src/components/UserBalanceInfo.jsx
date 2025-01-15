import { cashIcon, purseIcon } from '../utils'
import BalanceBox from './BalanceBox'

const UserBalanceInfo = () => {
	const balances = [
		{
			icon: cashIcon,
			title: "Баланс:",
			value: "1 250 000 руб.",
		},
		{
			icon: purseIcon,
			title: "Выручка:",
			value: "86 316 руб.",
		},
	]
	
	return (
		<section className='py-8 px-6'>
			<div className="screen-max-width">
				<div className="flex items-center gap-5">
					{balances.map((_, i) => (
						<BalanceBox 
							key={i} 
							balanceInfo={balances[i]} 
						/>
					))}
				</div>
			</div>
		</section>
	)
}

export default UserBalanceInfo