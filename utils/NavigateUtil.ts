export default class NavigateUtil {
	static navigateTo(path: String, data: any) {
		if(data == null) {
			uni.navigateTo({
				url: path,
			});
			return;
		}
		uni.navigateTo({
			url: path + "?data=" + encodeURIComponent(JSON.stringify(data)),
		});
	}
	
	static getNavigateData(option) {
		if(option.data == null) {
			return null;
		}
		return JSON.parse(decodeURIComponent(option.data));
	}
	
	static navigateBack() {
		uni.navigateBack();
	}
}