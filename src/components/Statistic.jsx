import { useState } from 'react'
import { moreIcon, statisticIcon } from '../utils'
import ChartView from './ChartView'

const Statistic = () => {
	const [showDates, setShowDates] = useState(false)
	const [date, setDate] = useState("за месяц")

	const dateSelection = [
		{
			title: "за год",
			def: "year",
		},
		{
			title: "за полгода",
			def: "halfyear",
		},
		{
			title: "за месяц",
			def: "month",
		},
		{
			title: "за неделю",
			def: "week",
		},
		{
			title: "за день",
			def: "day",
		},
	]

	const handleDateList = (e) => {
		if (!e.target.closest('.date-picking')) {
			setShowDates(false);
		} else {
			setShowDates(!showDates);
		}
	}

	const handleDateChange = (def) => {
    setDate(dateSelection.find(d => d.def === def).title);
    setShowDates(false);
  };

	return (
		<section className='px-6 pb-10 w-full h-full'>
			<div className="screen-max-width">
				<div className="bg-white rounded-2xl shadow-box">
					<div className="pt-6 pb-2 px-4 flex items-center justify-between">
						<div className="flex items-center w-full">
							<img 
								className='mr-4' 
								src={statisticIcon} 
								alt="statistic" 
								width={20} 
								height={16} 
							/>
							
							<h4 className='font-normal font-sans text-sm'>
								Статистика
							</h4>
						</div>

						<div 
							className="date-picking cursor-pointer flex items-center justify-end gap-2 relative w-full"
							onClick={handleDateList}
						>
							<span className='text-xs font-sans text-gray'>
								{date}
							</span>
							
							<img 
								src={moreIcon} 
								alt="dates" 
								className='relative bottom-[-1px]' 
							/>

							<ul 
								className={`flex flex-col w-full max-w-28 absolute top-4 right-0 bg-white rounded-xl shadow-xl p-1 transition-all duration-500 overflow-hidden
									${showDates ? 'max-h-48' : 'max-h-0 pointer-events-none'}`}
							>
								{dateSelection.map((dateOption, i) => (
									<li 
										key={i} 
										className='text-xs font-sans py-2 px-2 hover:opacity-[0.5] transition-all'
										onClick={() => handleDateChange(dateOption.def)}
									>
										{dateOption.title}
									</li>
								))}
							</ul>
						</div>
					</div>
						
					<ChartView pickedDate={dateSelection.find(d => d.title === date)} /> 
				</div>
			</div>
		</section>
	)
}

export default Statistic