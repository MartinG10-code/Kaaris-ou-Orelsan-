const quotes = [
  { text: "J’traîne avec des fous, pas des faux", author: "Kaaris" },
  { text: "J’vais pas t’mentir, j’fais semblant d’comprendre", author: "Orelsan" },
  { text: "Arrêter d'mouiller j'ai l'impression d'baiser sous la pluie", author: "Orelsan" },
  { text: "J’vénère les femmes à tête de chienne comme les Egyptiens", author: "Orelsan" },
  { text: "J'marche sur l'eau, j'nage sur le bitume", author: "Orelsan" },
  { text: "Les dèps qui disent qu’j’suis homophobe peuvent aller se faire enculer", author: "Orelsan" },
  { text: "J’me rappelle plus de sa tête, j’sais juste qu’elle était dégueulasse", author: "Orelsan" },
  { text: "JAvec un SMIC les putes sont hors de prix", author: "Orelsan" },
  { text: "J’fais du sale avec classe, j’suis venu salir la salle", author: "Kaaris" },
  { text: "Le temps c’est d’l’argent, j’ai pas l’temps d’parler.", author: "Kaaris" },
  { text: "Les rêves d’enfance s’sont noyés dans l’essence.", author: "Kaaris" },
  { text: "Rafale de pruneaux sur le comico, au menu c'est un tajine au poulet", author: "Kaaris" },
  { text: "J'brûle comme le soleil, tu repars t'as le cul qui pèle", author: "Kaaris" },
  { text: "Et j'leur baise tellement leur daronne qu'elles ont même du retard sur leurs menstrues", author: "Kaaris" },
  { text: "Y'a que les ficelles de tes strings qui t'soutiennent", author: "Kaaris" },
  { text: "Main sur ta schneck, l'autre sur mon Ruger : j'suis ambidextre", author: "Kaaris" }
];

let remainingQuotes = [];  // contiendra les citations restantes à deviner
let currentQuote = null;

const quoteEl = document.getElementById('quote');
const resultEl = document.getElementById('result');
const startBtn = document.getElementById('start');
const gameButtons = document.getElementById('game-buttons');

function startGame() {
  startBtn.style.display = 'none';      // cache le bouton "Commencer"
  gameButtons.style.display = 'block';  // affiche les boutons Kaaris/Orelsan
  remainingQuotes = [...quotes];        // copie du tableau original
  newQuote();
}

function newQuote() {
  // Si toutes les phrases ont été utilisées :
  if (remainingQuotes.length === 0) {
    quoteEl.textContent = "🎉 Fin du jeu ! Tu as tout deviné !";
    resultEl.textContent = "";
    startBtn.textContent = "Rejouer";
    startBtn.style.display = "block";
    gameButtons.style.display = "none";
    return;
  }

  // Tirer une phrase au hasard parmi celles restantes
  const randomIndex = Math.floor(Math.random() * remainingQuotes.length);
  currentQuote = remainingQuotes[randomIndex];
  
  // Supprimer cette phrase du tableau pour éviter qu’elle revienne
  remainingQuotes.splice(randomIndex, 1);

  quoteEl.textContent = `"${currentQuote.text}"`;
  resultEl.textContent = "";
}

function checkAnswer(choice) {
  if (!currentQuote) return;

  if (choice === currentQuote.author) {
    resultEl.textContent = "✅ Bonne réponse !";
    resultEl.style.color = "limegreen";
  } else {
    resultEl.textContent = `❌ Mauvaise réponse... C'était ${currentQuote.author}`;
    resultEl.style.color = "crimson";
  }

  // Nouvelle phrase après 2 secondes
  setTimeout(newQuote, 1000);
}

document.getElementById('kaaris').addEventListener('click', () => checkAnswer("Kaaris"));
document.getElementById('orelsan').addEventListener('click', () => checkAnswer("Orelsan"));
startBtn.addEventListener('click', startGame);
