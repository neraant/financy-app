import { useAuthState } from "react-firebase-hooks/auth"
import { Navigate } from 'react-router-dom'
import { auth } from '../firebase/firebase'

const ProtectedRoute = ({ children }) => {
	const [user, loading] = useAuthState(auth)
	
	if(loading) {
		return <div className='w-dvw h-dvh flex-center text-2xl font-sans'>Loading..</div>
	}

	if(!user) { 
		return <Navigate to="/signin"/>
	}

	return children
}

export default ProtectedRoute