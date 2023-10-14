let item = document.getElementsByClassName("hide");
let newitem = document.getElementsByClassName("show");
function spustit() {
   for (var i=0; i < item.length; i++) {
        item[i].style.display = "grid";
   }
   document.getElementById("spustit").style.display = "none";
}

var answer = 0;
function odpoved(id) {
   if (id === "ne") {
      answer = 1;
      document.getElementById("ne").style.backgroundColor = "red";
      document.getElementById("ano").style.backgroundColor = "white";
   } else {
      answer = -99;
      document.getElementById("ano").style.backgroundColor = "red";
      document.getElementById("ne").style.backgroundColor = "white";
   }
}

function odevzdat() {
   if (answer === 0) {
      alert("Zadej nejdřív odpověď");
      return;
   } else if (answer === 1 && been_used === true) {
      document.getElementById("píčus").innerHTML = "Mmmmmm dobrý..!" 
   } else if (answer === -99) {
      document.getElementById("píčus").innerHTML = "Dement..." 
   } else {
      document.getElementById("píčus").innerHTML = "Vychcanej jak mraky...."
      answer = 0;
   }

   for (var i=0; i < item.length; i++) {
        item[i].style.display = "none";
   }
   for (var i=0; i < newitem.length; i++) {
      newitem[i].style.display = "grid";
   }
   document.getElementById("answer").innerHTML = `skóre: (${answer}/1)`;
}

let enabled = true;
function move() {
   if (enabled) {
   let randY = Math.ceil(Math.random() * 750) * (Math.round(Math.random()) ? 1 : -1);
   let randX = Math.ceil(Math.random() * 750) * (Math.round(Math.random()) ? 1 : -1);
   document.getElementById("ne").style.transform = `translate(${randX}%, ${randY}%)`;
   answer = 0;
   }
}

document.addEventListener("auxclick", disable);
let check_num = 0;
let been_used = false;
function disable() {
   if (check_num % 2 == 1) {
      enabled = false;
   } else {
      enabled = true;
   }
   check_num = check_num + 1;
   been_used = true;
}

document.addEventListener("keydown", handle)
function handle(e) {
   if (e.keyCode === 9) {
      alert("nepoužívej tab zmrde");
      location.reload()
   }
}
