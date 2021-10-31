/* Add code block style */
<link href='//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.3.1/styles/default.min.css' rel='stylesheet'/>

/* Add TOC style */
<link href='http://fonts.googleapis.com/css?family=Oswald' rel='stylesheet' type='text/css'/>
<script type='text/javascript'> 
//<![CDATA[ 
//*************TOC Plugin V2.0 by MyBloggerTricks.com 
function mbtTOC2(){var a=1,b=0,c="";document.getElementById("post-toc").innerHTML=document.getElementById("post-toc").innerHTML.replace(/<h([\d]).*?>(.*?)<\/h([\d]).*?>/gi,function(d,e,f,g){return e!=g?d:(e>a?c+=new Array(e-a+1).join("<ol class='point"+a+"'>"):e<a&&(c+=new Array(a-e+1).join("</ol></li>")),b+=1,c+='<li><a href="#point'+b+'">'+f+"</a>",a=parseInt(e),"<h"+e+" id='point"+b+"'>"+f+"</h"+g+">")}),a&&(c+=new Array(a+1).join("</ol>")),document.getElementById("mbtTOC2").innerHTML+=c}function mbtToggle2(){var a=document.getElementById("mbtTOC2"),b=document.getElementById("Tog");"none"===a.style.display?(a.style.display="block",b.innerHTML="hide"):(a.style.display="none",b.innerHTML="show")} 
//]]>
