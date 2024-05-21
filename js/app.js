render() ;

let colors = ["White", "Blue", "Green", "Salmon", "Yellow"];
let posColor = 0;

/**
 * Fonction onclick pour changer la couleur du bouton
 */
document.getElementById("color_btn").onclick = function() {
    this.style.background = colors[posColor];
    this.textContent = colors[posColor];

    posColor = (posColor + 1) % colors.length;
}


var slider = document.getElementById("iterations_slider");
var output = document.getElementById("iterations_count");
output.innerHTML = slider.value ;

slider.oninput = function(){
    output.innerHTML = this.value
}


/**
 * Fonction onclick pour afficher dans la console une incrémentation de 0 à la valeur du slider
 */
document.getElementById("run_btn").onclick = function() {
    for (let i = 0; i < slider.value; i++) {
        console.log(i);
    }
}


function render() {
    document.getElementById("app").innerHTML = `
    <h1>Constatez la nature monothreadée de JS </h1>

    <h4 style="display:inline">Changez la couleur :</h4>

    <button id="color_btn" class="yellow">Yellow</button>

    <br>

    <div>
        <button id="res_btn">Execute</button>
        <div id ="results"></div>
    </div>

    <h3>Choisissez le nombre d'itérations désiré pour simuler un calcul lourd et ensuite cliquez sur "run":</h3>
    
    <h4> En principe, le carré cesse de bouger pendant un laps de temps avant de se reprendre</h4>
    
    <div>
        <label>Iterations</label>
        <input
        type="range"
        min="0"
        max="30000"
        value="0"
        id="iterations_slider" />
        <span id="iterations_count">0</span>
        <button id="run_btn">Run</button>
    </div>
    
    <div class="circle"></div>
    <div class="square"></div>
    `;
}