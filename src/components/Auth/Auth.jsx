import { signInWithPopup } from 'firebase/auth'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { googleIcon } from '../../utils'
import { auth, provider } from '../config/firebase'

const Auth = () => {
	const [userName, setUserName] = useState("")
	const navigate = useNavigate()

	const signWithGoogle = async (e) => {
		e.preventDefault()

		if(userName === '' ) return

		try {
			const result = await signInWithPopup(auth, provider)
			const user = result.user

			document.cookie = 'isAuthenticated=true; path=/; max-age=3600'

			localStorage.setItem('userInfo', JSON.stringify({
				email: user.email,
				displayName: user.displayName,
				uid: user.uid,
				photoUrl: user.photoURL
			}))

			setUserName("")
			navigate('/')
		} catch (err) {
			console.error('Error during sign in:', err)
		}
	}

	return (
		<main className='h-full flex-center'>
			<form className='flex-center flex-col p-8 rounded-md shadow-2xl w-full max-w-[450px]'>
				<h1 className='font-sans font-bold text-xl mb-5'>
					Войти в аккаунт
				</h1>

				<div className="flex flex-col gap-3 w-full">
					<input 
						onChange={e => setUserName(e.target.value)}
						type="text" 
						placeholder='Введите имя' 
						className='font-sans text-base placeholder-gray py-2 px-3 bg-[#8ecaff30] rounded-md focus:border-none focus:outline-none'
						autoComplete='name'
						required
					/>
					<button 
						onClick={e => signWithGoogle(e)}
						type="email" 
						className='font-sans text-sm bg-lime-200 py-2 w-full shadow-md rounded-md text-center transition-all duration-300 hover:scale-[1.005] hover:shadow-lg flex items-center justify-center gap-2'
					>
						<img src={googleIcon} alt="google" width={28}/>
						Войти с Google
					</button>
				</div>
			</form>
		</main>
	)
}

export default Auth