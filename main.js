let paragraph = document.createElement("p")
let userMoney = parseInt(prompt("Enter your money").trim(), 10);
let phoneCost = 100;
if(userMoney >= phoneCost) {
  console.log("You have enough money! 🥳");
  paragraph.textContent = "You have enough money! 🥳";
  document.body.append(paragraph)
  document.body.style.backgroundColor = "green"
}
else {
  console.log("You don't have enough money 🥲");
  paragraph.textContent = "You don't have enough money 🥲";
  document.body.append(paragraph)
  document.body.style.backgroundColor = "red"
}