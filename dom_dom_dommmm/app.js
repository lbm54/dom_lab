let random = () => {
    return Math.floor(Math.random() * 256);
}
let randomColor = () => {
    return `rgb(${random()}, ${random()}, ${random()})`;
}

document.addEventListener("DOMContentLoaded", () => {
    let button = document.createElement('button');
    button.appendChild(document.createTextNode("Add Square"));
    document.body.appendChild(button);
    button.style.display = "block";
    let counter = 0;
    button.addEventListener('click', () => {
        let div = document.createElement('div');
        document.body.appendChild(div);
        div.className = 'square';
        div.setAttribute('id', counter);
        let idDiv = document.createElement('div');
        idDiv.innerText = counter;
        idDiv.className = 'idDiv';
        div.appendChild(idDiv);
        div.addEventListener('mouseenter', () => {
            idDiv.style.visibility = "visible";
        });
        div.addEventListener('mouseout', () => {
            idDiv.style.visibility = "hidden";
        });
        div.addEventListener('click', () => {
            div.style.backgroundColor = randomColor();
        })
        div.addEventListener('dblclick', function() {
            let id = parseInt(this.getAttribute('id'));
            if (id % 2 === 0) {
                let next = document.getElementById(id + 1);
                if (next) next.remove();
                else alert('no next square');
            }
            if (id % 2 === 1) {
                let before = document.getElementById(id - 1);
                if (before) before.remove();
                else alert('no before square');
            }
        }.bind(div));
        counter++;
    })
})