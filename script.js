disp = document.getElementById("disp");
function appendToDisplay(input){
    disp.value+= input;
}
function result (){
  try {  disp.value = eval(disp.value); }
  catch (error) {
    disp.value = " Insert a valid number ";
  }
}
function clearDisplay(){
   return disp.value="";
}