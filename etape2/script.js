"use strict"; // Mode strict : signale les variables non déclarées (cours slide 51)

// Fonction avec paramètres, déclarée avec le mot clé function (cours slide 45)
function doInsertRowTable(num, nom, prenom, points) {

    // Récupérer l'élément tableau avec un sélecteur CSS (cours slides 76-78)
    // const : constante qui ne sera pas réaffectée (cours slide 51)
    const table = document.querySelector("table");

    // Créer un élément <tr> à partir de zéro (cours slide 104 : createElement)
    const row = document.createElement("tr");

    // Affecter l'attribut class="row" avec setAttribute (cours slides 93 et 107)
    row.setAttribute("class", "row");

    // Créer les 5 colonnes <td> (cours slide 104 : createElement)
    const col1 = document.createElement("td");
    const col2 = document.createElement("td");
    const col3 = document.createElement("td");
    const col4 = document.createElement("td");
    const col5 = document.createElement("td");

    // Remplir le contenu texte de chaque colonne avec innerText (cours slide 91)
    col1.innerText = num;
    col2.innerText = nom;
    col3.innerText = prenom;
    col4.innerText = points;

    // La dernière colonne contient un <input type="checkbox">
    const checkbox = document.createElement("input");   // cours slide 104
    checkbox.setAttribute("type", "checkbox");          // cours slides 93 et 107
    col5.append(checkbox);                              // append() : ajout à la fin (slide 98)

    // Affecter les classes CSS de chaque colonne (cours slides 93 et 107 : setAttribute)
    col1.setAttribute("class", "col_number");
    col2.setAttribute("class", "col_text");
    col3.setAttribute("class", "col_text");
    col4.setAttribute("class", "col_number");
    col5.setAttribute("class", "col_chkbox");

    // Ajouter les colonnes à la ligne avec append() (cours slide 98)
    row.append(col1, col2, col3, col4, col5);

    // Ajouter la ligne au tableau avec append() (cours slide 98)
    table.append(row);
}