const dificult = 4;
const MAX_SIZE = dificult + 1;

const grid = document.getElementById("grid");

for(var i = 0; i <= MAX_SIZE; i++){
    for(var j = 0; j <= MAX_SIZE; j++){
        if ((i == 0 || i == MAX_SIZE) && (j == 0 || j == MAX_SIZE)){
            const nullElement = document.createElement("div");
            grid.append(nullElement);

        } else if ((i == 0 || i == MAX_SIZE) || (j == 0 || j == MAX_SIZE)) {
            const squareElement = document.createElement("div");
            squareElement.classList.add("grid-item", "square");
            grid.append(squareElement);

        } else {
            const circleElement = document.createElement("div");
            circleElement.className = "grid-item";
            circleElement.onclick = click
            circleElement.innerText = numGenerator(30
            )
            grid.append(circleElement);
        } 
    }   
}

grid.style = `grid-template-columns: repeat(${MAX_SIZE + 1}, auto)`

function click(){
    this.innerText = Date.now()
}

function numGenerator(max){
    return Math.floor(Math.random() * max) + 1;
}