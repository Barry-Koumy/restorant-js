export default function loadMenuPage() {
  const content = document.getElementById("content");
  content.innerHTML = "";

  const title = document.createElement("h1");
  title.textContent = "Notre Menu";

  const list = document.createElement("ul");
  ["Pizza Margherita", "Pâtes Carbonara", "Salade César"].forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
  });

  content.appendChild(title);
  content.appendChild(list);
}
