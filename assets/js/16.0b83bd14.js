(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{163:function(t,a,e){"use strict";e.r(a);var r=e(0),p=Object(r.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"content"},[e("h1",{attrs:{id:"http缓存机制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#http缓存机制","aria-hidden":"true"}},[t._v("#")]),t._v(" HTTP缓存机制")]),e("p",[t._v("在 http1.0 时代，给客户端设定缓存方式可通过两个字段——“Pragma”和“Expires”来规范。虽然这两个字段早可抛弃，但为了做http协议的向下兼容，你还是可以看到很多网站依旧会带上这两个字段。")]),e("h2",{attrs:{id:"expires"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#expires","aria-hidden":"true"}},[t._v("#")]),t._v(" Expires")]),e("p",[t._v("http1.0时代，用来启用缓存和定义缓存时间。")]),e("pre",[e("code",[t._v('<meta http-equiv="expires" content="mon, 18 apr 2016 14:30:00 GMT"> \n')])]),e("p",[t._v("如何设置IE浏览器不走缓存路线，可以将content设置为-1或0。")]),e("p",[t._v("BUT，响应报文中Expires所定义的缓存时间是相对服务器上的时间而言的，如果客户端上的时间跟服务器上的时间不一致（特别是用户修改了自己电脑的系统时间），那缓存时间可能就没啥意义了。")]),e("h2",{attrs:{id:"cache-control"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cache-control","aria-hidden":"true"}},[t._v("#")]),t._v(" Cache-Control")]),e("p",[t._v("针对上面的问题，在http1.1中，新增了Cache-Control来定义缓存时间。")]),e("p",[t._v("我们依旧可以在HTML页面加上meta标签来给请求报头加上 Cache-Control 字段")]),e("p",[t._v("另外 Cache-Control 允许自由组合可选值，例如：")]),e("pre",[e("code",[t._v("Cache-Control: max-age=3600, must-revalidate\n")])]),e("p",[t._v("它意味着该资源是从原服务器上取得的，且其缓存（新鲜度）的有效时间为一小时，在后续一小时内，用户重新访问该资源则无须发送请求。")]),e("h2",{attrs:{id:"etag"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#etag","aria-hidden":"true"}},[t._v("#")]),t._v(" Etag")]),e("blockquote",[e("p",[t._v("参考：http://www.cnblogs.com/vajoy/p/5341664.html")])]),e("p",[t._v("我们试想，如果客户端上的某个资源过期了，但是服务器上并没有更新这个资源，如果这个资源还很大，重新向服务器请求，是不是浪费了大量的带宽和时间呢?")]),e("p",[t._v("那么是否有办法让服务器知道客户端现在存有的缓存文件，其实跟自己所有的文件是一致的，然后直接告诉客户端说“这东西你直接用缓存里的就可以了，我这边没更新过呢，就不再传一次过去了”。")]),e("p",[t._v("为了让客户端与服务器之间能实现缓存文件是否更新的验证、提升缓存的复用率，Http1.1新增了几个首部字段来做这件事情。")]),e("p",[t._v("1.Last-Modified"),e("br"),t._v("\n服务器将资源传递给客户端时，会将资源最后更改的时间以“Last-Modified: GMT”的形式加在实体首部上一起返回给客户端。")]),e("p",[t._v("客户端会为资源标记上该信息，下次再次请求时，会把该信息附带在请求报文中一并带给服务器去做检查，若传递的时间值与服务器上该资源最终修改时间是一致的，则说明该资源没有被修改过，直接返回304状态码即可。")]),e("p",[t._v("如果时间没有匹配上，就会412给客户端。")]),e("p",[t._v("2.Etag"),e("br"),t._v("\nLast-Modified 说好却也不是特别好，因为如果在服务器上，一个资源被修改了，但其实际内容根本没发生改变，会因为Last-Modified时间匹配不上而返回了整个实体给客户端（即使客户端缓存里有个一模一样的资源）。")]),e("p",[t._v("为了解决上面的问题，http1.1还添加了Etag实体首部字段。")]),e("p",[t._v("服务器会通过某种算法，给资源计算得出一个唯一标志符（比如md5标志），在把资源响应给客户端的时候，会在实体首部加上“ETag: 唯一标识符”一起返回给客户端。")]),e("p",[t._v("客户端会保留该 ETag 字段，并在下一次请求时将其一并带过去给服务器。服务器只需要比较客户端传来的ETag跟自己服务器上该资源的ETag是否一致，就能很好地判断资源相对客户端而言是否被修改过了。")]),e("p",[t._v("如果服务器发现ETag匹配不上，那么直接以常规GET 200回包形式将新的资源（当然也包括了新的ETag）发给客户端；如果ETag是一致的，则直接返回304知会客户端直接使用本地缓存即可。")]),e("p",[t._v("最后，应该说明，当Cache-Contrl和Expires同时存在时，Cache-Control的优先级要大于Expires。")])])}],!1,null,null,null);a.default=p.exports}}]);