export default function loadHomePage() {
  const content = document.getElementById("content");

  content.innerHTML = "";

  const title = document.createElement("h1");
  title.textContent = "Bienvenue au Restaurant Koumy";

  const image = document.createElement("img");
  image.src = "https://via.placeholder.com/400x200";
  image.alt = "Photo du restaurant";

  const description = document.createElement("p");
  description.textContent = "Découvrez la merveille de notre cuisine, préparée avec passion et des ingrédients frais chaque jour.";

  content.appendChild(title);
  content.appendChild(image);
  content.appendChild(description);
}
