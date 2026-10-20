
// Colores posibles para texto y fondo de los párrafos
const coloresParrafo = [
    '#264653',
    '#2a9d8f',
    '#e9c46a',
    '#f4a261',
    '#e76f51'
];
// Colores posibles para el fondo de los bloques (article y section)
const coloresBloque = [
    '#cdb4db',
    '#ffc8dd',
    '#ffafcc',
    '#bde0fe',
    '#a2d2ff'
];

// GIF
const gifs = [
    'assets/magic-1.gif',
    'assets/magic-2.gif',
    'assets/magic-3.gif',
    'assets/magic-4.gif',
    'assets/magic-5.gif',
    'assets/magic-6.gif'
];

// Devuelve un elemento al azar del array recibido
const getRandom = (array) => {
    const indice = Math.floor(Math.random() * array.length);
    return array[indice];
};

// Evita el comportamiento por defecto de cualquier click
document.addEventListener('click', function (event) {
    event.preventDefault();
});

// --- Imágenes ---
const imagenes = document.querySelectorAll('img');

imagenes.forEach(function (imagen) {

    // Guarda la imagen original para restaurarla después
    const srcOriginal = imagen.src;

    // Click: cambia la imagen por un GIF aleatorio
    imagen.addEventListener('click', function (event) {
        event.preventDefault();
        event.stopPropagation(); // Evita que el click llegue al bloque padre
        imagen.src = getRandom(gifs);
    });

    // Hover: muestra el GIF de "abracadabra"
    imagen.addEventListener('mouseenter', function () {
        imagen.src = 'assets/abracadabra.gif';
    });

    // Al salir el mouse: vuelve a la imagen original
    imagen.addEventListener('mouseleave', function () {
        imagen.src = srcOriginal;
    });
});

// --- Párrafos ---
const parrafos = document.querySelectorAll('p');

parrafos.forEach(function (parrafo) {

    // Guarda los colores originales para restaurarlos después
    const colorOriginal = parrafo.style.color;
    const fondoOriginal = parrafo.style.backgroundColor;


    // Click: cambia texto y fondo a colores aleatorios
    parrafo.addEventListener('click', function (event) {
        event.preventDefault();
        event.stopPropagation(); // Evita que el click llegue al bloque padre
        parrafo.style.color = getRandom(coloresParrafo);
        parrafo.style.backgroundColor = getRandom(coloresParrafo);
    });

    // Hover: cambia texto y fondo a colores aleatorios
    parrafo.addEventListener('mouseenter', function () {
        parrafo.style.color = getRandom(coloresParrafo);
        parrafo.style.backgroundColor = getRandom(coloresParrafo);
    });

    // Al salir el mouse: restaura los colores originales
    parrafo.addEventListener('mouseleave', function () {
        parrafo.style.color = colorOriginal;
        parrafo.style.backgroundColor = fondoOriginal;
    });
});


// --- Bloques (article y section) ---
const bloques = document.querySelectorAll('article, section');

bloques.forEach(function (bloque) {

    // Guarda el fondo original para restaurarlo después
    const fondoOriginal = bloque.style.backgroundColor;

    // Click: cambia el fondo a un color aleatorio
    bloque.addEventListener('click', function (event) {
        event.preventDefault();
        event.stopPropagation(); // Evita que el click afecte a bloques contenedores
        bloque.style.backgroundColor = getRandom(coloresBloque);
    });

    // Hover: cambia el fondo a un color aleatorio
    bloque.addEventListener('mouseenter', function () {
        bloque.style.backgroundColor = getRandom(coloresBloque);
    });

    // Al salir el mouse: restaura el fondo original
    bloque.addEventListener('mouseleave', function () {
        bloque.style.backgroundColor = fondoOriginal;
    });
});
