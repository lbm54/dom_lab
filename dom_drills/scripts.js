let arrColors = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "indigo",
  "violet",
  "cyan"
];
let headers = [8];
let counter = 1;

let randomColor = element => {
  element.style.color = arrColors[Math.floor(Math.random() * 8)];
};
let insert = () => {
  let li = document.createElement("li");
  li.appendChild(document.createTextNode(`This is list item ${counter++}`));
  li.addEventListener("click", () => {
    randomColor(li);
  });
  li.addEventListener("dblclick", () => {
    li.remove();
  });
  return li;
};

document.addEventListener("DOMContentLoaded", () => {
  let button = document.getElementsByClassName("button")[0];
  let ul = document.createElement("ul");
  document.body.appendChild(ul);
  button.addEventListener("click", () => {
    ul.appendChild(insert());
  });

  let div = document.createElement("div");
  div.className = "header-container";
  for (let i = 1; i <= 6; i++) {
    headers[i] = document.createElement(`h${i}`);
    headers[i].setAttribute("class", `h${i}`);
    headers[i].appendChild(document.createTextNode(`This is an h${i}`));
    headers[i].addEventListener("dblclick", () => {
      randomColor(headers[i]);
    });
    div.appendChild(headers[i]);
  }
  document.body.appendChild(div);
});
