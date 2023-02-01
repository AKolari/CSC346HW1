import 'bootstrap/dist/css/bootstrap.css';//This will import bootstrap files for us to work with
import eventHandler from './utils/event';//We don't need to name what we are importing eventHandler. We can name it whatever we want, and then use it as needed. 
//import {eventHandler }to import the thing from the file called eventHandler
//We can also do import {eventHandler as something} to import it as something
document.querySelector('#app').innerHTML=`Hello World
<div class="container my-5">
      <div class="mb-3">
            <label for="number-1" class="form-label">First Number</label>
            <input type="number" class="form-control" id="number-1">
      </div>
      <div class="mb-3">
            <label for="number-2" class="form-label">Second Number</label>
            <input type="number" class="form-control" id="number-2">
      </div>

      <button id="add" class="btn btn-primary mb-3">Add</button>
      <button id="mult" class="btn btn-primary mb-3">Multiply</button>
      <div class="mt-5 rounded border p-5 bg-secondary text-white">
            Result: <div id="result">
      </div>
</div>`;//Find the element with Id of App. Can also use findElementById
eventHandler();


