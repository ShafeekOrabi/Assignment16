const main = document.getElementById("main_section");

const h1 = document.createElement("h1");
h1.textContent = "This is a title";

const p = document.createElement("p");
p.innerHTML = "This is an <u>underlined</u> text";

main.appendChild(h1);
main.appendChild(p);

console.log("Text of h1 is", h1.textContent);
console.log("Text of p is", p.textContent);
