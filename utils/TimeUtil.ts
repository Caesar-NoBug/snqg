export default class TimeUtil {
	static getTimeString(time: number): string {
		if (time > 3600) return Math.floor((time / 3600)) + " 小时";
		else if (time > 60) return Math.floor((time / 60)) + " 分钟";
		else return time + " 秒";
	}
	static getDateString(time: number): string {
		let date: Date = new Date(time * 1000);
		return date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate() + " ";
	}
	static getMomentString(time: number): string {
		let date: Date = new Date(time * 1000);
		return (date.getHours() + 1) + ":" + (date.getMinutes() + 1);
	}
	// 声明通话平均时长
	static getAverageString(call_count: number, call_time: number): string{
		return (call_time/call_count + "小时");
	}
	// 声明志愿时长
	static getVolunteerTimeString(call_count: number): string {
		var volunteer_number = 0.75;
		return (volunteer_number*call_count + "小时");
	}
	// 声明成功率
	static getCallSuccessDate(call_count: number, total_counts: number): string{
		return Math.round(call_count/total_counts*10000)/100 + "%";
	}
}