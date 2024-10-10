import Cl_rectangulo from "./Cl_rectangulo.js";

let rectangulo1 = new Cl_rectangulo(4, 2);
let rectangulo2 = new Cl_rectangulo(3, 5);

let salida = document.getElementById("Salida");

let mostrarResultado = (rectangulo) => {
    let area = rectangulo.area();
    let perimetro = rectangulo.perimetro();

    return `
        <p>Base del rectángulo: ${rectangulo.base}</p>
        <p>Altura: ${rectangulo.altura}</p>
        <p>Área resultante: ${area}</p>
        <p>Perímetro: ${perimetro}</p>
        <hr>
    `;
};

salida.innerHTML = `
    ${mostrarResultado(rectangulo1)}
    ${mostrarResultado(rectangulo2)}
`;
