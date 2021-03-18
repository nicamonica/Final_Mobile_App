//html buttons for JS

const avocadoButton = document.querySelector('#btn-avocado');
const beansButton = document.querySelector('#btn-beans');
const cheeseButton = document.querySelector('#btn-cheese');
const chickenButton = document.querySelector('#btn-chicken');
const eggsButton = document.querySelector('#btn-eggs');
const fishButton = document.querySelector('#btn-fish');
const potatoesButton = document.querySelector('#btn-potatoes');
const tomatoButton = document.querySelector('#btn-tomato');

const displayLabel = document.querySelector('#lbl-output');

// function
let product = "";
let nutrition = "";

// js buttons for next step

avocadoButton.addEventListener('click', assignAvocado);
beansButton.addEventListener('click', assignBeans);
cheeseButton.addEventListener('click', assignCheese);
chickenButton.addEventListener('click', assignChicken);   
eggsButton.addEventListener('click', assignEggs);
fishButton.addEventListener('click', assignFish);
potatoesButton.addEventListener('click', assignPotatoes);
tomatoButton.addEventListener('click', assignTomato);

// functions for buttons

function assignAvocado(){
    product = "Avocado (100g)";
    nutrition = "160 calories";
    updateLabel()
} 

function assignBeans(){
    product = "Beans(100g)";
    nutrition = "347 calories";
    updateLabel()
} 

function assignCheese(){
    product = "Cheese(100g)";
    nutrition = "402 calories";
    updateLabel()
} 

function assignChicken(){
    product = "Chicken(100g)";
    nutrition = "239 calories";
    updateLabel()
} 

function assignEggs(){
    product = "Eggs(100g)";
    nutrition = "155 calories";
    updateLabel()
} 

function assignFish(){
    product = "Fish(100g)";
    nutrition = "206 calories";
    updateLabel()
} 

function assignPotatoes(){
    product = "Potatoes(100g)";
    nutrition = "313 calories";
    updateLabel()
} 

function assignTomato(){
    product = "Tomato(100g)";
    nutrition = "18 calories";
    updateLabel()
} 

// output with a sentence

function updateLabel(){
    let output = `That ${product} has ${nutrition}.`;
    console.log(output);
    displayLabel.textContent = output;

}