// =============================
// CONFIGURACIÓN DEL QUIZ
// =============================
const preguntas = [
    {
        texto: "Cuando te despiertas, ¿qué haces primero?",
        opciones: [
            { txt: "Reviso mis redes sociales", valor: 1 },
            { txt: "Me levanto y empiezo mi rutina", valor: 0 }
        ]
    },
    {
        texto: "Cuando estás estudiando o trabajando y te aburres...",
        opciones: [
            { txt: "Agarro el teléfono sin pensarlo", valor: 1 },
            { txt: "Intento seguir o hago una pausa real", valor: 0 }
        ]
    },
    {
        texto: "Al comer, ¿qué haces normalmente?",
        opciones: [
            { txt: "Veo TikTok / Instagram / Shorts", valor: 1 },
            { txt: "Solo como o veo algo más largo", valor: 0 }
        ]
    },
    {
        texto: "Cuando subes una historia o TikTok...",
        opciones: [
            { txt: "Voy revisando cuántas vistas tengo", valor: 1 },
            { txt: "Ni me acuerdo hasta mucho después", valor: 0 }
        ]
    },
    {
        texto: "En una conversación con alguien importante...",
        opciones: [
            { txt: "Reviso el teléfono varias veces", valor: 1 },
            { txt: "No lo toco o solo si es necesario", valor: 0 }
        ]
    },
    {
        texto: "Cuando estás solo un rato...",
        opciones: [
            { txt: "Lo primero que hago es abrir alguna red", valor: 1 },
            { txt: "Pienso qué hacer o descanso sin celular", valor: 0 }
        ]
    },
    {
        texto: "Si te propones no usar redes por 1 hora...",
        opciones: [
            { txt: "Me cuesta muchísimo y fallo seguido", valor: 1 },
            { txt: "Puedo hacerlo sin problema", valor: 0 }
        ]
    }
];

let indice = 0;
let puntaje = 0;

const contenedor = document.getElementById("quiz-container");

// =============================
// FUNCIÓN PARA CARGAR PREGUNTA
// =============================
function mostrarPregunta() {
    const p = preguntas[indice];

    contenedor.innerHTML = `
        <h2>${p.texto}</h2>
        ${p.opciones.map(op => `
            <button class="opcion-btn" onclick="responder(${op.valor})">
                ${op.txt}
            </button>
        `).join("")}
    `;

    contenedor.classList.add("fade-in");
}

// =============================
// MANEJO DE RESPUESTA
// =============================
function responder(valor) {
    puntaje += valor;
    
    contenedor.classList.remove("fade-in");
    contenedor.classList.add("fade-out");

    setTimeout(() => {
        contenedor.classList.remove("fade-out");
        indice++;

        if (indice < preguntas.length) {
            mostrarPregunta();
        } else {
            mostrarResultado();
        }
    }, 350);
}

// =============================
// RESULTADO FINAL
// =============================
function mostrarResultado() {
    const total = preguntas.length;
    const porcentaje = Math.round((puntaje / total) * 100);

    let textoFinal = "";

    if (porcentaje < 35) textoFinal = "Tienes un control excelente.";
    else if (porcentaje < 50) textoFinal = "Buen equilibrio, aunque puedes mejorar.";
    else if (porcentaje < 70) textoFinal = "Cuidado, estás entrando en dependencia.";
    else if (porcentaje < 80) textoFinal = "Estás consumido por las redes sociales.";
    else textoFinal = "Nivel crítico: deberías tomar medidas urgentes.";

    contenedor.innerHTML = `
        <h2>Resultado Final</h2>
        <p id="resultado-final">${porcentaje}% — ${textoFinal}</p>
    `;

    contenedor.classList.add("fade-in");
}

// =============================
mostrarPregunta();
