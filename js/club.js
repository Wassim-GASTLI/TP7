console.log("----Exercise 1----");
const cotisation=25.5;
console.log(`cotisation avant reduction : ${cotisation}`)
const cotreduite=cotisation*0.85;
console.log(`cotreduite: ${cotreduite.toFixed(2)}`);
const prenom=prompt("Votre prénom? :");
const prenomPropre=prenom[0].toUpperCase()+prenom.slice(1).toLowerCase();
console.log(`Prenom: ${prenomPropre}!`);
const email=`${prenomPropre.toLowerCase()}@gmail.com`;
console.log(`Email: ${email}`);
console.log(`est ce que l'email contien @? : ${email.includes('@')}`)
console.log("----Exercise 2----")
const today=new Date()
const jours=["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"]
const mois=["janvier","fevrier","mars","avril","mai","juin","juillet","aout","septembre","octobre","novembre","decembre"]
console.log(`Nous somme le ${jours[today.getDay()]} ${today.getDate()} ${mois[today.getMonth()]} ${today.getFullYear()}`)     
console.log("----Exercice 3----")
let ateliers=["HTML","CSS","JavaScript","Git"];
console.log(ateliers)
console.log(`la longuer des ateliers : ${ateliers.length}`)
ateliers.push("Bootstrap")
console.log(ateliers)
ateliers.pop()
console.log(ateliers.includes("PHP"))
let i=0;
for (const atelier of ateliers){
    console.table(`${i+1}. ${atelier}`)
}
let admises=[]  

const notes = [12, 8, 15, 10, 17, 6, 2];
console.log(notes.sort())
console.log((notes.sort((a,b)=>a-b)).join("-"))
notes.forEach((note) => {
    if (note>=10){
        admises.push(note);}});
console.log(admises)
console.log("somme : "+notes.reduce((acc,n)=>acc+n,0))
console.log("sur100 : "+notes.map((n) => n *5 ))
console.log("moyenne : "+((notes.reduce((acc,n)=>acc+n,0)/notes.length)).toFixed(2))


