// přiřazení funkce k tlačítku
document.getElementById("vypis-tlacitko").addEventListener("click", vypisRadky);

function vypisRadky() {
  // získání hodnoty vstupního pole
  const cislo = parseInt(document.getElementById("input-cislo").value);

  // vytvoření řetězce obsahujícího řádky s čísly
  let vystup = "";
  for (let i = 0; i <= cislo; i++) {
    vystup += cislo - i + "\n";
  }

  // vypsání řetězce na stránku
  document.getElementById("vystup").textContent = vystup;
}
