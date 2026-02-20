const display = document.getElementById("display");

function appear(input){
   display.value += input;
}

function clearD(){
    display.value = "";
}

function equal(){
   try{
    display.value = eval(display.value);
   }
   catch(error){
    display.value = "Error"
   }
   
}