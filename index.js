 var text="I can predict all your device features at once.Dare to try out Tool Made By Neel.. ";
    var word = text.split("");
var i = 0;
var interval = setInterval(writeText, 80 );
function writeText() {
    var p = document.getElementsByTagName("p")[0];
    if (i < word.length) {
        p.innerHTML += word[i];
        i++;
    } else {
        clearInterval(interval);
         document.getElementById("da").style.display="block";
  
  } 
} 

function dat()
{
   navigator.vibrate(700); document.getElementById("da").style.display="none";
    document.getElementById("t").style.display="none";
    document.getElementById("det").style.display="block";
    var x = "Browser CodeName: " + navigator.appCodeName
    
    var a="Browser Name: " +navigator.appName;
    var b="Version Info: " + navigator.appVersion;
    
    if(navigator.language=="en")
    var c="Language of the browser: " + "English";
    else
   var c = "Language of the browser: " + navigator.language
   if(navigator.onLine==true)
    var d="Is the browser online? "+ "online";
   else
    var d="Is the browser online? "+ "offline";
    var e="Connection Type : " +navigator.connection.type;
    
    var f="Maximum Signal Strength : "+navigator.connection.downlinkMax+"mbps";
    
   var connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection; var type = connection.effectiveType; 
 document.getElementById("l8").innerHTML="Signal Type : "+type; navigator.getBattery().then(function(battery) { var level = battery.level;
 document.getElementById("l6").innerHTML="Battery charge: "+(level*100)+"%";
 
 });
 
 var g = "Platform: " + navigator.platform;
 
 var h = "Cookies enabled: " + navigator.cookieEnabled;
   
  document.getElementById("l1").innerHTML=x;
   document.getElementById("l2").innerHTML=a; 
  document.getElementById("l3").innerHTML=b; 
  document.getElementById("w").style.display="block";
  document.getElementById("wm").style.display="block";
 document.getElementById("l4").innerHTML=c;
 document.getElementById("l5").innerHTML=d;   
 
 document.getElementById("l7").innerHTML=e;
 document.getElementById("l9").innerHTML=f;
 
document.getElementById("l10").innerHTML=g;
 document.getElementById("l11").innerHTML=h;
    
}
function wm()
{
    document.getElementById("det").style.display="none";
    
    document.getElementById("wm").style.display="none";
    
    document.getElementById("det").style.display="block";
    navigator.vibrate(700);
    var x = "Color Depth: " + screen.colorDepth +" pixels per bit";
    var y = "Available Height: " + screen.availHeight + "px";
    var z = "Available Width: " + screen.availWidth+"px";
    
    document.getElementById("l1").innerHTML=x;
    document.getElementById("l2").innerHTML=y;
   document.getElementById("l3").innerHTML=z; 
   
   for(var i=4;i<=11;i++)
   {
       var id="l"+i;
       document.getElementById(id).style.display="none"; 
   }
}
