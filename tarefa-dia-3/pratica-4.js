let numero = 5
let contador = 2
let primo = true

while(contador < numero){

    if(numero % contador == 0){
        primo = false
        break
    }
    contador = contador +1
}

if(primo){
    console.log('Sim, o número ' + numero + ' é primo!')
} else{console.log('Não, o número ' + numero + ' não é primo!')}