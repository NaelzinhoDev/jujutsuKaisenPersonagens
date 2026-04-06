const wrapper = document.querySelector(".cardWrapper");

wrapper.addEventListener("mousemove", (e) => {
  const rect = card.getBoundingClientRect();

  // centro do card
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  // distância do mouse até o centro
  const deltaX = e.clientX - centerX;
  const deltaY = e.clientY - centerY;

  // normalizar (importante!)
  const percentX = deltaX / (rect.width / 2);
  const percentY = deltaY / (rect.height / 2);

  const intensity = 20;

  const rotateY = percentX * intensity;
  const rotateX = -percentY * intensity;

  card.style.transform = `
    rotateX(${rotateX}deg)
    rotateY(${rotateY}deg)
    scale(1.1)
  `;

  // holográfico continua funcionando
  const x = (e.clientX - rect.left) / rect.width;
  const y = (e.clientY - rect.top) / rect.height;

  card.style.setProperty("--x", `${x * 100}%`);
  card.style.setProperty("--y", `${y * 100}%`);
});
wrapper.addEventListener("mouseleave", () => {
  card.style.transform = `rotateX(0deg) rotateY(0deg) scale(1)`;
});

const title = document.querySelector(".title");

card.addEventListener("mousemove", (e) => {
  const rect = card.getBoundingClientRect();

  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const moveX = (x - rect.width / 2) / 20;
  const moveY = (y - rect.height / 2) / 20;

  title.style.transform = `
    translateZ(50px)
    translateX(${moveX}px)
    translateY(${moveY}px)
  `;
});

const characters = [
  {
    name: "Satoru Gojo",
    role: "Feiticeiro Especial",
    desc: "Um dos Satoru Gojo (五条悟 Gojō Satoru) é um dos protagonistas principais da série Jujutsu Kaisen. Ele é um feiticeiro jujutsu de classe especial e grandemente reconhecido como o mais forte do mundo. Satoru é o orgulho do Clã Gojo, a primeira pessoa a herdar ambos o Ilimitado e os Seis Olhos em quatrocentos anos. Ele trabalha como um professor na Escola Jujutsu de Tóquio e usa sua influência para proteger e treinar jovens aliados fortes. mais poderosos, capaz de manipular o infinito e dominar técnicas únicas.",
    image: "Assets/Satoru Gojo.jfif",
  },
  {
    name: "Sukuna",
    role: "Rei das Maldições",
    desc: "Um ninja Ryomen Sukuna (両りょう面めん宿すく儺な Ryōmen Sukuna?), mais frequentemente chamado de simplesmente Sukuna (宿すく儺な Sukuna?), é o feiticeiro jujutsu mais forte de mais de mil anos atrás. Considerado como o indiscutível Rei das Maldições (呪のろいの王おう Noroi no Ō?), Sukuna é um dos antagonistas principais da série Jujutsu Kaisen. que sonha em se tornar Hokage e proteger sua vila a qualquer custo.",
    image: "Assets/Sukuna.jfif",
  },
  {
    name: "Yuji Itadori",
    role: "Feiticeiro de Nível 1",
    desc: "Um shinobi focadoYuji Itadori (虎杖悠仁 Itadori Yūji) é o protagonista principal da série Jujutsu Kaisen. Ele é o filho de Jin Itadori e Kaori Itadori e neto de Wasuke Itadori. Yuji vivia uma vida normal na Cidade de Sendai até encontrar Megumi e comer um dos dedos de Sukuna. Após se tornar o receptáculo de Sukuna, Yuji começou a frequentar a Escola Jujutsu de Tóquio junto com Megumi e Nobara como estudantes do primeiro ano. em vingança e poder, com habilidades únicas do clã Uchiha.",
    image: "Assets/Itadori Yuuji.jfif",
  },
  {
    name: "Yuta Okkotsu",
    role: "Feiticeiro de Nível Especial",
    desc: "Um shinobiYuta Okkotsu (乙おっ骨こつ憂ゆう太た Okkotsu Yūta?) é um personagem secundário importante na série Jujutsu Kaisen e o protagonista principal de sua série prequência, Jujutsu Kaisen 0: Jujutsu High. Ele era inicialmente um humano amaldiçoado de classe especial assombrado pela sua amiga de infância falecida, Rika Orimoto. Satoru Gojo ensinou Yuta e o matriculou na Escola Jujutsu de Tóquio. focado em vingança e poder, com habilidades únicas do clã Uchiha.",
    image: "Assets/Yuta Okkotsu.jfif",
  },
  {
    name: "Megumi Fushiguro",
    role: "Feiticeiro de Nível 1",
    desc: "Um shiYuta Okkotsu (乙おっ骨こつ憂ゆう太た Okkotsu Yūta?) é um personagem secundário importante na série Jujutsu Kaisen e o protagonista principal de sua série prequência, Jujutsu Kaisen 0: Jujutsu High. Ele era inicialmente um humano amaldiçoado de classe especial assombrado pela sua amiga de infância falecida, Rika Orimoto. Satoru Gojo ensinou Yuta e o matriculou na Escola Jujutsu de Tóquio.nobi focado em vingança e poder, com habilidades únicas do clã Uchiha.",
    image: "Assets/Megumi Fushiguro.jfif",
  },
  {
    name: "Toji Fushiguro",
    role: "Feiticeiro de Nível 1",
    desc: "Um shinoToji Fushiguro (伏黒甚爾 Fushiguro Tōji), nascido Toji Zenin (禪院甚爾 Zen'in Tōji) é um personagem recorrente na série Jujutsu Kaisen. Ele era um ex-membro do clã Zenin e o infame assassino conhecido como o Assassino de Feiticeiros (術師殺し Jutsushi Goroshi), contratado pela Associação Hospedeira do Tempo entre outros grupos em seu tempo como um não-usuário de maldição. Ele também era o pai de Megumi Fushiguro e antigo inimigo de Satoru Gojo. Enquanto trabalha para o Culto da Estrela, Toji serve como o antagonista principal do Arco Passado de Gojo.bi focado em vingança e poder, com habilidades únicas do clã Uchiha.",
    image: "Assets/Toji Fushiguro.jfif",
  },
];

let index = 0;

const nameEl = document.getElementById("name");
const descEl = document.getElementById("desc");
const roleEl = document.querySelector(".role");
const imgEl = document.getElementById("image");
const titleEl = document.querySelector(".title");

function updateCharacter() {
  const char = characters[index];

  nameEl.textContent = char.name;
  descEl.textContent = char.desc;
  roleEl.textContent = char.role;
  imgEl.src = char.image;
  titleEl.textContent = char.name;
}

document.getElementById("next").onclick = () => {
  index = (index + 1) % characters.length;
  updateCharacter();
};

document.getElementById("prev").onclick = () => {
  index = (index - 1 + characters.length) % characters.length;
  updateCharacter();
};

card.style.opacity = 0;
setTimeout(() => {
  updateCharacter();
  card.style.opacity = 1;
}, 200);

const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];

for (let i = 0; i < 80; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 3 + 1,
    speed: Math.random() * 0.5,
  });
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach((p) => {
    p.y -= p.speed;

    if (p.y < 0) {
      p.y = canvas.height;
      p.x = Math.random() * canvas.width;
    }

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(255,255,255,0.7)";
    ctx.fill();
  });

  requestAnimationFrame(animateParticles);
}

animateParticles();

document.addEventListener("mousemove", (e) => {
  particles.forEach((p) => {
    const dx = p.x - e.clientX;
    const dy = p.y - e.clientY;
    const dist = Math.sqrt(dx * dx + dy * dy);

    if (dist < 100) {
      p.x += dx * 0.02;
      p.y += dy * 0.02;
    }
  });
});
