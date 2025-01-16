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

export const months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"]