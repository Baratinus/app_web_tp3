render() ;

let colors = ["White", "Blue", "Green", "Salmon", "Yellow"];
let posColor = 0;

function change_color() {
    const colorButtonObject = document.getElementById("color_btn");

    colorButtonObject.style.background = colors[posColor];
    colorButtonObject.textContent = colors[posColor];

    posColor = (posColor + 1) % colors.length;
}


function render() {
    document.getElementById("app").innerHTML = `
    <h1>Constatez la nature monothreadée de JS </h1>

    <h4 style="display:inline">Changez la couleur :</h4>

    <button id="color_btn" class="yellow" onclick="change_color()">Yellow</button>

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