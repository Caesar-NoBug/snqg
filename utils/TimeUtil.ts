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
    let hour = date.getHours();
    if(hour < 10) hour = "0" + hour;
    let minute = date.getMinutes();
    if(minute < 10) minute = "0" + minute;
		return hour + ":" + minute;
	}
  static getExactTimeString(time: number): string {
    let pastDate: Date = new Date(time * 1000);
    let currDate: Date = new Date();
    let currDay: number = currDate.getTime() - (currDate.getHours() * 60 * 60 + currDate.getMinutes() * 60 + currDate.getSeconds()) * 1000;
    if(pastDate.getTime() - currDay >= 0) return this.getMomentString(time);
    else if(currDay - pastDate.getTime() <= 24 * 60 * 60 * 1000) return "昨天" + this.getMomentString(time);
    else return this.getDateString(time);
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