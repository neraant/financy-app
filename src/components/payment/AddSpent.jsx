import { isNumber } from 'chart.js/helpers';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { months } from '../../utils/helpers';
import { loadFromLocalStorage, saveToLocalStorage } from '../../utils/storage';
import Header from '../common/Header';

const categories = [
	"Продукты питания",
	"Жилье",
	"Транспорт",
	"Связь",
	"Развлечения",
	"Одежда и обувь",
	"Здоровье",
	"Разное",
]

function processDate(date) {
	const day = date.getDate()
	const month = months[date.getMonth()]
	const hours = date.getHours()
	const minutes = date.getMinutes()
	const seconds = date.getSeconds()

	return `${day} ${month} в ${hours}:${minutes}:${seconds}`
}

const calculateMonthlySpent = () => {
  const allPayments = loadFromLocalStorage('paymentsList') || [];
  
  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();

  const monthlyPayments = allPayments.filter(({ nonFormatedDate: date }) => {
    const paymentDate = new Date(date);
    return paymentDate.getMonth() === currentMonth && paymentDate.getFullYear() === currentYear;
  });

  return (monthlyPayments.reduce((acc, { total }) => acc + Number(total), 0)).toFixed(2);
};

const AddSpent = () => {
	const [spentName, setSpentName] = useState("")
	const [spentTotal, setSpentTotal] = useState(0)
	const [category, setCategory] = useState(categories[0])

	const [showCategories, setShowCategories] = useState(false)
	const [spentList, setSpentList] = useState([])

	useEffect(() => {
		setSpentList(loadFromLocalStorage('paymentsList'))
	}, [])

	const handleDropDown = (e) => {
		if (!e.target.closest('.category-picking')) {
			setShowCategories(false)
		} else {
			setShowCategories(!showCategories)
		}
	}

	const handleCategory = (selectedCategory) => {
		setCategory(selectedCategory)
		setShowCategories(false)
	}

	const handleForm = (e) => {
		e.preventDefault()

		if(spentName === "" || spentTotal === "" || !isNumber(spentTotal)) return

		const newPayment = {
			id: uuidv4(),
			total: Number(spentTotal).toFixed(2),
			category: category,
			name: spentName,
			date: processDate(new Date()),
			nonFormatedDate: new Date(),
		};

		setSpentList(pre => {
			const updatedList = [...pre, newPayment];
      saveToLocalStorage('paymentsList', updatedList);
      return updatedList;
		})

		// calculationg balance 
		let initialBalance = loadFromLocalStorage('balance') || (0).toFixed(2)
		if(Array.isArray(initialBalance)) initialBalance = (0).toFixed(2)

		let calcBalance = (Number(initialBalance) - Number(spentTotal)) .toFixed(2)
		saveToLocalStorage('balance', calcBalance)

		setSpentName("")
		setSpentTotal(0)
	}

	return (
		<main>
			<Header page="addSpent"/>

			<section className="py-6 px-6">
				<div className="screen-max-width">
					<form className="flex flex-col bg-white h-[80vh] p-4 gap-8">
						<div className="flex flex-col gap-2">
							<h4 className='font-bold font-sans text-lg'>
								Введите название
							</h4>

							<input 
								value={spentName}
								onChange={(e) => {setSpentName(e.target.value)}}
								type="text" 
								placeholder='Название' 
								className='font-sans text-base placeholder-gray py-2 px-3 bg-[#8ecaff30] rounded-md focus:border-none focus:outline-none' 
							/>
						</div>

						<div className="flex flex-col gap-2">
							<h4 className='font-bold font-sans text-lg'>
								Выберите категорию
							</h4>

							<div 
								className="category-picking relative" 
								onClick={handleDropDown}
							>
								<span className='inline-block font-sans text-base py-2 px-3 bg-[#8ecaff30] rounded-md w-full'>
									{category}
								</span>

								<div className={`flex flex-col bg-white shadow-md rounded-md overflow-hidden absolute w-full top-[100%] max-h-0 transition-all duration-500 ${showCategories && 'max-h-56 overflow-visible overflow-x-hidden'}`}>
									{categories.map((category, i) => (
										<div className='relative' key={category}>
											<span 
												className='inline-block font-sans text-sm p-3 hover:bg-[#8ecaff30] w-full'
												onClick={() => handleCategory(category)}
											>
												{category}
											</span>
										
											{i !== categories.length - 1 && (
												<span className='block w-[100%] h-[1px] bg-gray absolute bottom-0 left-0 opacity-20' />
											)}
										</div>
									))}
								</div>
								
							</div>
						</div>

						<div className="flex flex-col gap-2">
							<h4 className='font-bold font-sans text-lg'>
								Введите потраченную сумма
							</h4>

							<input 
								value={spentTotal}
								onChange={(e) => {setSpentTotal(e.target.value)}}
								type="text" 
								placeholder='Сумма' 
								className='font-sans text-base placeholder-gray py-2 px-3 bg-[#8ecaff30] rounded-md focus:border-none focus:outline-none' 
							/>
						</div>

						<button 
							type='submit' 
							className='font-sans text-base py-2 w-full bg-[#D4FFEA] mt-auto rounded-md shadow-md'
							onClick={handleForm}
						>
							Добавить
						</button>
					</form>
				</div>
			</section>
		</main>
	)
}

export default AddSpent