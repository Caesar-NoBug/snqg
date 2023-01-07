export default class TimeUtil {
	static getTimeString(time: number): string {
		if (time > 3600) return Math.floor((time / 3600)) + " 小时";
		else if (time > 60) return Math.floor((time / 60)) + " 分钟";
		else return time + " 秒";
	}
	static getDateString(time: number): string {
		let date: Date = new Date(time * 1000);
		return date.getFullYear() + "年" + (date.getMonth() + 1) + "月" + date.getDate() + "日";
	}
	static getMomentString(time: number): string {
		let date: Date = new Date(time * 1000);
		return (date.getHours() + 1) + ":" + (date.getMinutes() + 1);
	}
}