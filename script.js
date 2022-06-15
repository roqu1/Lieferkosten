function lkRechnung() {
    let warenkosten = parseFloat(document.getElementById("waren").value);
    warenkosten.toFixed(2);
    let plzgebiet = parseInt(document.getElementById("plz").value);
    let rabatt1_2 = 5;
    let rabatt3_4_5 = 7;
    let rabatt6_7 = 9;
    let elserabatt = 11;
    let express = 20;
    let ergebnis = 0;
    let expresschecked = document.getElementById("express");

        function rechnung(warenwert, rabatt) {
            ergebnis = warenwert + ((rabatt * warenwert) / 100);
            return ergebnis
        }
        if (plzgebiet === 1 || plzgebiet === 2) {
            rechnung(warenkosten, rabatt1_2);
        } else if (plzgebiet === 3 || plzgebiet === 4 || plzgebiet === 5) {
            rechnung(warenkosten, rabatt3_4_5);
        } else if (plzgebiet === 6 || plzgebiet === 7) {
            rechnung(warenkosten, rabatt6_7);

        } else {
            rechnung(warenkosten, elserabatt);
        }
        if (expresschecked.checked) {
            ergebnis = rechnung(ergebnis, express);
        }
        document.getElementById("kosten").innerHTML = ergebnis.toFixed(2);


}
