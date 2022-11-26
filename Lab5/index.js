//task1
const item4_content = document.getElementById("item4").innerHTML;
const item5_content = document.getElementById("item5").innerHTML;

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
document.getElementById("task3").style.display = 'none';

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

window.addEventListener('load', () => {
    if (confirm(`cookies:\n${document.cookie}\nclear cookies?`)) {
        document.cookie = 'words=;expires=Thu, 01 Jan 1970 00:00:00 GMT';
        document.getElementById("task3").style.display = 'block';
    }
    else {
        alert('cookies weren\'t deleted.\nplease, refresh the page.');
        document.getElementById("task3").style.display = 'block';
    }
});
//task 4

for (let i = 3; i < 6; i++) {
    if (localStorage.getItem(`item${i}`) != null) {
        itemAlign(`item${i}`, 'left');
    }
    else {
        itemAlign(`item${i}`, 'center');
    }

}

const task4 = document.getElementById("task4");

function itemAlign(id, position) {
    switch (id) {
        case 'item3':
            if (position == 'left') {
                document.getElementById(id).style.alignItems = 'flex-start';
            }
            else {
                document.getElementById(id).style.alignItems = 'center';
            }

            break;
        case 'item4':
            if (position == 'left') {
                document.getElementById(id).style.textAlign = 'left';
            }
            else {
                document.getElementById(id).style.textAlign = 'center';
            }
            break;
        case 'item5':
            if (position == 'left') {
                document.getElementById(id).style.alignItems = 'flex-start';
            }
            else {
                document.getElementById(id).style.alignItems = 'center';
            }

    }
}

task4.addEventListener('dblclick', () => {
    localStorage.clear();
    for (let i = 3; i < 6; i++) {
        if (document.getElementById(`check${i}`).checked == true) {
            itemAlign(`item${i}`, 'left');
            localStorage.setItem(`item${i}`, true);
        }
        else {
            itemAlign(`item${i}`, 'center');
            localStorage.removeItem(`item${i}`, true);
        }
    }
})

//task5

const task5 = document.getElementById('task5list');

const lines = task5.children;

document.forms['task5form'].style.display = 'none';

lines.forEach(element => {
    element.addEventListener('select', () => {
        document.forms['task5form'].style.display = 'block';
        document.forms['task5form'][b];
    })
});

