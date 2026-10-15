const http = require("http");

const PORT = 3000;

const cards = [
  { name: "BIGBANG", type: "Deus", attack: 1000, defense: 1000 },
  { name: "bruno", type: "Criatura", attack: 2, defense: 2 },
  { name: "Qiyana", type: "Assassina", attack: 400, defense: 4 },
  { name: "Briar", type: "Criatura", attack: 5, defense: 7 },
  { name: "Hwei", type: "Mage", attack: 7, defense: 3 },
];

const server = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`);

  // Página inicial
  if (req.url === "/") {
    res.writeHead(200, {
      "Content-Type": "text/html; charset=utf-8"
    });

    res.end("<h1>Funciona</h1>");
    return;
  }

  // Página sobre
  if (req.url === "/sobre") {
    res.writeHead(200, {
      "Content-Type": "text/html; charset=utf-8"
    });

    res.end("<h1>brumo</h1>");
    return;
  }

  // Lista de cartas
  if (req.url === "/cartas") {
    const items = cards
      .map(card => `<li>${card.name}</li>`)
      .join("");

    res.writeHead(200, {
      "Content-Type": "text/html; charset=utf-8"
    });

    res.end(`
      <h1>Cartas</h1>
      <ul>
        ${items}
      </ul>
      <p>${cards.length} cartas disponíveis</p>
    `);

    return;
  }

  // Carta aleatória
  if (req.url === "/cartas/aleatoria") {
    const card = cards[Math.floor(Math.random() * cards.length)];

    res.writeHead(200, {
      "Content-Type": "text/html; charset=utf-8"
    });

    res.end(`
      <h1>Carta Aleatória</h1>

      <p><strong>Nome:</strong> ${card.name}</p>
      <p><strong>Tipo:</strong> ${card.type}</p>
      <p><strong>Ataque:</strong> ${card.attack}</p>
      <p><strong>Defesa:</strong> ${card.defense}</p>
    `);

    return;
  }

  // Data e hora atual
  if (req.url === "/agora") {
    res.writeHead(200, {
      "Content-Type": "text/html; charset=utf-8"
    });

    const now = new Date().toLocaleString("pt-PT");

    res.end(`<h1>${now}</h1>`);
    return;
  }

  // Página 404
  res.writeHead(404, {
    "Content-Type": "text/html; charset=utf-8"
  });

  res.end(`
    <h1>404 — Página Não Encontrada</h1>
    <p>O endereço pedido não existe neste servidor.</p>
  `);
});

server.listen(PORT, () => {
  console.log(`Server a correr em http://localhost:${PORT}`);
});