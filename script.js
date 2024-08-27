const a = document.getElementById("input-box");

const btn1 = document.getElementById("btn");

const l = document.getElementById("list-container");

btn1.addEventListener("click", () => {
  if (a.value === "") {
    alert("Please add Something");
  } else {
    const li = document.createElement("li");
    li.textContent = a.value;

    l.appendChild(li);

    let span = document.createElement("span");
    span.textContent = "\u00d7";
    li.appendChild(span);
  }
  a.value = "";
  saveData();
});
const btn2 = document.getElementById("btn2");

l.addEventListener(
  "click",
  (e) => {
    //ul ke andar hi ho rah hai
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", l.textContent);
}

function showData() {
  l.textContent = localStorage.getItem("data");
}
showData();
