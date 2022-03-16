let card1 = {name:"Gandalf", atributes: {attack: 9, defense: 6, magic: 7}, img:'https://thumbor-gc.tomandco.uk/unsafe/fit-in/500x500/filters:upscale():fill(white)/https://shop.eaglemoss.com/static/media/catalog/product/l/o/lotbr001_br_1.jpg'};
let card2 = {name:"Saruman", atributes: {attack: 5, defense: 7, magic: 9,}, img:'https://thumbor-gc.tomandco.uk/unsafe/fit-in/500x500/filters:upscale():fill(white)/https://shop.eaglemoss.com/static/media/catalog/product/l/o/lotbr001_br_1.jpg'};
let card3 = {name:"Dumbledore", atributes: {attack: 6, defense: 8, magic: 9}, img:'https://thumbor-gc.tomandco.uk/unsafe/fit-in/500x500/filters:upscale():fill(white)/https://shop.eaglemoss.com/static/media/catalog/product/l/o/lotbr001_br_1.jpg'};
let card4 = {name:"Dobby", atributes: {attack: 10, defense: 10, magic: 10}, img:'https://thumbor-gc.tomandco.uk/unsafe/fit-in/500x500/filters:upscale():fill(white)/https://shop.eaglemoss.com/static/media/catalog/product/l/o/lotbr001_br_1.jpg'};
let card5 = {name:"Mestre dos Magos", atributes: {attack: 5, defense: 10, magic: 8}, img:'https://thumbor-gc.tomandco.uk/unsafe/fit-in/500x500/filters:upscale():fill(white)/https://shop.eaglemoss.com/static/media/catalog/product/l/o/lotbr001_br_1.jpg'};
let card6 = {name:"Merlin", atributes: {attack: 7, defense: 7, magic: 9}, img:'https://thumbor-gc.tomandco.uk/unsafe/fit-in/500x500/filters:upscale():fill(white)/https://shop.eaglemoss.com/static/media/catalog/product/l/o/lotbr001_br_1.jpg'};

let listOfCards = [card1,card2,card3,card4,card5,card6];
let playerCard;
let machineCard;

function sortCards(){
    let machineCardIndex = parseInt(Math.random()*6);
    machineCard = listOfCards[machineCardIndex];

    let playerCardIndex = parseInt(Math.random()*6);
    while (playerCardIndex === machineCardIndex){
        playerCardIndex = parseInt(Math.random()*6);
    }
    playerCard = listOfCards[playerCardIndex];
    displayPlayerCardImage();
    displayMachineCardImage();
    displayOptions();
}

function displayPlayerCardImage(){
    document.getElementById('playerCardDiv').style.backgroundImage="url(" + playerCard.img + ")";
}

function displayMachineCardImage(){
    document.getElementById('machineCardDiv').style.backgroundImage="url(" + machineCard.img + ")";
}

function displayOptions(){
    let options = document.getElementById("options");
    let optionsText = "";

    for (let i=0; i<listOfCards.length; i++){
        optionsText += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo;
    }
    options.innerHTML = optionsText;
}

function getSelectedAtribute(){

}