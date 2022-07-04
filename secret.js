//Quelques notes...
//Déclaration de la variable 
let sms = 'Welcome in js nigga!'

//Déclaration d'une constante (ne varie pas) 
const sms_second_form = 20

//Ancienne méthode de déclaration
var sms_third_form = 'Hello World!'

// Un "print" dans la console
console.log(sms)

//Avoir un NaN
const calcul = 0/0
console.log(calcul)

//Opération
let nb = 8
nb *= 5
console.log(nb)

//Affiche selon notre bon vouloir
const chaine = 'World'
console.log(
`Hello 
${chaine} 
!`
)

console.log(chaine.toLowerCase())

//Tableau
const lot = ['1','2']
console.log(lot[1])

//Supprimer la dernière valeur
lot.pop()
console.log(lot) //=>1

//Créer un objet
const Person = {
    name: 'Me',
    mail: 'me@gmail.com',
    age: 1,

}
//Accéder à une propriété
console.log(Person.age) //=>1
Person.age = 2
console.log(Person.age) //=>2

//DOM
//Selectionner 1 élément
document.getElementById('id')
document.querySelector('selecteur css')
//Selectionner * élements 
document.getElementsByTagName('p') //(tous les paragraphes)
document.getElementsByClassName('classe')
document.querySelectorAll('selecteur css')



