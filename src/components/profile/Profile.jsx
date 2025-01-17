import { isNumber } from 'chart.js/helpers'
import { useState } from 'react'
import { loadFromLocalStorage, saveToLocalStorage } from '../../utils/storage'
import Header from '../common/Header'
import UserBalanceInfo from './UserBalanceInfo'
import UserProfileDetails from './UserProfileDetails'

const Profile = () => {
	const [showAddBalance, setShowAddBalance] = useState(false)
	const [isEditing, setIsEditing] = useState(false)
	const [balanceInput, setBalanceInput] = useState("")

	const addBalance = (e, newBalance) => {
		e.preventDefault()
		if(!isNumber(newBalance)) return
		
		let oldBalance = loadFromLocalStorage('balance')
		let accBalance = (Number(newBalance) + Number(oldBalance)).toFixed(2)

		saveToLocalStorage('balance', accBalance)

		setShowAddBalance(false)
		setBalanceInput("")
		setIsEditing(false)
	}

	return (
		<main className={`relative h-dvh ${showAddBalance && "overflow-hidden"}`}>
			<Header page={"profile"}/>
			<UserProfileDetails />
			<UserBalanceInfo 
				showAddBalance={showAddBalance} 
				setShowAddBalance={setShowAddBalance} 
				balanceInput={balanceInput}
				setBalanceInput={setBalanceInput}
				isHomepage={false}
				addBalance={addBalance}
				isEditing={isEditing}
				setIsEditing={setIsEditing}
			/>
		</main>
	)
}

export default Profile