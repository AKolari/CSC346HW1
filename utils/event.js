import {add} from "./math";
import { mult } from "./math";
const eventHandler =() =>{
    const addButton =document.getElementById('add');
    const multButton =document.getElementById('mult');
    const number1= document.getElementById('number-1');
    const number2= document.getElementById('number-2');
    const result=document.getElementById('result');
    const operation=document.getElementById('operation');
    const updateDomWithAddedNumbers=()=>{
       // result.innerHTML=parseInt(number1.value, 10)+parseInt(number2.value, 10);//parseInt(TheElementYouWantToGetValueFrom.value, 'The base of the value')
       if(number1.value.length!=0&&number2.value.length!=0){
        alert("Numbers Added!");
        result.innerHTML=add(number1.value, number2.value);
        
        }
        else{
            alert("One of more fields not filled!");
        }
    }
    const updateDomWithMultipliedNumbers=()=>{
        // result.innerHTML=parseInt(number1.value, 10)+parseInt(number2.value, 10);//parseInt(TheElementYouWantToGetValueFrom.value, 'The base of the value')
        if(number1.value.length!=0&&number2.value.length!=0){
            alert("Numbers Multiplied!");
        result.innerHTML=mult(number1.value, number2.value);
        
        }
        else{
            alert("One of more fields not filled!");
        }
     }

    addButton.addEventListener('click', updateDomWithAddedNumbers);//Adding event listener for the addButton
    //addEventListener('Event(such as click)', (The function we want to use))
    multButton.addEventListener('click', updateDomWithMultipliedNumbers);
}

export default eventHandler;//If we try to import this file, by default it will import the event handler. We must import this file to out main.js for it to work.