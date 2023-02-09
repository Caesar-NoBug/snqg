/* tslint:disable */
/* eslint-disable */
/**
 * 少年强国API
 * ## 1.概述    本文档只适用于前端和后端开发使用，API内容可能会发生改变，届时后端将会与前端就具体改动进行探讨，并将最终改动方案提交到本文档。    本文档中有关数据模型的相关陈述已在后端数据文档中详细论述，请参阅后端数据文档。    本文版本，修改日期，修改内容列表如下：    |版本|日期|详情|  |:---|:---|:---|  |`v0.1`|`2022年10月15日`|本版本为该项目的最初版本，只描述了关于登录，获取用户信息，将微信帐号与系统内帐号绑定的部分，同时由于还没有确定好后端存储以及小程序端需要的具体数据，导致`user_detail`返回值部分异常简陋，有待完善。此外，具体接口之前的总体说明以及针对返回值的解释也需要完善|  |`v0.2`|`2023年1月2日`|修复了`user_detail`部分的返回值，完善了总体说明，增加了后端数据文档|  |`v0.3`|`2023年2月7日`|使用OpenAPI规范重写文档，便于日后生成SDK|    ## 2.基础规则    ### 1.API接口    API统一使用RESTFul或类RESTful风格接口模式，（如果将来会有迭代的话，有可能）使用接口路径中的`vX.X`确认api版本。    应用的`development`环境接口为`localhost:3000/`。    `production`环境接口待定。    ### 2.API参数    API GET参数使用Query传输    API POST传参部分使用`content-type: application/json`类型传输，部分使用Query传输，例 `username=admin&useremail=admin@example.com`    API的所有返回值均为`json`格式，基础结构如下    ```json  {    \"code\": 200, //结果code    \"msg\": \"ok\", //消息    \"data\": [] //返回信息  }  ```    无论执行成功与否，API Get请求状态码均为200, Post请求状态码均为201    ### 3.API结果code    API结果code遵循`HTTP Response Code`，目前用到的code如下：    |code|状态|含义|  |:---|:---|:---|  |200|OK|正常|  |400|Bad Request|参数等发生错误|  |403|Forbidden|没有登录或没有权限|  |404|Not Found|没有找到接口|  |429|Too many requests|触发速率限制|  |500|Internel Server Error|服务下线或运行出错|    ### 4.API安全    前端在访问API的过程中，需要在body最后添加一个auth参数，公式为    `以秒为单位的时间戳后两位+32位小写md5(以秒为单位的时间戳+除token外剩下的body参数)`    例如，假设现在的时间戳为`1665814186`，除token外剩下的body参数为`username=admin&useremail=admin@example.com`    则auth计算公式为`\"86\"+32位小写md5(\"1665814186\"+\"username=admin&useremail=admin@example.com\")`,结果为`86631e1979d748b09561f99a974d598d33`  
 *
 * OpenAPI spec version: v0.3
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/**
 * 用户基础信息
 * @export
 * @interface UserDetailMinDto
 */
export interface UserDetailMinDto {
    /**
     * 
     * @type {string}
     * @memberof UserDetailMinDto
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof UserDetailMinDto
     */
    name: string;
    /**
     * 
     * @type {number}
     * @memberof UserDetailMinDto
     */
    type: number;
    /**
     * 
     * @type {string}
     * @memberof UserDetailMinDto
     */
    avatar: string;
    /**
     * 
     * @type {number}
     * @memberof UserDetailMinDto
     */
    callCount: number;
    /**
     * 
     * @type {number}
     * @memberof UserDetailMinDto
     */
    callTime: number;
}
