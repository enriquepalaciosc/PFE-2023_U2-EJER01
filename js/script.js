// declaraciones de variables globales
let username = ''
let weight = 0.0
let height = 0.0
let imc = 0.0

function calcularImc(evento) {
    // cancelar evento de "enviar formulario" y evitar recargar página
    evento.preventDefault()

    // Obtener valores desde los inputs (y convertir si es necesario)
    username = document.getElementById("username").value
    // parseFloat(valor) => Convierte "valor" en flotante
    // parseInt(valor) => Convierte "valor" en entero
    weight = parseFloat(document.getElementById("weight").value)
    height = parseFloat(document.getElementById("height").value)

    // Es equivalente a:
    // imc = weight / (Math.Pow(height,2)
    imc = weight / (height**2)

    // Comentado para motivos de depuración
    // console.log('Persona:', username, ' Peso:', weight, ' Altura:', height)

    // Verificar si dividió por cero, el peso es menor a 20 o la altura menor a 1
    if (imc === Infinity || weight < 20 || height < 1) {
        alert("La altura debe ser superior a un metro y el peso mayor a 20Kg")
    } else {
        let resultado = ''
        // If original
        if (imc < 18.5) {
            resultado = "Delgadez o bajo peso"
        } else if (imc > 18.5 && imc <= 24.9) {
            resultado = "Normal"
        } else if (imc > 24.9 && imc <= 29.9) {
            resultado = "Sobrepeso"
        } else { // equivale a img >= 30
            resultado = "Obesidad"
        }

        // Alternativa con switch
        /*switch (true) {
            case (imc < 18.5):
                resultado = 'Delgadez o bajo peso'
                break
            case (imc > 18.5 && imc <= 24.9):
                resultado = 'Normal'
                break
            case (imc > 24.9 && imc <= 29.9):
                resultado = 'Sobrepeso'
                break
            default:
                resultado = 'Obesidad'
                break
        }*/

        let resultHtml = document.getElementById('result')
        resultHtml.innerHTML = `El resultado del IMC entregó: <strong>${resultado}</strong>`
    }



}

// obtener formulario "formulario-imc" desde el DOM
let formulario = document.getElementById("formulario-imc")
/*
 * añadir una función que sirva de "handler" (gestionador) del evento
 * "submit" (enviar formulario) cuando se gatille. En este caso
 * la función es "calcularImc"
 */
formulario.addEventListener("submit", calcularImc)