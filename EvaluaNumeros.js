class EvaluaNumeros {
    constructor(num1, num2, num3, num4){
        this.A = num1
        this.B = num2
        this.C = num3
        this.D = num4
        this.numMay = 0
        this.numMen = 0
    }

    verificaNumeros(num1, num2, num3, num4) {
        let resultado = true
        if((num1 == num2) || (num1 == num3) || (num1 == num4) || (num2 == num3) || (num2 == num4) || (num3 == num4)){
            resultado =  false
        }

        return resultado
    }

    validaMayor(num1, num2, num3, num4){
        if((num1 > num2) && (num1 > num3) && (num1 > num4)){
            this.numMay = num1
        }else{
            if((num2 > num3) && (num2 > num4)){
                this.numMay = num2
            }else{
                if(num3>num4){
                    this.numMay = num3
                }else{
                    this.numMay = num4
                }
            }
        }        
    }

    validaMenor(num1, num2, num3, num4){
        if((num1 < num2) && (num1 < num3) && (num1 < num4)){
            this.numMen = num1
        }else{
            if((num2 < num3) && (num2 < num4)){
                this.numMen = num2
            }else{
                if(num3<num4){
                    this.numMen = num3
                }else{
                    this.numMen = num4
                }
            }
        }
    }
}

const boton = document.querySelector('#ejecuta')

boton.addEventListener('click',function(event){
    event.preventDefault()

    const ejercicioEvalua = new EvaluaNumeros(document.querySelector('#num1').valueAsNumber,
                                                document.querySelector('#num2').valueAsNumber,
                                                document.querySelector('#num3').valueAsNumber,
                                                document.querySelector('#num4').valueAsNumber)
    if(!ejercicioEvalua.verificaNumeros(ejercicioEvalua.A,ejercicioEvalua.B,ejercicioEvalua.C,ejercicioEvalua.D)) {alert('No se deben digitar numeros repetidos')}

    ejercicioEvalua.validaMayor(ejercicioEvalua.A,ejercicioEvalua.B,ejercicioEvalua.C,ejercicioEvalua.D)
    ejercicioEvalua.validaMenor(ejercicioEvalua.A,ejercicioEvalua.B,ejercicioEvalua.C,ejercicioEvalua.D)

    console.log("El numero mayor: "+ejercicioEvalua.numMay)
    console.log("El numero menor: "+ejercicioEvalua.numMen)

    const resp = document.querySelector("#respuesta")
    resp.innerHTML = `El número mayor es: ${ejercicioEvalua.numMay} y el número menor es: ${ejercicioEvalua.numMen}`
})


