const x_content = document.getElementById("x").innerHTML;
const y_content = document.getElementById("y").innerHTML;

document.getElementById("x").innerHTML = y_content;
document.getElementById("y").innerHTML = x_content;

function calc_ellipse() {
    let a = document.getElementById("a_input").value;
    let b = document.getElementById("b_input").value;

    if (isNaN(a) || isNaN(b) ||
        a <= 0 || b <= 0) {
        document.getElementById("a_input").value = "";
        document.getElementById("b_input").value = "";
        alert("Введіть коректні значення!");
        return;
    }
    const PI = 3.14159265;
    let res = PI * a * b;
    document.getElementById("answer2").innerHTML = `Площа овала = ${res.toFixed(4)}`;
}

/*function count_words() {
    
    document.getElementById("answer3").innerHTML = `слів: ${text.split(" ").length()}`;
}*/

const dialog = document.getElementById('task3dialog');
const open_dialog = document.querySelector('.open-dialog');

open_dialog.addEventListener('click', () => {
    let text = document.forms[task3][input_text].value;
    dialog.innerHTML = `слів: ${text.split(" ").length()}`;
    dialog.showModal();
})