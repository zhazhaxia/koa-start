# web安全

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

## web存在安全问题的点