function validarFormulario() {
    // Obtener los valores de los campos
    let Nombre = document.getElementById("Nombre").value;
    let Apellido = document.getElementById("Apellido").value;
    // Validar los campos
    if (Nombre === "" || Apellido === "") {
      alert("Por favor, complete todos los campos.");
      return false;
    }
function validarEmail(email) {
  // Expresión regular para validar el formato del correo electrónico
  let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

let correo = prompt("Ingrese su correo electrónico:");

if (validarEmail(correo)) {
  console.log("El correo electrónico es válido.");
} else {
  console.log("El correo electrónico no es válido.");
}}