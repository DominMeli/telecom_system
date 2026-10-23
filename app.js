// Cotizador simple de servicios (precios en soles)
const btn = document.getElementById("btnCotizar");
const select = document.getElementById("servicio");
const resultado = document.getElementById("resultado");

btn.addEventListener("click", function () {
  const precio = select.value;
  const nombre = select.options[select.selectedIndex].text;
  resultado.textContent = nombre + ": S/ " + precio;
});
