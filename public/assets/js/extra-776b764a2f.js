function smshowSeats(e){var t=document.querySelectorAll("#smseats");console.log(e),t[e].classList.toggle("displayFlex")}function showSeats(e){var t=document.querySelectorAll("#seats");console.log(e),t[e].classList.toggle("displayFlex")}function smprevSlide(){var e=$("#smnextslide").data("count");if(e<=1)return void $("#smprevslide").css("display","none");var t=new Date;t.setDate(t.getDate()+e-2);var a=String(t.getDate()).padStart(2,"0"),s=String(t.getMonth()+1).padStart(2,"0"),l=t.getFullYear(),d=(new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday")[t.getDay()],a+"-"+s+"-"+l);console.log(d);var i=e-1;console.log(i),i<=29&&$("#smnextslide").css("display","block");let o=e;o>7&&(o%=7,0==o&&(o=7));let n=o-1;n<=0&&(n=7);let r=$("#smd"+o),c=$("#smd"+n);$(`#smd${n} a#checkme`).each((function(e,t){t.setAttribute("data-date",d)})),console.log(o,n),r.removeClass("displayBlock"),r.addClass("displayNone"),c.removeClass("displayNone"),c.addClass("displayBlock");var y=document.querySelector("#smli"+e),u=document.querySelector("#smli"+i);y.classList.add("displayNone"),u.classList.remove("displayNone"),u.classList.add("displayBlock"),$("#smnextslide").data("count",i)}function smnextSlide(){let e=$("#smnextslide").data("count");console.log(e);var t=new Date;t.setDate(t.getDate()+e);var a=String(t.getDate()).padStart(2,"0"),s=String(t.getMonth()+1).padStart(2,"0"),l=t.getFullYear(),d=(new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday")[t.getDay()],a+"-"+s+"-"+l);if(console.log(d),e>=30)return void $("#smnextslide").css("display","none");e>=1&&$("#smprevslide").css("display","block");let i=e+1;i>7&&(i%=7,0==i&&(i=7));let o=i-1;o<=0&&(o=7);let n=$("#smd"+i);$(`#smd${i} a#checkme`).each((function(e,t){t.setAttribute("data-date",d)}));let r=$("#smd"+o);console.log(i,o),r.removeClass("displayBlock"),r.addClass("displayNone"),n.removeClass("displayNone"),n.addClass("displayBlock");let c=e+1,y=document.querySelector("#smli"+c);document.querySelector("#smli"+e).classList.add("displayNone"),y.classList.remove("displayNone"),y.classList.add("displayBlock"),$("#smnextslide").data("count",c)}function nextSlide(){let e=$("#nextslide").data("count");console.log(e);var t,a,s,l=3*e+3,d=new Date;d.setDate(d.getDate()+l);for(var i=1;i<=3;i++){var o=String(d.getDate()).padStart(2,"0"),n=String(d.getMonth()+1).padStart(2,"0"),r=d.getFullYear();new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday")[d.getDay()];1==i&&(t=o+"-"+n+"-"+r),2==i&&(a=o+"-"+n+"-"+r),3==i&&(s=o+"-"+n+"-"+r);var c=d.setTime(d.getTime()+864e5);d=new Date(c)}if(console.log(t,a,s),e>=8)return void $("#nextslide").css("display","none");e>=0&&$("#prevslide").css("display","block");let y=3*e+3+1;y>7&&(y%=7,0==y&&(y=7));let u=y+1;u>7&&(u%=7,0==u&&(u=7));let m=u+1;m>7&&(m%=7,0==m&&(m=7));let p=y-1;p<=0&&(p=7);let g=p-1;g<=0&&(g=7);let v=g-1;v<=0&&(v=7);let h=$("#d"+y),S=$("#d"+u),f=$("#d"+m);$(`#d${y} a#checkme`).each((function(e,a){a.setAttribute("data-date",t)})),$(`#d${u} a#checkme`).each((function(e,t){t.setAttribute("data-date",a)})),$(`#d${m} a#checkme`).each((function(e,t){t.setAttribute("data-date",s)}));let k=$("#d"+p),C=$("#d"+g),b=$("#d"+v);console.log(y,u,m,p,g,v),k.removeClass("displayBlock"),k.addClass("displayNone"),C.removeClass("displayBlock"),C.addClass("displayNone"),b.removeClass("displayBlock"),b.addClass("displayNone"),h.removeClass("displayNone"),$(".clearfix li:nth-child("+y+")").css("order","1"),h.addClass("displayBlock"),S.removeClass("displayNone"),$(".clearfix li:nth-child("+u+")").css("order","2"),S.addClass("displayBlock"),f.removeClass("displayNone"),$(".clearfix li:nth-child("+m+")").css("order","3"),f.addClass("displayBlock"),console.log(e);let x=e+1,A=document.querySelectorAll("#li"+x),N=document.querySelectorAll("#li"+e);for(temp of N)temp.classList.add("displayNone");for(temp1 of A)temp1.classList.remove("displayNone"),temp1.classList.add("displayBlock");$("#nextslide").data("count",e+1)}function prevSlide(){var e,t,a,s=$("#nextslide").data("count"),l=3*(s-2)+3,d=new Date;d.setDate(d.getDate()+l);for(var i=1;i<=3;i++){var o=String(d.getDate()).padStart(2,"0"),n=String(d.getMonth()+1).padStart(2,"0"),r=d.getFullYear();new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday")[d.getDay()];1==i&&(e=o+"-"+n+"-"+r),2==i&&(t=o+"-"+n+"-"+r),3==i&&(a=o+"-"+n+"-"+r);var c=d.setTime(d.getTime()+864e5);d=new Date(c)}if(console.log(e,t,a),s<=0)return void $("#prevslide").css("display","none");var y=s-1;console.log(y),y<=8&&$("#nextslide").css("display","block");let u=3*y+3+1;u>7&&(u%=7,0==u&&(u=7));let m=u+1;m>7&&(m%=7,0==m&&(m=7));let p=m+1;p>7&&(p%=7,0==p&&(p=7));let g=u-1;g<=0&&(g=7);let v=g-1;v<=0&&(v=7);let h=v-1;h<=0&&(h=7);let S=$("#d"+u),f=$("#d"+m),k=$("#d"+p),C=$("#d"+g),b=$("#d"+v),x=$("#d"+h);$(`#d${h} a#checkme`).each((function(t,a){a.setAttribute("data-date",e)})),$(`#d${v} a#checkme`).each((function(e,a){a.setAttribute("data-date",t)})),$(`#d${g} a#checkme`).each((function(e,t){t.setAttribute("data-date",a)})),console.log(u,m,p,g,v,h),S.removeClass("displayBlock"),S.addClass("displayNone"),f.removeClass("displayBlock"),f.addClass("displayNone"),k.removeClass("displayBlock"),k.addClass("displayNone"),C.removeClass("displayNone"),$(".clearfix li:nth-child("+g+")").css("order","3"),C.addClass("displayBlock"),b.removeClass("displayNone"),$(".clearfix li:nth-child("+v+")").css("order","2"),b.addClass("displayBlock"),x.removeClass("displayNone"),$(".clearfix li:nth-child("+h+")").css("order","1"),x.addClass("displayBlock");var A=document.querySelectorAll("#li"+s),N=document.querySelectorAll("#li"+y);for(temp of A)temp.classList.add("displayNone");for(temp1 of N)temp1.classList.remove("displayNone"),temp1.classList.add("displayBlock");$("#nextslide").data("count",y)}var timing=document.querySelectorAll("#checkme");console.log(timing);for(let e=0;e<timing.length;e++)timing[e].addEventListener("click",(function(){for(let e=0;e<timing.length;e++){timing[e].classList.remove("selected");var t=$("#inputid");for(b of t)b.remove()}timing[e].classList.toggle("selected");var a='<input type="hidden" name="id" value="'+timing[e].getAttribute("data-id")+'"id="inputid"><input type="hidden" name="booked" value="'+timing[e].getAttribute("data-booked")+'" id="inputid"><input type="hidden" name="available" value="'+timing[e].getAttribute("data-available")+'" id="inputid"><input type="hidden" name="slotindex" value="'+timing[e].getAttribute("data-slot-index")+'" id="inputid"><input type="hidden" name="dayindex" value="'+timing[e].getAttribute("data-day-index")+'" id="inputid"><input type="hidden" name="date" value="'+timing[e].getAttribute("data-date")+'" id="inputid">';timing[e].innerHTML+=a,$("#submit_btn").prop("disabled",!1)}));