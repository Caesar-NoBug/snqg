export default class NavigateUtil {
	static navigateTo(path: String, data: any) {
		if(data == null) {
			uni.navigateTo({
				url: path,
			});
			return;
		}
		const property: string[] = Object.getOwnPropertyNames(data).filter(prop => data[prop] === null);
		let query: Array<String> = [];
		for(const prop in property) {
			query.push(prop + "=" + data[prop]);
		}
		uni.navigateTo({
			url: path + "?" + query.join("&"),
		});
	}
	static navigateBack() {
		uni.navigateBack();
	}
}