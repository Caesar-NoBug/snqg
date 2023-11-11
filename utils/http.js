const baseUrl = 'http://8.130.19.151:23456/'   
const request = (url = '', type = '', date = {}) => {
    return new Promise((resolve, reject) => {
        uni.request({
            method: type,
            url: baseUrl + url,
            data: date,
            header: {
				 'Content-Type': 'application/json'
			},
            dataType: 'json',         
        }).then((response) => {
            setTimeout(function() {
                uni.hideLoading();
            }, 200);
            let [error, res] = response;        
            resolve(res.data);
        }).catch(error => {
            let [err, res] = error;
            reject(err)
        })
    });
}
export default request