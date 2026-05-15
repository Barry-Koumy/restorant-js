export default function loadContactPage() {
  const content = document.getElementById("content");
  content.innerHTML = "";

  const title = document.createElement("h1");
  title.textContent = "Contactez-nous";

  const phone = document.createElement("p");
  phone.textContent = "Téléphone : 01 23 45 67 89";

  const email = document.createElement("p");
  email.textContent = "Email : contact@restaurant.com";

  content.appendChild(title);
  content.appendChild(phone);
  content.appendChild(email);
}
