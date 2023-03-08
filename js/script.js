// Utilizzando i dati forniti
// creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.


/*
Creare l’array di oggetti con le informazioni fornite.
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto.
*/

const listTeamEl = document.getElementById("list-team");


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


for(let chiave in arrayTeam){
    console.log(arrayTeam[chiave]);
}







