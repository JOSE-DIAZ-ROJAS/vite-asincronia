import axios from 'axios';
import './style.css'

// VARIABLES

loadListeners();
// LISTENERS
function loadListeners(){
document.addEventListener('DOMContentLoaded',readTask);

};

// FUNCIONES

async function readTask(){
// -----------------------CON AXIOS LIBRARY---------------
const data =  await axios.get('http://localhost:3000/task');
console.log(data.data);

// ---------------CON AXIOS LIBRARY Y DESESTRUCTURANDO EN EL OBJETO---------------
//const {data} =  await axios.get('http://localhost:3000/task');
//console.log(data);

// --------------------------CON FETCH------------------------
//const data = await fetch('http://localhost:3000/task');
//const req = await data.json();
//console.log(req);
};

async function createTask(task){
const taskToCreate = {
  "title": " jugar voleybol",
  "author": "maria"
}
// cuando es poste seria asi:
//const data = await axios.post('http://localhost:3000/task',{
// method: POST
//body: ...
//});
// pero como el objeto ya lo hemos creado, entoces solo le pasamos asi
const data = await axios.post('http://localhost:3000/task',taskToCreate);

};
//createTask();  // se deja comentado para que no cree tareas  cada vez que se ejecuta la funcion

// DELETE TASK

//async function deleteTask(idDelete){
//  const idToTaskDelete = 'e246';
//const data = await axios.delete('http://localhost:3000/task',{idToTaskDelete});
//};
//deleteTask();