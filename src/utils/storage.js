// working with data
export const saveToLocalStorage = (key, arr) => {
	localStorage.setItem(key, JSON.stringify(arr))
}

export const loadFromLocalStorage = (key) => {
	const data = localStorage.getItem(key)
	return data ? JSON.parse(data) : []
}