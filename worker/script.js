!function(t){var e={};function i(r){if(e[r])return e[r].exports;var s=e[r]={i:r,l:!1,exports:{}};return t[r].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=t,i.c=e,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(r,s,function(e){return t[e]}.bind(null,s));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=0)}([function(t,e,i){"use strict";i.r(e);function r(t){return t[t.length-1]}function s(t){return t.length>1}var l=async(t,e)=>{if("compact"==e)var i=!0,l=!1;else if("minimum"==e)i=!1,l=!0;else i=!1,l=!1;try{const e=encodeURI(t);console.log("Product details initiated");try{var a=await(await fetch("https://www.flipkart.com/"+e)).text();if(s((a=a.replace(/&amp;/g,"&")).split("for has been moved or deleted")))throw"Link provided doesn't corresponds to any product"}catch(t){return JSON.stringify({error_message:t,possible_solution:"Validate your link and try removing https://www.flipkart.com from your product link",bug_report:"https://github.com/dvishal485/flipkart-scraper-api/issues"})}var p,o=null,n=null,c=null,u=[],d=a.split("<h1")[1].split("</span>")[0].split('">')[2].replace(/<!-- -->/g,"").replace(/&nbsp;/g,""),h=(n=a.split("<h1")[1].split(">₹")[1].split("</div>")[0],a.split("<h1")[1].split(">₹")[2].split("</div>")[0].split("\x3c!-- --\x3e")),g=s(h),f=a.split("<h1")[1].split(">₹"+n)[0].split("fk-cp-zion/img/fa_62673a.png"),m=s(f);n=parseInt(n.replace(/,/g,"")),p=g?parseInt(h[1].replace(/,/g,"")):n,"/"==(c=r(r((r(a.split("product.share.pp")[0].split('"url":"'))+"product.share.pp").split(" ")).split('"')))[0]&&(c="http://flipkart.com"+c);var v=s(a.split("This item is currently out of stock</div>")),y=a.split("Highlights")[1].split("</ul>")[0].replace(/<\/li>/g,"").split("<li");if(s(y))for(_=1;_<y.length;_++)u.push(y[_].split(">")[1]);var w=f[0].split("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMiI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTYuNSA5LjQzOWwtMy42NzQgMi4yMy45NC00LjI2LTMuMjEtMi44ODMgNC4yNTQtLjQwNEw2LjUuMTEybDEuNjkgNC4wMSA0LjI1NC40MDQtMy4yMSAyLjg4Mi45NCA0LjI2eiIvPjwvc3ZnPg==");if(s(w))o=r(w[0].split('">')).split("<")[0];if(l)return JSON.stringify({name:d,current_price:n,original_price:p,discounted:g,discount_percent:parseInt(100*(1-n/p)),rating:o,in_stock:!v,f_assured:m,share_url:c,highlights:u},null,2);var _,k=[],b=a.split("Specifications</div>")[1].split(">Safe and Secure Payments.")[0].replace(/&amp;/g,"&").split("</div><table");for(_=1;_<b.length;_++){var M,I="",S=[],P=r(b[_-1].split(">")),N=b[_].split("</td>");for(M=1;M<N.length;M+=2){var j=r(N[M-1].split(">")),C=r(N[M].split("</li>")[0].split(">"));null==j&&""==j||(i?I+=j+" : "+C+"; ":S.push({property:j,value:C}))}i?k.push({title:P,details:I}):k.push({title:P,details:S})}return JSON.stringify({name:d,current_price:n,original_price:p,discounted:g,discount_percent:parseInt(100*(1-n/p)),rating:o,in_stock:!v,f_assured:m,share_url:c,highlights:u,specs:k},null,2)}catch(t){return JSON.stringify({error:"Couldn't fetch information : "+t.message,possible_solution:"Don't lose hope, contact the support",bug_report:"https://github.com/dvishal485/flipkart-scraper-api/issues"})}};var a=async t=>{const e="https://www.flipkart.com/search?marketplace=FLIPKART&q="+t;console.log("Search initiated : "+e);var i,r=await(await fetch(e)).text(),s=(r=r.replace(/style="color:#000000;font-size:14px;font-style:normal;font-weight:700">₹/g,">Rs. ")).split(">₹"),l=[],a=null,p=!1;for(i=1;i<s.length;i++)try{var o,n=null,c=null,u=null,d=!1,h=null,g=null,f=s[i].split("</div>")[0].replace(/,/g,"");if(o=parseInt(f),1==f.split("</option>").length){try{(g=(h=s[i-1].split("</a>"))[h.length-2].split('target="_blank"')).length>1&&(c="https://www.flipkart.com"+g[1].split('href="')[1].split('"')[0],u=g[1].split('href="')[1].split('"')[1].split(">")[1],a="A")}catch(t){console.log("Failed to obtain product name and link from Method A : "+t.message)}if(n=parseInt(o),""==u||null==u){console.log("Executing method B");h=null,g=null;try{"C"!=a&&"D"!=a||(i++,p=!0),h=s[i-2].split("<a"),a="B",1==h.length&&(console.log("Executing method C"),h=s[i-1].split("<a"),a="C"),(g=h[h.length-1].split('target="_blank"')).length>1&&(c="https://www.flipkart.com"+g[1].split('href="')[1].split('"')[0],u=g[1].split('href="')[1].split('"col col-7-12">')[1].split("</div>")[0].split(">")[1]),p&&(i--,p=!1,a="D")}catch(t){console.log("Failed to obtain product name and link from Method A : "+t.message)}if(""==u||null==u)console.log("Unimplemented");else{if(i+1!=s.length)(d=(m=s[i+1].split("</div>")[0].replace(/,/g,"").split("\x3c!-- --\x3e")).length>1)&&(i++,n=parseInt(m[1]));l.push({name:u,link:c,current_price:o,original_price:n,discounted:d,fetch_method:a})}}else{var m;if(i+1!=s.length)(d=(m=s[i+1].split("</div>")[0].replace(/,/g,"").split("\x3c!-- --\x3e")).length>1)&&(i++,n=parseInt(m[1]));l.push({name:u,link:c,current_price:o,original_price:n,discounted:d,fetch_method:a})}}else r=r.replace("₹","Rs."),console.log("Ignoring amount "+o+" : Suspected to be dropdown menu item")}catch(t){console.log(t.message)}return JSON.stringify({result:l},null,2)};var p=t=>({"Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"*","Access-Control-Allow-Methods":"GET","Access-Control-Max-Age":"86400","Content-Type":"application/json","Cache-Control":"no-cache, no-store, must-revalidate","Your-IP":t.get("cf-connecting-ip"),"Your-Country":t.get("CF-IPCountry"),Host:t.get("host"),"Made-By":atob("VmlzaGFsIERhcyBodHRwczovL2dpdGh1Yi5jb20vZHZpc2hhbDQ4NQ==")});function o(t){return t[t.length-1]}function n(t){return t.length>1}function c(t,e,i){var r=!1;e=e.toLowerCase(),t=t.toLowerCase();for(var s=0;s<i.length;s++)if(i[s]=i[s].toLowerCase(),n(t.split(i[s]))||n(e.split(i[s])))return r=!0;return r}var u=async t=>{try{var e=t.split("/")[0];t=t.split(e+"/")[1];var i=e.split("&");const j=encodeURI(t);console.log("Product details initiated");try{var r=await(await fetch("https://www.flipkart.com/"+j)).text();if(n((r=r.replace(/&amp;/g,"&")).split("for has been moved or deleted")))throw"Link provided doesn't corresponds to any product"}catch(t){return JSON.stringify({error_message:t,possible_solution:"Validate your link and try removing https://www.flipkart.com from your product link",bug_report:"https://github.com/dvishal485/flipkart-scraper-api/issues"})}var s,l=null,a=null,p=null,u=[],d=r.split("<h1")[1].split("</span>")[0].split('">')[2].replace(/<!-- -->/g,"").replace(/&nbsp;/g,""),h=(a=r.split("<h1")[1].split(">₹")[1].split("</div>")[0],r.split("<h1")[1].split(">₹")[2].split("</div>")[0].split("\x3c!-- --\x3e")),g=n(h),f=r.split("<h1")[1].split(">₹"+a)[0].split("fk-cp-zion/img/fa_62673a.png"),m=n(f);a=parseInt(a.replace(/,/g,"")),s=g?parseInt(h[1].replace(/,/g,"")):a,"/"==(p=o(o((o(r.split("product.share.pp")[0].split('"url":"'))+"product.share.pp").split(" ")).split('"')))[0]&&(p="http://flipkart.com"+p);var v=n(r.split("This item is currently out of stock</div>")),y=r.split("Highlights")[1].split("</ul>")[0].replace(/<\/li>/g,"").split("<li");if(n(y))for(_=1;_<y.length;_++)u.push(y[_].split(">")[1]);var w=f[0].split("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMiI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTYuNSA5LjQzOWwtMy42NzQgMi4yMy45NC00LjI2LTMuMjEtMi44ODMgNC4yNTQtLjQwNEw2LjUuMTEybDEuNjkgNC4wMSA0LjI1NC40MDQtMy4yMSAyLjg4Mi45NCA0LjI2eiIvPjwvc3ZnPg==");if(n(w))l=o(w[0].split('">')).split("<")[0];var _,k=[],b=[],M=r.split("Specifications</div>")[1].split(">Safe and Secure Payments.")[0].replace(/&amp;/g,"&").split("</div><table");for(_=1;_<M.length;_++){var I,S=M[_].split("</td>");for(I=1;I<S.length;I+=2){var P=o(S[I-1].split(">")),N=o(S[I].split("</li>")[0].split(">"));null==P&&""==P||c(N,P,i)&&b.push({property:P,value:N})}0!=b.length&&(k=b)}return JSON.stringify({name:d,current_price:a,original_price:s,discounted:g,discount_percent:parseInt(100*(1-a/s)),rating:l,in_stock:!v,f_assured:m,share_url:p,highlights:u,desired_specs:k},null,2)}catch(t){return JSON.stringify({error:"Couldn't fetch information : "+t.message,possible_solution:"Don't lose hope, contact the support",bug_report:"https://github.com/dvishal485/flipkart-scraper-api/issues"})}};addEventListener("fetch",t=>{t.respondWith(async function(t){const e=p(t.headers),i=new URL(t.url).pathname;return"GET"==t.method?i.startsWith("/search/")?new Response(await a(i.replace("/search/","")),{status:200,headers:e}):i.startsWith("/product/min/")?new Response(await l(i.replace("/product/min/",""),"minimum"),{status:200,headers:e}):i.startsWith("/product/compact/")?new Response(await l(i.replace("/product/compact/",""),"compact"),{status:200,headers:e}):i.startsWith("/product/")?new Response(await l(i.replace("/product/",""),"general"),{status:200,headers:e}):i.startsWith("/property/")?new Response(await u(i.replace("/property/",""),"general"),{status:200,headers:e}):new Response(JSON.stringify([{name:"flipkart-scraper",description:"API to scrapes search result and product details from flipkart",version:2,author:"Vishal Das",email:"dvishal485@gmail.com",telegram:"@dvishal485",documentation:"https://dvishal485.github.io/flipkart-scraper-api/",usage:{search_api:"https://flipkart.dvishal485.workers.dev/search/<product_name>",product_api:"https://flipkart.dvishal485.workers.dev/product/<product_link_argument>",product_min_api:"https://flipkart.dvishal485.workers.dev/product/min/<product_link_argument>",product_compact_api:"https://flipkart.dvishal485.workers.dev/product/compact/<product_link_argument>",product_search_specs:"https://flipkart.dvishal485.workers.dev/property/<specs_to_search>/<product_link_argument>"},examples:{search_api:"https://flipkart.dvishal485.workers.dev/search/smartwatch",product_api:"https://flipkart.dvishal485.workers.dev/product/dl/huami-amazfit-bip-u-smartwatch/p/itmc6ae7a0e9f440?pid=SMWFY7PPGQTEH2BZ",product_min_api:"https://flipkart.dvishal485.workers.dev/product/min/dl/huami-amazfit-bip-u-smartwatch/p/itmc6ae7a0e9f440?pid=SMWFY7PPGQTEH2BZ",product_compact_api:"https://flipkart.dvishal485.workers.dev/product/compact/dl/huami-amazfit-bip-u-smartwatch/p/itmc6ae7a0e9f440?pid=SMWFY7PPGQTEH2BZ",product_search_specs:"https://flipkart.dvishal485.workers.dev/property/battery&display/dl/huami-amazfit-bip-u-smartwatch/p/itmc6ae7a0e9f440?pid=SMWFY7PPGQTEH2BZ"}}],null,2),{status:200,headers:e}):Response.redirect("https://github.com/dvishal485/flipkart-scraper/",301)}(t.request))})}]);