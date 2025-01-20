import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { backIcon, notificationIcon, userIcon } from '../../utils';

const headerContent = {
  profile: {
    link: "/",
    icon: backIcon,
    alt: "back",
    title: "Профиль"
  },
  payments: {
    link: "/",
    icon: backIcon,
    alt: "back",
    title: "Платежи"
  },
  addSpent: {
    link: "/payments",
    icon: backIcon,
    alt: "back",
    title: "Добавить"
  },
  home: {
    link: "/notifications",
    icon: notificationIcon,
    alt: "notifications",
    title: "Личный кабинет"
  },
};

const Header = ({ page = "home" }) => {
	const content = headerContent[page] || {};
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

  if (!content.title) return null;

	return (
		<header className='py-3 px-6 bg-white'>
			<div className="screen-max-width">
				<nav className="flex justify-between items-center">
					<Link to={content.link} className={`${page !== 'home' ? 'transform-all duration-200 ease-in hover:-translate-x-[2px]' : ''}`}>
						<img src={content.icon} alt={content.alt} width={page === "home" ? 24 : 12} />
					</Link>
					<h1 className={`text-base font-normal font-sans uppercase ${page && 'ml-6'}`}>
						{content.title}
					</h1>

					<Link to="/profile">
						<img className='overflow-hidden rounded-full' src={user.photoUrl} alt='profile' width={40} height={40}/>
					</Link>
				</nav>
			</div>
		</header>
	)
}

export default Header