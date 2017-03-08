
myDate=new Date(); 
 cmas=Date.parse("Dec 25, "+myDate.getFullYear()) 
 today=Date.parse(myDate) 

 daysToChristmas=Math.round((cmas-today)/(1000*60*60*24)) 
//daysToChristmas=10 
 document.write("<b>"); 
 if (daysToChristmas==0) 
 document.write("Today is Christmas ... Merry Christmas!") 
 if (daysToChristmas<0) 
 document.write("<br>Christmas was "+-1*(daysToChristmas)+" days ago."); 
 if (daysToChristmas>0) 
 document.write("<br>There are "+daysToChristmas+" days to Christmas!") 
 document.write("</b>") 

