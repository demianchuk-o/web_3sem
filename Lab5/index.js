//task1
const item4_content = document.getElementById("item4").innerHTML;
const item5_content = document.getElementById("item5").innerHTML;
document.getElementById("task3").style.display = 'none';

document.getElementById("item4").innerHTML = item5_content;
document.getElementById("item5").innerHTML = item4_content;

//task2
function calc_ellipse() {
    let a = document.getElementById("a_input").value;
    let b = document.getElementById("b_input").value;

    if (isNaN(a) || isNaN(b) || a <= 0 || b <= 0) {
        document.getElementById("a_input").value = "";
        document.getElementById("b_input").value = "";
        alert("Введіть коректні значення!");
        return;
    }
    const PI = 3.14159265;
    let res = PI * a * b;
    document.getElementById("answer2").innerHTML += `Площа овала = ${res.toFixed(4)}<br>`;
}

//task3
function count_words() {
    const text = document.forms["task3"]["input_text"].value;
    return `${text.split(" ").length}`;
}

const button = document.getElementById("task3button");

button.addEventListener('click', () => {
    msg = `words=${count_words()};`;
    alert(msg);
    document.cookie = msg;
})

window.addEventListener('load', (event) => {
    document.getElementById("task3").style.display = 'none';
    if (confirm(`cookies:\n${document.cookie}\nclear cookies?`)) {
        document.cookie = 'words=;expires=Thu, 01 Jan 1970 00:00:00 GMT';
        document.getElementById("task3").style.display = 'block';
    }
    else {
        alert('cookies weren\'t deleted.\nplease, refresh the page.');
        document.getElementById("task3").style.display = 'block';
    }
});

