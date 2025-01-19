import { googleIcon, tgIcon, userIcon, vkIcon } from '../../utils'

const UserProfileDetails = ({ handleSignOut, userEmail }) => {
	return (
		<section className="bg-blue pt-8 pb-12 mb-4">
			<div className="screen-max-width">
				<div className="flex flex-col items-center gap-4 relative">
					<img 
						src={userIcon} 
						alt="avatar" 
						className='object-cover w-full h-full max-w-24'
					/>

					<div className="flex flex-col items-center gap-2 w-full">
						<h2 className="font-medium font-sans text-xl">
							{userEmail}
						</h2>

						<span className="font-normal font-sans text-xs text-gray inline-block ">
							+7 915 999 99 99
						</span>

						<span className="font-normal font-sans text-xs text-gray inline-block ">
							support@financy.money
						</span>

						<div className="flex items-center bg-white gap-6 py-2 px-4 rounded-lg absolute left-[50%] bottom-[-66px] translate-x-[-50%] shadow-sm">
							<button className='transform-all duration-300 hover:scale-[1.10]'>
								<img src={googleIcon} alt="google" width={24} height={24} />
							</button>
							<button className='transform-all duration-300 hover:scale-[1.10]'>
								<img src={vkIcon} alt="vk" width={24} height={24} />
							</button>
							<button className='transform-all duration-300 hover:scale-[1.10]'>
								<img src={tgIcon} alt="telegram" width={24} height={24} />
							</button>
						</div>

						<button 
							className='absolute top-0 right-[12px] px-4 py-1 bg-red-500 text-white font-sans text-md rounded-md hover:bg-red-400 transition-all duration-200'
							onClick={handleSignOut}
						>
							Выйти
						</button>
					</div>
				</div>
			</div>
		</section>
	)
}

export default UserProfileDetails