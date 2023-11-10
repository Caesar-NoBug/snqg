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
	
	static switchTab(path: String) {
		{   
			uni.switchTab({
				url: path,
				success:()=> {
						console.log(1);
						},
				fail: (res) => {
				console.log('navigate failed',res);
				}
			})
		}
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