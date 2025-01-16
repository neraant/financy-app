import arrow from "/assets/icons/arrow_icon.svg"
import back from "/assets/icons/back_icon.svg"
import cash from "/assets/icons/cash_icon.svg"
import deleteI from '/assets/icons/delete_icon.svg'
import google from "/assets/icons/google_icon.svg"
import list from '/assets/icons/list_icon.svg'
import more from "/assets/icons/more_icon.svg"
import note from "/assets/icons/note_icon.svg"
import notification from "/assets/icons/notification_icon.svg"
import purse from "/assets/icons/purse_icon.svg"
import settings from "/assets/icons/settings_icon.svg"
import statistic from "/assets/icons/statistic_icon.svg"
import telegram from "/assets/icons/telegram_icon.svg"
import tg from "/assets/icons/tg_icon.svg"
import user from "/assets/icons/user_icon.svg"
import vk from "/assets/icons/vk_icon.svg"

export const notificationIcon = notification 
export const cashIcon = cash 
export const moreIcon = more 
export const noteIcon = note 
export const purseIcon = purse 
export const settingsIcon = settings 
export const statisticIcon = statistic 
export const telegramIcon = telegram 
export const userIcon = user 
export const listIcon = list 
export const arrowIcon = arrow 
export const backIcon = back 
export const vkIcon = vk 
export const googleIcon = google 
export const tgIcon = tg 
export const deleteIcon = deleteI

export const months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"]

// working with data
export const saveToLocalStorage = (key, arr) => {
	localStorage.setItem(key, JSON.stringify(arr))
}

export const loadFromLocalStorage = (key) => {
	const data = localStorage.getItem(key)
	return data ? JSON.parse(data) : []
}

// working with date
export const isSameDay = (date1, date2) => {
  const d1 = new Date(date1);
  const d2 = new Date(date2);

  return d1.getDate() === d2.getDate() &&
         d1.getMonth() === d2.getMonth() &&
         d1.getFullYear() === d2.getFullYear();
};

export const isSameWeek = (date1, date2) => {
  const d1 = new Date(date1);
  const d2 = new Date(date2);

  const startOfWeek1 = new Date(d1.setDate(d1.getDate() - d1.getDay() + 1)); 
  const startOfWeek2 = new Date(d2.setDate(d2.getDate() - d2.getDay() + 1)); 

  return startOfWeek1.toDateString() === startOfWeek2.toDateString();
};

export const isSameMonth = (date1, date2) => {
  const d1 = new Date(date1);
  const d2 = new Date(date2);

  return d1.getMonth() === d2.getMonth() &&
         d1.getFullYear() === d2.getFullYear();
};

export const isSameYear = (date1, date2) => {
  const d1 = new Date(date1);
  const d2 = new Date(date2);

  return d1.getFullYear() === d2.getFullYear();
};

export const isInLast6Months = (date1, date2) => {
  const d1 = new Date(date1);
  const d2 = new Date(date2);

  const diffInMonths = (d2.getFullYear() - d1.getFullYear()) * 12 + (d2.getMonth() - d1.getMonth());
  return diffInMonths <= 6;
};