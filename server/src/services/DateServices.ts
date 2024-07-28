

interface IDateServices { }

class DateServices implements IDateServices {
	/**
	 * @returns current date in format DD_MM_YYYY
	 */
	getCurrentDate(): string {
		const currentDate: Date = new Date();

		const day: string = currentDate.getDate().toString().padStart(2, '0');
		const month: string = (currentDate.getMonth() + 1).toString().padStart(2, '0');
		const year: number = currentDate.getFullYear();

		return `${day}_${month}_${year}`;
	}

	/**
	 * @returns current time in format Hour_Minutes_Seconds(H_M_S)
	 */
	getCurrentTime() {
		const currentDate: Date = new Date();

		const hours: string = currentDate.getHours().toString().padStart(2, "0");
		const minutes: string = currentDate.getMinutes().toString().padStart(2, "0");
		const seconds: string = currentDate.getSeconds().toString().padStart(2, "0");

		return `${hours}_${minutes}_${seconds}`;
	}

	getLocalISOStringDate(): string {
		// new Date().getTime() -> время указанное в миллисекундах от текущего времени до времени ( 1 января 1970 года )
		const currentDate: number = new Date().getTime();

		// new Date().getTimezoneOffset() -> разница в минутах между местным временем и временем UTC (время по Гринвичу).
		// умножаем часовой пояс на 60 секунд и на 1000 миллисекунд, что бы получить время в миллисекундах.
		const timeZone: number = new Date().getTimezoneOffset() * 60 * 1000;

		// получаем локальное время из текущей даты и часового пояса.
		const localISOString = new Date(currentDate - timeZone).toUTCString();

		return localISOString;
	}
}


export default new DateServices();