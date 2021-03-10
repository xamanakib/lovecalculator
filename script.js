console.log('letter');

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var letter = "";
var letterPosition = alphabet.indexOf(letter) + 1;

console.log(letterPosition);



// document.getElementById('btn').addEventListener('click', Style());



function Submit() {

    let name = document.getElementById('inpt1').value.toLowerCase();
    let name2 = document.getElementById('inpt2').value.toLowerCase();

    let nameUp = document.getElementById('inpt1').value.toUpperCase();
    let nameUp2 = document.getElementById('inpt2').value.toUpperCase();




    //split the name
    let c1 = alphabet.indexOf(name.charAt(0)) + 1;
    let c2 = alphabet.indexOf(name.charAt(1)) + 1;
    let c3 = alphabet.indexOf(name.charAt(2)) + 1;
    let c4 = alphabet.indexOf(name.charAt(3)) + 1;
    let c5 = alphabet.indexOf(name.charAt(4)) + 1;
    let c6 = alphabet.indexOf(name.charAt(5)) + 1;
    let c7 = alphabet.indexOf(name.charAt(6)) + 1;
    let c8 = alphabet.indexOf(name.charAt(7)) + 1;
    let c9 = alphabet.indexOf(name.charAt(8)) + 1;
    let c10 = alphabet.indexOf(name.charAt(9)) + 1;

    let nameEqual = c1 + c2 + c3 + c4 + c5 + c6 + c7 + c8 + c9 + c10;





    //split the name 2
    let d1 = alphabet.indexOf(name2.charAt(0)) + 1;
    let d2 = alphabet.indexOf(name2.charAt(1)) + 1;
    let d3 = alphabet.indexOf(name2.charAt(2)) + 1;
    let d4 = alphabet.indexOf(name2.charAt(3)) + 1;
    let d5 = alphabet.indexOf(name2.charAt(4)) + 1;
    let d6 = alphabet.indexOf(name2.charAt(5)) + 1;
    let d7 = alphabet.indexOf(name2.charAt(6)) + 1;
    let d8 = alphabet.indexOf(name2.charAt(7)) + 1;
    let d9 = alphabet.indexOf(name2.charAt(8)) + 1;
    let d10 = alphabet.indexOf(name2.charAt(9)) + 1;

    let name2Equal = d1 + d2 + d3 + d4 + d5 + d6 + d7 + d8 + d9 + d10;


    //Total value

    let total = nameEqual + name2Equal;

    if (total > 100 && total <= 1000) {
        total = Math.round(total / 10);
    }


    console.log(`${total}%`);
    let pText = document.getElementById('pHide');
    pText.innerHTML = `Percentage of love between <br> <b style="color:#9be14f;"> ${nameUp} & ${nameUp2} </b> is <br> ${total}%`;

    console.log(pText);

    document.getElementById('inpt1').value = "";
    document.getElementById('inpt2').value = "";


    // console.log(nameVal);



}

// For pin system
function promptMe() {
    let code = prompt("Please Enter Your Pin");

    const pin = 54672;
    if (code == pin) {
        document.body.oncontextmenu = "return true";


    } else {
        // location.reload();
        alert('Your pin is incorrect')

    }
}


//locking the keys
document.onkeydown = function(e) {
    if (event.keyCode == 123) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
        return false;
    }
}

// Trigger for pressing enter key 

let input = document.getElementById("inpt2");
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("btn").click();
    }
});