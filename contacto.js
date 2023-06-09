const Nombre = document.getElementById("nombre")
const Apellido = document.getElementById("apellido")
const email = document.getElementById("email")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")

function validarFormulario() {
    // Obtener los valores de los campos
    let Nombre = document.getElementById("nombre").value;
    let Apellido = document.getElementById("apellido").value;
    // Validar los campos
    if (Nombre === "" || Apellido === "") {
      alert("Por favor, complete todos los campos.");
      return false;
    }

function validarEmail(email) {
  // Expresión regular para validar el formato del correo electrónico
  let re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
  return re.test(email);
}

let correo = prompt("Ingrese su correo electrónico:");

if (validarEmail(correo)) {
  console.log("El correo electrónico es válido.");
} else {
  console.log("El correo electrónico no es válido.");
}}

form.addEventListener("submit", e=>{
  e.preventDefault()
  let warnings = ""
  let entrar = false
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
  parrafo.innerHTML = ""
  if(Nombre.value.length <4){
      warnings += `El nombre no es valido <br>`
      entrar = true
  }
  if(Apellido.value.length <4){
    warnings += `El apellido no es valido <br>`
    entrar = true
  }
  if(!regexEmail.test(email.value)){
      warnings += `El email no es valido <br>`
      entrar = true
  }
  if(entrar){
      parrafo.innerHTML = warnings
  }else{
      parrafo.innerHTML = "Enviado"
  }
})