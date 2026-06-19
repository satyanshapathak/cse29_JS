let fontSize = 16;
function changeHeading() {
document.getElementById("heading").innerText =
document.getElementById("inputText").value;
}

function changeBackground() {
document.body.style.backgroundColor =
"rgb(" + Math.floor(Math.random()*256) + "," + Math.floor(Math.random()*256) + "," +
Math.floor(Math.random()*256) + ")";
}

function increaseFont() {
fontSize += 2;
document.getElementById("para").style.fontSize = fontSize + "px";
}

function toggleParagraph() {
let p = document.getElementById("para");
p.style.display = (p.style.display === "none") ? "block" : "none"; // Reset Page
function resetPage() {
location.reload();




