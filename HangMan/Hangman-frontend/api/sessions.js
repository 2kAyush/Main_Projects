// const BASE_URL = "http://localhost:8000/api/sessions";
const BASE_URL = "https://hangman-rns.herokuapp.com/api/sessions";

async function createSession(name, categoryId) {
  const response = await fetch(`${BASE_URL}/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({ name, categoryId }),
  });
  const session = response.json();

  return session;
}

async function playInSession(id, letter) {
  const response = await fetch(`${BASE_URL}/${id}/play`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ letter }),
  });
  const session = response.json();

  return session;
}

async function getCategories() {
  const response = await fetch(`${BASE_URL}/`);
  return response.json();
}

module.exports = {
  createSession,
  playInSession,
  getCategories,
};
