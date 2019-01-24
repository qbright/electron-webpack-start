let a: string = "hello";

let body: HTMLElement = document.getElementsByTagName("body")[0];

let helloEl: HTMLElement = document.createElement("div");
helloEl.innerHTML = a;

body.appendChild(helloEl);
