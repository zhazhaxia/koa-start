# web安全基础

## 常见安全问题

- sql注入
	
`select username from user where userid=id;`

当传`id = '1 and 1=1;--'`  ，组成语句`select username from user where userid=1 and 1=1;-- `，这样就发生了sql注入

- xss跨站脚本攻击

`http://kg.qq.com/xss/username=milu<img src=1 onerror=alert(document.cookie)>`

并且在js中存在`document.write(username)`，这样就发生了页面的xss问题。

- 同源策略

同协议、同端口、同域名

跨域，Access-Control-Arrow-Origin:*

- http协议

请求头：ua，cookie，编码信息，referrer

响应头：server，cookie，Access-Control-Allow-Credentials，Access-Control-Allow-Origin，返回码

## web安全问题

- HTML

HTML结构松散，标签可大小写混用，属性可以单引号，双引号，反引号，甚至不加引号

标签种类多，功能不一，img，a等标签可以发起网络请求，iframe可以嵌套页面

- javascript

js控制整个前端逻辑

dom操作，获取dom数据

cookie操作

url操作

ajax可以模拟浏览器发起网络请求

- css

伪装web页面

## cookie安全

- 子域cookie机制

子域可以指定cookie为父级域，但父级不能指定cookie为子级

风险：跨子域泄漏

- 路径cookie

不同路径不能访问

风险：可以通过ifame访问到

- httpOnly机制

指定的cookie只能通过http传输，脚本不能读取

漏洞：某些后台语言的调试信息会暴露httpOnly cookie，有些web服务器如apache的某个版本存在缺陷会暴露httpOnlycookie


## xss 跨站脚本攻击

页面中不被预期的脚本被执行了

- xss类型

	- 反射性xss

	- 存储型xss

	- Dom xss

- 可能出现xss的地方

页面中任何可以写入数据的地方

- 危害

挂马、盗取cookie、dDos，钓鱼。。。


## CSRF跨站请求伪造

跨站点的请求，请求是伪造的，不是用户主动想发出的。

## 界面劫持

基于视觉欺骗的攻击，在欺骗网页上嵌套了一个目标网页的iframe，并且iframe不可见。用户在欺骗网页的操作其实是对目标网页的操作，从而完成攻击。

## xss漏洞挖掘




