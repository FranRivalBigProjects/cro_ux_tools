function calc(){
let steps=parseFloat(document.getElementById('a').value)||0;
let trust=parseFloat(document.getElementById('b').value)||0;
let friction=parseFloat(document.getElementById('c').value)||0;

let score = 100 - (steps*5 + friction) + trust;

let level = score > 80 ? "High Conversion Potential 🚀" :
            score > 50 ? "Moderate Conversion ⚖️" :
            "Low Conversion ⚠️";

let insights = "";
if(steps > 4) insights += "Too many steps. Simplify checkout.<br>";
if(trust < 50) insights += "Low trust signals. Add reviews/security badges.<br>";
if(friction > 50) insights += "High friction. Improve UX flow.<br>";

document.getElementById('result').innerHTML =
"CRO Score: " + score.toFixed(2) + "<br><br>" +
level + "<br><br>" + insights;
}
