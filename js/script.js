// Utilizzando i dati forniti
// creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.


/*
Creare l’array di oggetti con le informazioni fornite.
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
Stampare le stesse informazioni su DOM sottoforma di stringhe
Trasformare la stringa foto in una immagine effettiva
*/

//creiamo variabile lista contenitore  dei list item
const listTeamEl = document.getElementById("list-team");

//Creare l’array di oggetti con le informazioni fornite.
let arrayTeam = [
    {
        nome : "Wayne Barnett" ,
        lavoro : "Founder & CEO" ,
        immagine : "wayne-barnett-founder-ceo.jpg" 
    } ,

    {
        nome : "Angela Caroll" ,
        lavoro : "Chief Editor" ,
        immagine : "angela-caroll-chief-editor.jpg" 
    } ,

    {
        nome : "Walter Gordon" ,
        lavoro : "Office Manager" ,
        immagine : "walter-gordon-office-manager.jpg" 
    } ,

    {
        nome : "Angela Lopez" ,
        lavoro : "Social Media Manager" ,
        immagine : "angela-lopez-social-media-manager.jpg" 
    } ,

    {
        nome : "Scott Estrada" ,
        lavoro : "Developer" ,
        immagine : "scott-estrada-developer.jpg" 
    } ,

    {
        nome : "Barbara Ramos" ,
        lavoro : "Graphic Designer" ,
        immagine : "barbara-ramos-graphic-designer.jpg" 
    }
    

];


// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
for(let chiave in arrayTeam){
    console.log(arrayTeam[chiave]);
}


//creiamo variabile in cui memorizziamo funzione che genera "li" in pagina
let listItemTeam = createList(listTeamEl, arrayTeam);







//funzione che genera "li" in pagina
function createList(listElement , array ){

    for (let i = 0 ; i < array.length ; i++) {
        let listInner = document.createElement("li");

        listInner.innerHTML = `Nome : ${array[i].nome} <br>  Lavoro : ${array[i].lavoro} <br> Immagine : <img src="img/${array[i].immagine}"><img> `;
        
        listElement.append(listInner);
        
        
    }
}




