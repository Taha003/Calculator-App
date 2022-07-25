//Clear all
function clearAll(){
   document.getElementById('display').value="";
   
}

// function
function calc(value){
   document.getElementById('display').value+=value
}

function calculate(){
   let x=document.getElementById('display').value
   let y=eval(x);
   document.getElementById('display').value=y;
}
function remove(){
   let inp=document.getElementById('display');
   inp.value=inp.value.substring(0,inp.value.length -1);
}

