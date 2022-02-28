let screen = document.getElementById("screen");

function Clear(){
    screen.value="";
}
function display(a){
    screen.value+= a;
}
function calculate(){
    try{
        screen.value = eval(screen.value);
    }
    catch(error){
        alert("Some Error Occured!! Refresh the Page!");
    }
}
function del(){
    screen.value=screen.value.slice(0,-1);
}