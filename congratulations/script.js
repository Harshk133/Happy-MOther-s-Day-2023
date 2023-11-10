console.log("Script is loaded...");

userName = prompt("Enter Your Name: ");
userMsg = prompt("Enter Your Message: ");
let msg = document.getElementById("msg");
let h3 = document.getElementById("h3");
let p = document.getElementById("p");
msg.style.outline = "none";
msg.style.border = "none";
h3.innerText = userName
p.innerText = userName
msg.innerText = userMsg
