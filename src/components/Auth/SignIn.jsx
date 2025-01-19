import { signInWithEmailAndPassword } from 'firebase/auth'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../firebase/firebase'

const SignIn = () => {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const navigate = useNavigate()

	const handleSignInFrom = async (e) => {
		e.preventDefault()
		try {
			await signInWithEmailAndPassword(auth, email, password)
			console.log("login successful");
		} catch (err) {
			console.error(err)
			return
		}
		setEmail("")
		setPassword("")
		navigate('/')
	}

	return (
		<main className='h-full flex-center'>
			<form className='flex-center flex-col p-8 rounded-md shadow-2xl w-full max-w-[450px]'>
				<h1 className='font-sans font-bold text-xl mb-5'>
					Вход
				</h1>

				<div className="flex flex-col gap-3 w-full">
					<input 
						onChange={e => setEmail(e.target.value)}
						type="email" 
						placeholder='Введите email' 
						className='font-sans text-base placeholder-gray py-2 px-3 bg-[#8ecaff30] rounded-md focus:border-none focus:outline-none'
						autoComplete='email'
						required
					/>
					<input 
						onChange={e => setPassword(e.target.value)}
						type="password" 
						placeholder='Введите пароль'
						className='font-sans text-base placeholder-gray py-2 px-3 bg-[#8ecaff30] rounded-md focus:border-none focus:outline-none'
						autoComplete='new-password'
						required
					/>
					<button 
						onClick={e => handleSignInFrom(e)}
						type="email" 
						className='font-sans text-sm bg-lime-200 py-2 w-full shadow-md rounded-md text-center transition-all duration-300 hover:scale-[1.005] hover:shadow-lg'
					>
						Войти
					</button>

					<p className='text-center font-sans text-sm '>
						Ещё не разегистрировались?
						<Link to="/signup" className='text-[#42AAFF] underline hover:no-underline'>Регистрация!</Link>
					</p>
				</div>

			</form>
		</main>
	)
}

export default SignIn