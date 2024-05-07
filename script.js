const resultado = document.querySelector('.result')
const scoreHumano = document.querySelector('.score-human')
const scoreMachine = document.querySelector('.score-machine')

let scoreH = 0
let scoreM = 0



const playerhuman = (humanchoice) => {


    playergame(humanchoice, playermachine())

}


const CHOCE_OPTIONS = {

    PEDRA: 'pedra',
    PAPEL: 'papel',
    TESOURA: 'tesoura'


}




const playermachine = () => {

    const choice = [CHOCE_OPTIONS.PEDRA, CHOCE_OPTIONS.PAPEL, CHOCE_OPTIONS.TESOURA]

    const randomnumber = Math.floor(Math.random() * 3)

    return choice[randomnumber]

}


const playergame = (human, machine) => {

    console.log('humano' + human + 'maquina' + machine)

    if (human === machine) {

        resultado.innerHTML = 'voce empatou'



    } else if ((human === CHOCE_OPTIONS.PEDRA && machine === CHOCE_OPTIONS.TESOURA) ||
        (human === CHOCE_OPTIONS.PAPEL && machine === CHOCE_OPTIONS.PEDRA) ||
        (human === CHOCE_OPTIONS.TESOURA && machine === CHOCE_OPTIONS.PAPEL)) {


        resultado.innerHTML = 'voce ganhou'
        scoreH++
        scoreHumano.innerHTML = scoreH

    } else {

        resultado.innerHTML = 'voce perdeu'
        scoreM++
        scoreMachine.innerHTML = scoreM



    }


}

