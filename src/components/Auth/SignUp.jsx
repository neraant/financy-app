import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../firebase/firebase'

const SignUp = () => {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const navigate = useNavigate()

	const handleSignUpFrom = async (e) => {
		e.preventDefault()
		try {
			await createUserWithEmailAndPassword(auth, email, password)
			console.log("account created");
		} catch (err) {
			console.error(err)
			return
		}
		setEmail("")
		setPassword("")
		navigate('/signin')
	}

	return (
		<main className='h-full flex-center'>
			<form className='flex-center flex-col p-8 rounded-md shadow-2xl w-full max-w-[450px]'>
				<h1 className='font-sans font-bold text-xl mb-5'>
					Регистрация
				</h1>

				<div className="flex flex-col gap-3 w-full">
					<input 
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						type="email" 
						placeholder='Введите email' 
						className='font-sans text-base placeholder-gray py-2 px-3 bg-[#8ecaff30] rounded-md focus:border-none focus:outline-none'
						autoComplete='email'
						required
					/>
					<input 
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						type="password" 
						placeholder='Введите пароль'
						className='font-sans text-base placeholder-gray py-2 px-3 bg-[#8ecaff30] rounded-md focus:border-none focus:outline-none'
						autoComplete='new-password'
						required
					/>
					<button 
						onClick={e => handleSignUpFrom(e)}
						type="email" 
						className='font-sans text-sm bg-lime-200 py-2 w-full shadow-md rounded-md text-center transition-all duration-300 hover:scale-[1.005] hover:shadow-lg'
					>
						Зарегистрироваться
					</button>

					<p className='text-center font-sans text-sm '>
						Уже зарегистрированы?
						<Link to="/signin" className='text-[#42AAFF] underline hover:no-underline'>Войти!</Link>
					</p>
				</div>

			</form>
		</main>
	)
}

export default SignUp