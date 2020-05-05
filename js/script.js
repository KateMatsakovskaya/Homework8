document.getElementById('burger').onclick = function(){
addmenu();
};

function addmenu(){
    document.getElementById('menu').classList.toggle('show');
};

/*add slader*/

setInterval(function(){
    if(document.querySelectorAll('.owl-dot')[0])
    {
    document.getElementById('container1').classList.add('bgc1');}
    else
    {
        document.getElementById('container1').classList.add('bgc2');}
},10);
