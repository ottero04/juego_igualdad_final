// Variables globales para controlar el estado del juego
let indiceEscenarioActual = 0;
let indiceSituacionActual = 0;
let indiceEquidad = 15; // Cambiado de 50 a 15
let reputacionSocial = 15; // Cambiado de 50 a 15
let explicacionActual = "";
let impactosActuales = { equidad: 0, reputacion: 0 };
let datosInvestigacionActuales = null;
let situacionesSeleccionadas = []; // Array para almacenar las situaciones seleccionadas aleatoriamente

// Referencias a los elementos del DOM
const pantallaJuego = document.getElementById('pantalla-juego');
const pantallaExplicacion = document.getElementById('pantalla-explicacion');
const pantallaResultado = document.getElementById('pantalla-resultado');

// Elementos de la pantalla principal
const insigniaEscenario = document.getElementById('insignia-escenario');
const insigniaSituacion = document.getElementById('insignia-situacion');
const tituloEscenario = document.getElementById('titulo-escenario');
const descripcionEscenario = document.getElementById('descripcion-escenario');
const descripcionSituacion = document.getElementById('descripcion-situacion');
const contenedorDecisiones = document.getElementById('contenedor-decisiones');
const valorEquidad = document.getElementById('valor-equidad');
const valorReputacion = document.getElementById('valor-reputacion');
const progresoEquidad = document.getElementById('progreso-equidad');
const progresoReputacion = document.getElementById('progreso-reputacion');

// Elementos de la pantalla de explicación
const textoExplicacion = document.getElementById('texto-explicacion');
const impactoEquidad = document.getElementById('impacto-equidad');
const impactoReputacion = document.getElementById('impacto-reputacion');
const contenedorDatosInvestigacion = document.getElementById('contenedor-datos-investigacion');
const tituloInvestigacion = document.getElementById('titulo-investigacion');
const contenidoInvestigacion = document.getElementById('contenido-investigacion');
const botonContinuar = document.getElementById('boton-continuar');

// Elementos de la pantalla de resultado
const insigniaResultado = document.getElementById('insignia-resultado');
const descripcionResultado = document.getElementById('descripcion-resultado');
const valorEquidadFinal = document.getElementById('valor-equidad-final');
const valorReputacionFinal = document.getElementById('valor-reputacion-final');
const progresoEquidadFinal = document.getElementById('progreso-equidad-final');
const progresoReputacionFinal = document.getElementById('progreso-reputacion-final');
const botonJugarNuevo = document.getElementById('boton-jugar-nuevo');

// Inicializar el juego cuando la página carga
document.addEventListener('DOMContentLoaded', inicializarJuego);

// Función para inicializar el juego
function inicializarJuego() {
    // Seleccionar situaciones aleatorias para cada escenario
    situacionesSeleccionadas = escenarios.map(escenario => 
        obtenerSituacionesAleatorias(escenario.situaciones, 3)
    );
    
    actualizarInterfazJuego();
    
    // Configurar eventos
    botonContinuar.addEventListener('click', continuarDespuesDeExplicacion);
    botonJugarNuevo.addEventListener('click', reiniciarJuego);
}

// Función para seleccionar situaciones aleatorias
function obtenerSituacionesAleatorias(situacionesEscenario, cantidad = 3) {
    const mezcladas = [...situacionesEscenario].sort(() => 0.5 - Math.random());
    return mezcladas.slice(0, cantidad);
}

// Función para mezclar las decisiones aleatoriamente
function mezclarDecisiones(decisiones) {
    return [...decisiones].sort(() => 0.5 - Math.random());
}

// Función para actualizar la interfaz del juego
function actualizarInterfazJuego() {
    const escenarioActual = escenarios[indiceEscenarioActual];
    const situacionActual = situacionesSeleccionadas[indiceEscenarioActual][indiceSituacionActual];
    
    // Actualizar información del escenario
    insigniaEscenario.textContent = `Escenario ${indiceEscenarioActual + 1}/${escenarios.length}`;
    insigniaSituacion.textContent = `Situación ${indiceSituacionActual + 1}/3`;
    tituloEscenario.textContent = escenarioActual.nombre;
    descripcionEscenario.textContent = escenarioActual.descripcion;
    descripcionSituacion.textContent = situacionActual.descripcion;
    
    // Actualizar indicadores
    valorEquidad.textContent = `${indiceEquidad}%`;
    valorReputacion.textContent = `${reputacionSocial}%`;
    progresoEquidad.style.width = `${indiceEquidad}%`;
    progresoReputacion.style.width = `${reputacionSocial}%`;
    
    // Generar botones de decisión (mezclados aleatoriamente)
    contenedorDecisiones.innerHTML = '';
    const decisionesMezcladas = mezclarDecisiones(situacionActual.decisiones);
    
    decisionesMezcladas.forEach((decision, indice) => {
        const boton = document.createElement('button');
        boton.className = 'boton-decision';
        boton.innerHTML = `
            <span class="texto-decision">${decision.texto}</span>
            <span class="icono-decision">→</span>
        `;
        boton.addEventListener('click', () => manejarDecision(decision));
        contenedorDecisiones.appendChild(boton);
    });
}

// Función para manejar la decisión del jugador
function manejarDecision(decision) {
    // Guardar la explicación, los impactos y los datos de investigación
    explicacionActual = decision.explicacion;
    impactosActuales = {
        equidad: decision.impactoEquidad,
        reputacion: decision.impactoReputacion
    };
    
    // Obtener los datos de investigación de la situación actual
    const situacionActual = situacionesSeleccionadas[indiceEscenarioActual][indiceSituacionActual];
    datosInvestigacionActuales = situacionActual.datosInvestigacion;
    
    // Actualizar la pantalla de explicación
    textoExplicacion.textContent = explicacionActual;
    
    // Mostrar los impactos con colores según sean positivos o negativos
    impactoEquidad.textContent = impactosActuales.equidad > 0 ? `+${impactosActuales.equidad}` : impactosActuales.equidad;
    impactoEquidad.className = `valor-impacto ${impactosActuales.equidad > 0 ? 'positivo' : impactosActuales.equidad < 0 ? 'negativo' : 'neutral'}`;
    
    impactoReputacion.textContent = impactosActuales.reputacion > 0 ? `+${impactosActuales.reputacion}` : impactosActuales.reputacion;
    impactoReputacion.className = `valor-impacto ${impactosActuales.reputacion > 0 ? 'positivo' : impactosActuales.reputacion < 0 ? 'negativo' : 'neutral'}`;
    
    // Mostrar los datos de investigación
    if (datosInvestigacionActuales) {
        tituloInvestigacion.textContent = datosInvestigacionActuales.titulo;
        contenidoInvestigacion.textContent = datosInvestigacionActuales.contenido;
        contenedorDatosInvestigacion.classList.remove('oculto');
    } else {
        contenedorDatosInvestigacion.classList.add('oculto');
    }
    
    // Mostrar la pantalla de explicación
    pantallaJuego.classList.add('oculto');
    pantallaExplicacion.classList.remove('oculto');
}

// Función para continuar después de la explicación
function continuarDespuesDeExplicacion() {
    // Actualizar puntuaciones
    indiceEquidad = Math.max(0, Math.min(100, indiceEquidad + impactosActuales.equidad));
    reputacionSocial = Math.max(0, Math.min(100, reputacionSocial + impactosActuales.reputacion));
    
    // Avanzar a la siguiente situación o escenario
    if (indiceSituacionActual < 2) { // Solo 3 situaciones por escenario (0, 1, 2)
        // Avanzar a la siguiente situación
        indiceSituacionActual++;
    } else {
        // Avanzar al siguiente escenario
        if (indiceEscenarioActual < escenarios.length - 1) {
            indiceEscenarioActual++;
            indiceSituacionActual = 0;
        } else {
            // Juego completado
            mostrarResultado();
            return;
        }
    }
    
    // Actualizar la interfaz y volver a la pantalla principal
    actualizarInterfazJuego();
    pantallaExplicacion.classList.add('oculto');
    pantallaJuego.classList.remove('oculto');
}

// Función para mostrar el resultado final
function mostrarResultado() {
    let resultado = "";
    let descripcion = "";
    
    // Determinar el resultado basado en las puntuaciones
    if (indiceEquidad >= 75 && reputacionSocial >= 75) {
        resultado = "Líder Empático";
        descripcion = "Has demostrado un fuerte compromiso con la equidad y has ganado el respeto de quienes te rodean. Tu liderazgo inspira a otros a seguir tu ejemplo.";
    } else if (indiceEquidad >= 75 && reputacionSocial < 75) {
        resultado = "Justiciero Ético";
        descripcion = "Defiendes firmemente tus principios de equidad, aunque a veces tus métodos pueden ser controvertidos o generar resistencia en los demás.";
    } else if (indiceEquidad < 75 && reputacionSocial >= 75) {
        resultado = "Observador Neutral";
        descripcion = "Eres bien visto por los demás, pero no siempre tomas una posición firme en favor de la equidad cuando se necesita.";
    } else {
        resultado = "Injusto por Omisión";
        descripcion = "Tus acciones y omisiones han contribuido a perpetuar la desigualdad, y los demás han notado tu falta de compromiso con la justicia.";
    }
    
    // Actualizar la pantalla de resultado
    insigniaResultado.textContent = resultado;
    descripcionResultado.textContent = descripcion;
    
    valorEquidadFinal.textContent = `${indiceEquidad}%`;
    valorReputacionFinal.textContent = `${reputacionSocial}%`;
    progresoEquidadFinal.style.width = `${indiceEquidad}%`;
    progresoReputacionFinal.style.width = `${reputacionSocial}%`;
    
    // Mostrar la pantalla de resultado
    pantallaExplicacion.classList.add('oculto');
    pantallaJuego.classList.add('oculto');
    pantallaResultado.classList.remove('oculto');
}

// Función para reiniciar el juego
function reiniciarJuego() {
    // Reiniciar variables
    indiceEscenarioActual = 0;
    indiceSituacionActual = 0;
    indiceEquidad = 15; // Cambiado de 50 a 15
    reputacionSocial = 15; // Cambiado de 50 a 15
    
    // Seleccionar nuevas situaciones aleatorias
    situacionesSeleccionadas = escenarios.map(escenario => 
        obtenerSituacionesAleatorias(escenario.situaciones, 3)
    );
    
    // Actualizar la interfaz
    actualizarInterfazJuego();
    
    // Volver a la pantalla principal
    pantallaResultado.classList.add('oculto');
    pantallaJuego.classList.remove('oculto');
}