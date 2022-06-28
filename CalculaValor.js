let tot_mat = 0
let desc = 0
let tot_pago = 0

const boton = document.querySelector('#calcular')

boton.addEventListener('click',function(event){
    event.preventDefault()

    const nombre = document.querySelector('#nombre').value
    const cantmat = document.querySelector('#cantmat').valueAsNumber
    const valmat = document.querySelector('#valmat').valueAsNumber
    const valpapel = 20000
    const valcarnet = 8000

    let tot_mat = (cantmat * valmat)
    let desc = ((tot_mat * 20)/100)
    let tot_pago = ((tot_mat - desc)+ valpapel+valcarnet)

    const resp1 = document.querySelector("#totmat")
    const resp2 = document.querySelector("#desc")
    const resp3 = document.querySelector("#totpago")

    resp1.innerHTML = `Valor total materias ${tot_mat}`
    resp2.innerHTML = `Valor descuento ${desc}`
    resp3.innerHTML = `Valor total a pagar ${tot_pago}`
})
