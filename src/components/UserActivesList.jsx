import { listIcon, noteIcon, telegramIcon } from '../utils'
import UserActivesItem from './UserActivesItem'

const UserActivesList = () => {
	const userActives = [
		{
			icon: noteIcon,
			title: "Платежи",
			linkTo: "/payments"
		},
		{
			icon: listIcon,
			title: "Статистика",
			linkTo: "/statistic"
		},
		{
			icon: telegramIcon,
			title: "Техническая поддержка",
			linkTo: "/support"
		},
	]

	return (
		<section className='py-8 pt-0 px-6'>
			<div className="screen-max-width">
				<div className="flex flex-col gap-3">
					{userActives.map((_, i) => (
						<UserActivesItem 
							key={i} 
							userActives={userActives[i]} 
						/>
					))}
				</div>
			</div>
		</section>
	)
}

export default UserActivesList