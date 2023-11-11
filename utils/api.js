import request from './http.js'

//添加一个愿望
export const addDesire = (desire) =>{
	return request('/desire/addDesire','POST',desire)
}

//添加一个感谢
// export const addThanks = (thanks) =>{
// 	return request('/desire/addThanks','POST',thanks)
// }

//获取某个儿童所有的愿望详情
export const getDesire = () =>{
	return request('/desire/getDesire','GET')
}

//获取针对某个愿望的感谢
// export const getThanks = () =>{
// 	return request('/desire/getThanks','GET')
// }

//修改某个愿望的内容
export const modifyDesire = (desire) =>{
	return request('/desire/modifyDesire','PUT',desire)
}

//修改某个感谢的内容
// export const modifyThanks = (thanks) =>{
// 	return request('/desire/modifyThanks','PUT',thanks)
// }

//删除愿望
export const removeDesire = (desireId) =>{
	return request('/desire/removeDesire','DELETE',desireId)
}

//删除感谢
// export const removeThanks = (thanksId) =>{
// 	return request('/desire/removeThanks','DELETE',thanksId)
// }

//获取任务信息
export const getTask = (childId) =>{
	return request('/task/getTask','GET',childId)
}

//提交任务信息
export const sendTask = (task) =>{
	return request('/task/sendTaskFinishRequest','POST',task)
}