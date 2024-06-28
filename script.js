const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: " Os jogos exercem um papel fundamental na vida humana, proporcionando não apenas entretenimento, mas também oportunidades de aprendizado, socialização e desenvolvimento pessoal. Desde os primórdios da civilização, os jogos têm sido uma forma de explorar habilidades físicas e mentais, desafiando limites e estimulando a criatividade. Seja um simples jogo de tabuleiro em família ou um complexo videogame multiplayer online, cada experiência de jogo oferece uma jornada única de descoberta e diversão. Qual é o seu tipo de jogo preferido?",
        alternativas: [
            {
                texto: " Estratégia",
                afirmacao: " *Os jogos oferecem uma variedade de vantagens significativas para os jogadores de todas as idades. Eles estimulam o desenvolvimento cognitivo, melhorando habilidades como resolução de problemas e raciocínio estratégico.  "
            },
            {
                texto: "Ação ",
                afirmacao: "*os jogos ofereçam muitos benefícios, há também desvantagens a serem consideradas. O excesso de tempo dedicado aos jogos pode levar ao isolamento social, diminuindo as interações pessoais e afetando relacionamentos.  "
            }
        ]
    },
    {
        enunciado: " O que mais te atrai em um jogo?",
        alternativas: [
            {
                texto: " História envolvente ",
                afirmacao: " *promovem a colaboração e o trabalho em equipe, essenciais tanto em jogos multiplayer quanto em atividades cotidianas. "
            },
            {
                texto: " Jogabilidade desafiadora",
                afirmacao: " *Alguns jogos violentos podem desensibilizar os jogadores à violência real, especialmente quando não há um equilíbrio com experiências positivas. "
            }
        ]
    },
    {
        enunciado: " Como você costuma jogar mais frequentemente? ",
        alternativas: [
            {
                texto: " Sozinho",
                afirmacao: " *Jogos educativos podem ser uma ferramenta eficaz no ensino, tornando o aprendizado mais envolvente e interativo. "
            },
            {
                texto: " Com amigos ou online com desconhecidos ",
                afirmacao: "*A dependência de jogos pode prejudicar o desempenho acadêmico e profissional devido à falta de foco em outras áreas da vida. "
            }
        ]
    },
    {
        enunciado: " Qual plataforma de jogo você prefere? ",
        alternativas: [
            {
                texto: " Consoles (PlayStation, Xbox) ",
                afirmacao: " *Eles também proporcionam um escape saudável do estresse diário, ajudando a relaxar e a aliviar a ansiedade.  "
            },
            {
                texto: "PC ou celular.",
                afirmacao: " *Problemas de saúde física, como dores crônicas e lesões por esforço repetitivo, são comuns devido a longas sessões de jogo sem pausas adequadas. "
            }
        ]
    },
    {
        enunciado: "O que você valoriza mais em um jogo? ",
        alternativas: [
            {
                texto: " Gráficos e tecnologia avançada ",
                afirmacao: "  *Por fim, os jogos podem ser uma forma de expressão artística, através de gráficos impressionantes, trilhas sonoras emocionantes e narrativas envolventes que inspiram a criatividade. "
            },
            {
                texto: "Originalidade e inovação ",
                afirmacao: " *Além disso, os custos associados aos jogos, como hardware de alto desempenho e expansões, podem ser significativos, impactando o orçamento pessoal ou familiar. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = " Algumas vantagens e desvantagens dos jogos...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();