import { Link } from 'react-router-dom'
import { arrowIcon } from '../utils'

const UserActivesItem = ({ userActives }) => {
	return (
		<Link 
			to={userActives.linkTo} 
			className='p-3 pr-4 bg-white rounded-2xl shadow-sm flex items-center gap-4 transition-all duration-300 hover:scale-[1.01] hover:shadow-lg'
		>
			<div className="w-10 h-10 overflow-hidden bg-[#F7FAFE] flex items-center justify-center rounded-xl">
				<img src={userActives.icon} alt={userActives.icon} />
			</div>

			<h4 className="font-normal font-sans text-sm">
				{userActives.title}
			</h4>

			<img src={arrowIcon} alt="more" className='ml-auto' />
		</Link>
	)
}

export default UserActivesItem