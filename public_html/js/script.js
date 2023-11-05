"use scrict"
document.addEventListener("DOMContentLoaded", iniciarPagina());
function iniciarPagina() {
    const valorDivision = 100;
    const valorTicket = 200;
    let selectCat = document.getElementById("categoria");
    selectCat.addEventListener("change",realizarDescuento);
    document.getElementById("resumen").addEventListener("click", realizarDescuento);
    document.getElementById("borrar").addEventListener("click", borrar);
    let trainee = document.getElementById("trainee");
    trainee.addEventListener("click", e=>{
        selectCat.value = "50";
        realizarDescuento(e);
    });
    let estudiante = document.getElementById("estudiante")
    estudiante.addEventListener("click", e=>{
        selectCat.value = "80";
        realizarDescuento(e);
    });
    let junior = document.getElementById("junior")
    junior.addEventListener("click", e=>{
        selectCat.value = "15";
        realizarDescuento(e);
    });
    let cantidadInp = document.getElementById("cantidad");
    function realizarDescuento(e) {
        e.preventDefault();
        let cantidadIng = cantidadInp.value;
        let valueSelect = selectCat.value;
        cantidadIng = cantidadIng*valorTicket;
        let resultado = cantidadIng*valueSelect / valorDivision;
        let valor = cantidadIng - resultado;

        let mostrarDesc = document.getElementById("mostrar-total");
        mostrarDesc.innerHTML = "<p>Total a pagar $" + valor + "</p>";
    }
    function borrar(e) {
        e.preventDefault();
        let inpName = document.getElementById("nombre");
        let inpApellido = document.getElementById("apellido");
        let inpEmail = document.getElementById("email");
        inpName.value       = "";
        inpApellido.value   = "";
        selectCat.value     = "";
        inpEmail.value      = "";
        cantidadInp.value   = "";
    }
}