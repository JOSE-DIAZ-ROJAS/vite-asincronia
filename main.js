import axios from 'axios';
import './style.css'

// VARIABLES
const formulario = document.getElementById('form');

loadListeners();
// LISTENERS
function loadListeners(){
formulario.addEventListener('submit', readForm);
};

// FUNCIONES
// funcion que crea un usuario en data base
async function createUser(objeto){
  const data = await axios.post('http://localhost:3000/usuarios',objeto);
};


// funcion que lee datos del formulario
function readForm(e){
  e.preventDefault();
const valueNombre = document.getElementById('nombre').value;
const valueApellido = document.getElementById('apellido').value;
const valuePais = document.getElementById('pais').value;

createObject(valueNombre,valueApellido,valuePais);
location.reload();
}
// funcion que crea el objeto

function createObject(valueNombre,valueApellido,valuePais){

  const objeto ={
    nombre : valueNombre,
    apellido : valueApellido,
    pais: valuePais
    };
    createUser(objeto)
};


// funcion que lee la data de la base de datos

async function readData(){
const data = await fetch('http://localhost:3000/usuarios');
const req = await data.json();
req.forEach((element, index) => {
const {id,nombre, apellido, pais} = element ;
const array = [index,id,nombre,apellido,pais];
showData(array);
});
};

readData();


// funcion que muestra datos en la  UI
function showData(array){
  const [index,id,nombre,apellido,pais] = array;
  
  const tableBody = document.getElementById('tablebody');// agarro elemento donde se renderizara
  // creamos fila
  const row = document.createElement('tr'); // creo tr

  //celda id
  const celdaId = document.createElement('td');
  celdaId.textContent= id;
  row.appendChild(celdaId);
  tableBody.appendChild(row);

  //celda nombre
  const celdaNombre = document.createElement('td');
  celdaNombre.textContent= nombre;
  row.appendChild(celdaNombre);
  tableBody.appendChild(row);

  //celda apellido
  const celdaApellido= document.createElement('td');
  celdaApellido.textContent= apellido;
  row.appendChild(celdaApellido);
  tableBody.appendChild(row);

  //celda pais
  const celdaPais = document.createElement('td');
  celdaPais.textContent= pais;
  row.appendChild(celdaPais);
  tableBody.appendChild(row);
  
  //celda button
  const celdaButton = document.createElement('td');
  const boton = document.createElement('button')
  boton.id =`delete${id}`;
  boton.textContent = 'Eliminar';
  boton.addEventListener('click',()=>{deleteUser(id)});
  celdaButton.appendChild(boton);
  row.appendChild(celdaButton);
  tableBody.appendChild(row);



  //console.log(capturaid);
}


// funcion que elimina usuarios de base de datos
async function deleteUser(id){
const dataD = await axios.delete(`http://localhost:3000/usuarios/${id}`)
location.reload();
};
