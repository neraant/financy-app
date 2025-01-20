import { isNumber } from 'chart.js/helpers'
import { signOut } from 'firebase/auth'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { userIcon } from '../../utils'
import { loadFromLocalStorage, saveToLocalStorage } from '../../utils/storage'
import Header from '../common/Header'
import { auth } from '../config/firebase'
import UserBalanceInfo from './UserBalanceInfo'
import UserProfileDetails from './UserProfileDetails'

const Profile = () => {
	const [showAddBalance, setShowAddBalance] = useState(false)
	const [isEditing, setIsEditing] = useState(false)
	const [balanceInput, setBalanceInput] = useState("")
	const navigate = useNavigate()
	const [user, setUser] = useState({
		email: "example@gmail.com",
		displayName: "Guest",
		photoUrl: {userIcon},
		uid: "",
	})

	useEffect(() => {
		const loadedUser = localStorage.getItem('userInfo')
		if(loadedUser) {
			setUser(JSON.parse(loadedUser))
		}
	}, [])

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

	const editBalance = (e, newBalance) => {
		e.preventDefault()
		if(!isNumber(newBalance)) return

		saveToLocalStorage('balance', newBalance)

		setShowAddBalance(false)
		setBalanceInput("")
		setIsEditing(false)
	}

	const handleSignOut = async () => {
		try {
			await signOut(auth)
			document.cookie = 'isAuthenticated=; path=/; max-age=0;'
			localStorage.removeItem('userInfo')
		} catch (err) {
			console.error('Error during sign out:', err)
		}
		navigate('/signin')
	}

	return (
		<main className={`relative h-dvh ${showAddBalance && "overflow-hidden"}`}>
			<Header page={"profile"}/>
			<UserProfileDetails 
				handleSignOut={handleSignOut}
				user={user}
			/>
			<UserBalanceInfo 
				showAddBalance={showAddBalance} 
				setShowAddBalance={setShowAddBalance} 
				balanceInput={balanceInput}
				setBalanceInput={setBalanceInput}
				isHomepage={false}
				addBalance={addBalance}
				editBalance={editBalance}
				isEditing={isEditing}
				setIsEditing={setIsEditing}
			/>
		</main>
	)
}

export default Profile