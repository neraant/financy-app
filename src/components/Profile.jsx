import Header from './Header'
import UserBalanceInfo from './UserBalanceInfo'
import UserProfileDetails from './UserProfileDetails'

const Profile = () => {
	return (
		<main>
			<Header page={"profile"}/>
			<UserProfileDetails />
			<UserBalanceInfo />
		</main>
	)
}

export default Profile