
# web安全基础 及 xss漏洞挖掘实战基础

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

	请求头：ua，cookie，编码信息，Referer

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

任何可以输入的地方，并且输入可以在页面中出现

尝试不同的payload进行探索

- url
	
	`<scheme>://<netloc>/<path>?<query>#<fragment>`

- HTML

	html标签之间，<title></title>,<a></a>...

	html标签之内，<input type="text" value="" />，属性，事件

- 请求

	可能存在存储型xss

	表单提交

	数据请求，get

- DOM渲染

	- html与javascript的编码机制

		html: &#xH(十六进制)、&#D(十进制)、实体编码htmlEncode

		javascript：Unicode形式\uH(十六进制)、\xH(普通十六进制)、纯转意\',\",\<,\>

	- 具备HtmlEndoce功能的标签

		<textarea>,<title>,<iframe>

		webkit内核差异导致出现encode的漏洞

- 绕过浏览器xss filter

	针对同域的白名单，ie:referrer同域，chrome：script[src]同域

- 混淆代码

	大小写、编码混用

- payload

	- 常用的payload

		```
			<iframe src="data:text/html,<script>alert(1)</script>"></iframe>
			<img src=1 onerror=alert(9)
			<iframe onload="alert(1)"></iframe>
			<iframe src="javascript:alert(1)"></iframe>
			<iframe src="data:text/html,&lt;script&gt;alert(1)&lt;/script&gt;"></iframe>
			<iframe src="data:text/html,&lt;script&gt;alert(1)&lt;/script&gt;"></iframe>
		```

	- payload 的成功率

		`" onclick=alert(9) "` 成功率高

		`><script>alert(9)</script>`效果好


---

xss challenges:http://xss-quiz.int21h.jp/

xss 挑战：http://test.xss.tv/

xss编解码：http://xss.tv/index.php?do=encode-1

https://www.sec-wiki.com/topic/index/tag/websec

https://xianzhi.aliyun.com/forum/

http://www.nsoad.com/

https://www.easyaq.com/

http://blog.knownsec.com/


工具：burpsuite