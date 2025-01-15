
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
	return (
		<div className="bg-black h-dvh">
			<div className="screen-max-width h-full">
				<div className="flex flex-col items-center gap-2 justify-center h-full">
					<Link to='/' className='text-white underline text-xl'>Go Home</Link>
					<h1 className='font-bold text-white text-3xl'>404 Not Found</h1>
				</div>
			</div>
		</div>
	)
}

export default NotFoundPage