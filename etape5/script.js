"use strict"; // Mode strict (cours slide 51)

// Compteur du nombre de lignes insérées, initialisé à 0 (variable avec let : cours slides 37 et 51)
let lignes = 0;

// Total des points, initialisé à 0 (let : cours slides 37 et 51)
let total_points = 0;

// Tableau d'objets "persons" : chaque objet a nom, prenom, points
// (Tableaux : cours slide 38 ; Objets / tableau d'objets : cours slides 39-40)
const persons = [
    { nom: "nom-1", prenom: "prenom-1", points: 5 },
    { nom: "nom-2", prenom: "prenom-2", points: 10 },
    { nom: "nom-3", prenom: "prenom-3", points: 15 }
];

// Appel de init() : le navigateur exécute le code de haut en bas (cours slide 33)
// (les déclarations de fonctions sont "hissées" : cours slide 46)
init();

function init() { // Déclaration de fonction (cours slide 45)
    // Boucle for...of pour parcourir les objets du tableau persons (cours slide 44)
    for (const person of persons) {
        // Accès aux propriétés d'un objet avec la notation point (cours slide 40)
        doInsert(person.nom, person.prenom, person.points);
    }
}

function doInsert(nom, prenom, points) { // Fonction avec paramètres (cours slide 45)
    // Incrémenter le compteur "lignes" (opérateurs : cours slide 41),
    // puis l'utiliser comme numéro de ligne
    lignes++;
    const num = lignes;

    // Additionner les points au total (opérateur combiné += : cours slide 41)
    total_points += points;

    // Appel d'une autre fonction avec des arguments (cours slide 45)
    doInsertRowTable(num, nom, prenom, points);

    // Mettre à jour l'espace résumé (appel de fonction : cours slide 45)
    update_summary();
}

function update_summary() {
    // Récupérer les éléments p1 et p3 par leur identifiant (getElementById : cours slides 61-64)
    const element_lignes = document.getElementById("p1");
    const element_points = document.getElementById("p3");

    // Modifier leur contenu avec innerText (cours slide 91)
    element_lignes.innerText = lignes + " ligne(s)";
    element_points.innerText = "Total point(s)= " + total_points;
}

function doInsertRowTable(num, nom, prenom, points) {
    // Récupérer le tableau par sélecteur CSS (cours slides 76-78)
    const table = document.querySelector("table");

    // Créer la ligne <tr> (cours slide 104 : createElement) + attribut class (slides 93 et 107)
    const row = document.createElement("tr");
    row.setAttribute("class", "row");

    // Créer les 5 colonnes <td> (cours slide 104)
    const col1 = document.createElement("td");
    const col2 = document.createElement("td");
    const col3 = document.createElement("td");
    const col4 = document.createElement("td");
    const col5 = document.createElement("td");

    // Remplir le texte avec innerText (cours slide 91)
    col1.innerText = num;
    col2.innerText = nom;
    col3.innerText = prenom;
    col4.innerText = points;

    // Dernière colonne : case à cocher (createElement slide 104, setAttribute slide 107, append slide 98)
    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    col5.append(checkbox);

    // Classes CSS des colonnes (setAttribute : cours slides 93 et 107)
    col1.setAttribute("class", "col_number");
    col2.setAttribute("class", "col_text");
    col3.setAttribute("class", "col_text");
    col4.setAttribute("class", "col_number");
    col5.setAttribute("class", "col_chkbox");

    // Ajouter colonnes à la ligne, puis la ligne au tableau (append : cours slide 98)
    row.append(col1, col2, col3, col4, col5);
    table.append(row);
}

function consoleTableau() {
    // Afficher le contenu du tableau persons dans la console (console.log : cours slides 33 et 40)
    console.log(persons);
}


function doNewData() {

//un bloc if-else conditionnelle (slide 42)
if(form_nom.value=="" || form_prenom.value=="" || form_points.value=="" || Number.isNaN(form_points.value)) {
    alert("formulaire incomplete !");//methode "alert" (slide 34)
    return;
}else{
    // des requperation par ID(slides 60,61,62,63,64) 
const elt_nom = document.getElementById("form_nom");
const elt_prenom = document.getElementById("form_prenom");
const elt_points = document.getElementById("form_points");
var nom = elt_nom.value;//methode ".value"pour acceder a l'attribut value(slide 53-tp4)  
var prenom = elt_prenom.value;
var points = parseInt(elt_points.value); //parseInt pour convert un string en number (53-tp4)

doInsert(nom, prenom, points);//appel de la fonction doInsert avec les parametres nom, prenom, points

persons.push({ nom, prenom, points });// pusher les elememts dans le tableau (slide 38)
//vider les labels du formulaire apres l'insertion  
form_nom.value="";
form_prenom.value="";
form_points.value="";

}
}