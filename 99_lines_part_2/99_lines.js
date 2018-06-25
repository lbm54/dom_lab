var sing = function (name) {
    var div = document.createElement('div');
    var h3 = document.createElement('h3');
    var h3Text = document.createTextNode(name);
    h3.appendChild(h3Text);
    div.appendChild(h3);
    for (var i = 99; i >= 0; i--) {
        var p = document.createElement('p');
        var pText = document.createTextNode(`${i} lines of code in the file, ${i} lines of code; ${name} strikes one out, clears it all out, ${i} lines of code in the file`);
        p.appendChild(pText);
        div.appendChild(p);
    }
    document.body.appendChild(div);
}

document.addEventListener("DOMContentLoaded", function () {
    var button = document.createElement('button');
    var btnText = document.createTextNode('Sing!');
    button.appendChild(btnText);
    button.addEventListener('click', function () {
        var friends = ['a', 'b', 'c', 'd', 'e'];
        for (var i = 0; i < friends.length; i++) {
            sing(friends[i]);
        }
    });
    document.body.appendChild(button);
})