
function wait()
{
setTimeout(load, 3000);
}
function load() 
{
    var var1,var2;
    var2=document.getElementById("logo1") ;
    var1=document.getElementById("loader");
    var1.style.opacity=0;
    var2.style.transform="translate(-650px,-150px)";
    setTimeout(remove_loader, 3000);
}

function remove_loader()
{
    var var1,var2;
	var1=document.getElementById("loader");
	var2=document.getElementById("main");	
	var1.style.zIndex=-1;
	var2.style.zIndex=0;

}

var i=1;

function next()
{
    
    i=i+1;
    if(i==5)
        i=1;
    var var1 = document.getElementById("slide");
    var1.style.backgroundImage = "url(images/slides/"+i+".jpg)";
}

function back()
{
    
    i=i-1;
    if(i==0)
        i=4;
    var var1 = document.getElementById("slide");
    var1.style.backgroundImage = "url(images/slides/"+i+".jpg)";
    
    
}


var j=0;
function ham_menu()
{
    j=j+1;
    var var1=document.getElementById("links");
    var var2 = document.getElementById("nav_btn");
    if((j%2)==0)
    {
        var1.style.zIndex=-3;
        var1.style.transform="translate(50px,-150px)";
        var2.src="images/nav_btn1.png";
        
    }
    else
	{
        
        var1.style.zIndex=2;
        var1.style.transform="translate(-250px,430px)";
        var2.src="images/nav_btn2.png";
    }
}
