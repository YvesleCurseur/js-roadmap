// Toutes les fonctionnalités de l'application

//DOM selection
//Une constante pour récupérer les éléments conportant les id correspondant dans le html
const list = 'élément #list'
const input = 'élément #input'
const add = 'élément #add'
const clear = 'élément #clear'
const load = 'élément #load'

//Pour stocker toutes les tâches en mémoires dans une variable
const tasks = ['Get better', 'Beautiful men']

//Mettre en une couleur chelou
const todolist = document.getElementsByTagName('h1') //Récupère un tableau de h1
todolist[0].style.color = '#5D6D7E' //Prend le premier élément