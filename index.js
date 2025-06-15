const h1Text = document.createElement("h1");
h1Text.textContent = "Odds and Events";
document.body.appendChild(h1Text);

const mainText = document.createElement("p");
mainText.textContent = "Add a number to the bank";
mainText.style.display = "inline";

const addNumberToBank = document.createElement("input");
addNumberToBank.type = "text";

const btnAddNumber = document.createElement("button");
btnAddNumber.textContent = "Add Number";
btnAddNumber.id = "add";

const btnSort1 = document.createElement("button");
btnSort1.textContent = "Sort 1";
btnSort1.id = "sort1";

const btnSortAll = document.createElement("button");
btnSortAll.textContent = "Sort All";
btnSortAll.id = "sortAll";

document.body.appendChild(mainText);
document.body.appendChild(addNumberToBank);
document.body.appendChild(btnAddNumber);
document.body.appendChild(btnSort1);
document.body.appendChild(btnSortAll);

const bankText = document.createElement("h2");
bankText.textContent = "Bank";
document.body.appendChild(bankText);

const bankBox = document.createElement("input");
bankBox.type = "text";
bankBox.id = "bank";
bankBox.style.width = "60%";
bankBox.readOnly = true;
document.body.appendChild(bankBox);

const oddsText = document.createElement("h2");
oddsText.textContent = "Odds";
document.body.appendChild(oddsText);

const oddsBox = document.createElement("input");
oddsBox.type = "text";
oddsBox.id = "odds";
oddsBox.style.width = "60%";
oddsBox.readOnly = true;
document.body.appendChild(oddsBox);

const evensText = document.createElement("h2");
evensText.textContent = "Evens";
document.body.appendChild(evensText);

const evensBox = document.createElement("input");
evensBox.type = "text";
evensBox.id = "evens";
evensBox.style.width = "60%";
evensBox.readOnly = true;
document.body.appendChild(evensBox);

btnAddNumber.addEventListener("click", () => {
  const newNumber = addNumberToBank.value.trim();

  if (newNumber === "" || isNaN(newNumber)) {
    alert("Please enter a valid number.");
    return;
  }

  if (bankBox.value === "") {
    bankBox.value = newNumber;
  } else {
    bankBox.value += "," + newNumber;
  }

  addNumberToBank.value = "";
});

btnSort1.addEventListener("click", () => {
  const bankValues = bankBox.value
    .split(",")
    .map((v) => v.trim())
    .filter((v) => v !== "");

  if (bankValues.length === 0) {
    alert("The bank is empty!");
    return;
  }

  const first = parseInt(bankValues.shift(), 10);

  if (isNaN(first)) {
    alert("The first item is not a valid number.");
    return;
  }

  bankBox.value = bankValues.join(",");

  if (first % 2 === 0) {
    if (evensBox.value === "") {
      evensBox.value = first;
    } else {
      evensBox.value += "," + first;
    }
  } else {
    if (oddsBox.value === "") {
      oddsBox.value = first;
    } else {
      oddsBox.value += "," + first;
    }
  }
});
btnSortAll.addEventListener("click", () => {
  const bankValues = bankBox.value
    .split(",")
    .map((v) => v.trim())
    .filter((v) => v !== "");

  if (bankValues.length === 0) {
    alert("The bank is empty!");
    return;
  }

  for (let value of bankValues) {
    const number = parseInt(value, 10);
    if (isNaN(number)) continue;

    if (number % 2 === 0) {
      if (evensBox.value === "") {
        evensBox.value = number;
      } else {
        evensBox.value += "," + number;
      }
    } else {
      if (oddsBox.value === "") {
        oddsBox.value = number;
      } else {
        oddsBox.value += "," + number;
      }
    }
  }

  bankBox.value = "";
});
