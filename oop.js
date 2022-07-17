if (window.innerWidth < 1025) {
  let script = document.createElement("script");
  script.src = "./mobile.js";
  document.body.appendChild(script);
} else {
  let script = document.createElement("script");
  script.src = "./desktop.js";
  document.body.appendChild(script);
}
