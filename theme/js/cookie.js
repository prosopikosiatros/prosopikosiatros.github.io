function setCookie(name,value,days){var date=new Date();date.setTime(date.getTime()+(days*24*60*60*1000));var expires="expires="+date.toUTCString();document.cookie=name+"="+value+";"+expires+";path=/";}
function getCookie(name){var nameEQ=name+"=";var ca=document.cookie.split(';');for(var i=0;i<ca.length;i++){var c=ca[i].trim();if(c.indexOf(nameEQ)===0)return c.substring(nameEQ.length,c.length);}
return null;}
window.onload=function(){};