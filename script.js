//Quotes

const quotes = [
    "It does not matter how slowly you go as long as you don't stop",
    "It always seems impossible until it is done",
    "The most effective way to do it is to do it",
    "If you can dream it, you can do it",
    "Every day is a chance to be better",
    "Dream big, work hard, stay focused",
    "With self discipline, anything is possible",
    "Success is not final - failure is not fatal",
    "You are stronger than you think",
    "There are no shortcuts to any place worth going",
    "What you plant now, you will harvest later",
    "Prove yourself to yourself, not to others",
    "Success is not an accident, success is a choice",
    "Our greatest weakness lies in giving up",
    "Don't dream about success; work for it",
    "Don't stop until your proud",
    "Create your own story",
    "Results happen overtime not overnight",
    "Be your own hero",
    "Be proud of yourself",
    "Your only competition is yourself",
    "Your future depends on what you do today",
    "You can't cross the sea just by looking at it",
    "The best way to predict your future is to create it",
    "A journey of a thousand miles begins with just a single step"
];

const newQuote = document.getElementById("newQuote");
const quoteText = document.querySelector("p");

let typingSpeed = 40;

function typeWriter(text) {
    quoteText.textContent = "";
    let i = 0;

    function typing() {
        if (i < text.length) {
            quoteText.textContent += text.charAt(i);
            i++;
            setTimeout(typing, typingSpeed);
        }
    }

    typing();
}

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = `"${quotes[randomIndex]}"`;
    typeWriter(randomQuote);
}

newQuote.addEventListener("click", generateQuote);


//Audio

const audio = document.getElementById("music");

window.addEventListener("load", () => {
    audio.play().catch(() => {
        document.addEventListener("click", () => {
            audio.play();
        }, { once: true });
    });
});

const muteImg = document.getElementById("muteImg");

function mute() {
    audio.muted = !audio.muted;

    if (audio.muted) {
        muteImg.src = "Resources/muted.svg";
    } else {
        muteImg.src = "Resources/unmuted.svg";
    }

}


//Sparkly Mouse Cursor

var colour="#b3508e";
var sparkles=120;
var x=ox=400;
var y=oy=300;
var swide=800;
var shigh=600;
var sleft=sdown=0;
var tiny=new Array();
var star=new Array();
var starv=new Array();
var starx=new Array();
var stary=new Array();
var tinyx=new Array();
var tinyy=new Array();
var tinyv=new Array();window.onload=function() { if (document.getElementById) {
 var i, rats, rlef, rdow;
 for (var i=0; i<sparkles; i++) {
   var rats=createDiv(3, 3);
   rats.style.visibility="hidden";
   document.body.appendChild(tiny[i]=rats);
   starv[i]=0;
   tinyv[i]=0;
   var rats=createDiv(7, 7);
   rats.style.backgroundColor="transparent";
   rats.style.visibility="hidden";
   var rlef=createDiv(2, 9);
   var rdow=createDiv(9, 2);
   rats.appendChild(rlef);
   rats.appendChild(rdow);
   rlef.style.top="3px";
   rlef.style.left="0px";
   rdow.style.top="0px";
   rdow.style.left="3px";
   document.body.appendChild(star[i]=rats);
 }
 set_width();
 sparkle();
}}
function sparkle() {
 var c;
 if (x!=ox || y!=oy) {
   ox=x;
   oy=y;
   for (c=0; c<sparkles; c++) if (!starv[c]) {
     star[c].style.left=(starx[c]=x)+"px";
     star[c].style.top=(stary[c]=y)+"px";
     star[c].style.clip="rect(0px, 9px, 9px, 0px)";
     star[c].style.visibility="visible";
     starv[c]=50;
     break;
   }
 }
 for (c=0; c<sparkles; c++) {
   if (starv[c]) update_star(c);
   if (tinyv[c]) update_tiny(c);
 }
 setTimeout("sparkle()", 40);
}function update_star(i) {
 if (--starv[i]==25) star[i].style.clip="rect(2px, 9px, 9px, 2px)";
 if (starv[i]) {
   stary[i]+=1+Math.random()*3;
   if (stary[i]<shigh+sdown) {
     star[i].style.top=stary[i]+"px";
     starx[i]+=(i%5-2)/5;
     star[i].style.left=starx[i]+"px";
   }
   else {
     star[i].style.visibility="hidden";
     starv[i]=0;
     return;
   }
 }
 else {
   tinyv[i]=50;
   tiny[i].style.top=(tinyy[i]=stary[i])+"px";
   tiny[i].style.left=(tinyx[i]=starx[i])+"px";
   tiny[i].style.width="4px";
   tiny[i].style.height="4px";
   star[i].style.visibility="hidden";
   tiny[i].style.visibility="visible"
 }
}function update_tiny(i) {
 if (--tinyv[i]==25) {
   tiny[i].style.width="2px";
   tiny[i].style.height="2px";
 }
 if (tinyv[i]) {
   tinyy[i]+=1+Math.random()*3;
   if (tinyy[i]<shigh+sdown) {
     tiny[i].style.top=tinyy[i]+"px";
     tinyx[i]+=(i%5-2)/5;
     tiny[i].style.left=tinyx[i]+"px";
   }
   else {
     tiny[i].style.visibility="hidden";
     tinyv[i]=0;
     return;
   }
 }
 else tiny[i].style.visibility="hidden";
}document.onmousemove=mouse;
function mouse(e) {
 set_scroll();
 y=(e)?e.pageY:event.y+sdown;
 x=(e)?e.pageX:event.x+sleft;
}function set_scroll() {
 if (typeof(self.pageYOffset)=="number") {
   sdown=self.pageYOffset;
   sleft=self.pageXOffset;
 }
 else if (document.body.scrollTop || document.body.scrollLeft) {
   sdown=document.body.scrollTop;
   sleft=document.body.scrollLeft;
 }
 else if (document.documentElement && (document.documentElement.scrollTop || document.documentElement.scrollLeft)) {
   sleft=document.documentElement.scrollLeft;
sdown=document.documentElement.scrollTop;
 }
 else {
   sdown=0;
   sleft=0;
 }
}window.onresize=set_width;
function set_width() {
 if (typeof(self.innerWidth)=="number") {
   swide=self.innerWidth;
   shigh=self.innerHeight;
 }
 else if (document.documentElement && document.documentElement.clientWidth) {
   swide=document.documentElement.clientWidth;
   shigh=document.documentElement.clientHeight;
 }
 else if (document.body.clientWidth) {
   swide=document.body.clientWidth;
   shigh=document.body.clientHeight;
 }
}function createDiv(height, width) {
 var div=document.createElement("div");
 div.style.position="absolute";
 div.style.height=height+"px";
 div.style.width=width+"px";
 div.style.overflow="hidden";
 div.style.backgroundColor=colour;
 return (div);
}