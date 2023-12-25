var x = 0
var a="";
for(x;x<document.body.querySelectorAll("button").length;x++){
    document.body.querySelectorAll("button")[x].addEventListener("click",function(){  
        if(this.textContent === '='){
         var b=eval(a);
         document.body.querySelector("label").innerHTML = b;
     }else{
         a = a + this.textContent;
         document.body.querySelector("label").innerHTML = a;
     }
    })
}

