let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let string = "";
let arr = array.from(bottons);
arr.forEach (button =>{
    button.addEventlistener('click',(e) =>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
        }
        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0,string.lenght-1);
            input.value=string;
        }


        
        else{
            string += e.target.innerHTML;
            input.value = string;

        }
       
      
    })
 })
    
