const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "O que é Inteligência Artificial (IA)?",
        alternativas: [
            {
                texto: "Uma tecnologia que imita a inteligência humana para executar tarefas.",
                afirmacao: "Percebeu que ela pode realizar atividades como reconhecer voz, traduzir textos e identificar padrões."
            },
            {
                texto: "Um tipo de robô com sentimentos.",
                afirmacao: "Imaginou que a IA fosse algo como um humano artificial com emoções."
            }
        ]
    },
    {
        enunciado: "Como a IA pode ajudar na educação?",
        alternativas: [
            {
                texto: "Ajudando no aprendizado com plataformas inteligentes e correção automática.",
                afirmacao: "Entendeu que ela pode economizar tempo do professor e personalizar o ensino."
            },
            {
                texto: "Não influencia, pois não pode ser usada na escola.",
                afirmacao: "Achou que o uso da IA fosse proibido no ambiente escolar."
            }
        ]
    },
    {
        enunciado: "Quais riscos a IA pode trazer para os alunos?",
        alternativas: [
            {
                texto: "Pode gerar dependência e reduzir o pensamento crítico.",
                afirmacao: "Percebeu que é preciso usar com equilíbrio para não prejudicar o aprendizado."
            },
            {
                texto: "Nenhum risco, é sempre positiva.",
                afirmacao: "Acreditou que toda tecnologia é benéfica sem considerar os impactos."
            }
        ]
    },
    {
        enunciado: "Você acha que a IA pode substituir professores?",
        alternativas: [
            {
                texto: "Não, mas pode ser uma grande aliada.",
                afirmacao: "Compreendeu que a IA pode apoiar, mas não substituir o papel humano."
            },
            {
                texto: "Sim, no futuro não precisaremos de professores.",
                afirmacao: "Imaginou uma escola totalmente automatizada, sem interação humana."
            }
        ]
    },
    {
        enunciado: "Qual é o principal cuidado ao usar IA na escola?",
        alternativas: [
            {
                texto: "Garantir que ela seja usada como apoio, e não como única fonte de estudo.",
                afirmacao: "Reconheceu que o equilíbrio é fundamental para aprender de verdade."
            },
            {
                texto: "Não precisa de cuidado, é só usar sempre.",
                afirmacao: "Ignorou que até tecnologias avançadas podem ter limites e riscos."
            }
        ]
    }
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
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
