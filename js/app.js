
const randomArray = getArrayRandom(1,100,5)

const ramdomNumbers = alert('cerca di memorizzare il maggior numero possibile di numeri ' + randomArray)

console.log(randomArray)

let utentNumbersArray = [];
let countSame = 0;
let arraySame = [];

// con questo ciclo formo l array di numeri 
for(let i = 0; i < randomArray.length; i++){
    n = i + 1
    const utentNumbers = parseInt(prompt('inserisci i numeri che ti ricordi'));
    console.log(utentNumbers);

    utentNumbersArray.push(utentNumbers);
// qui faccio il controllo dei numeri uguali tra gli array 
    if(randomArray.includes(utentNumbers) && ! arraySame.includes(utentNumbers) ) {
        countSame = countSame + 1;

        arraySame.push(utentNumbers);

    }
    
}
    console.log(randomArray)  
    console.log(utentNumbersArray);
    console.log("i numeri uguali sono: " + countSame + " e sono i numeri seguenti: " + arraySame);
























































function getArrayRandom (minRange, maxRange, number) {

    const arrayNumbers = []
    // console.log(arrayBombs)

    while (arrayNumbers.length < number) { 
        const n = getRandomIntInclusive (minRange,maxRange)
        // console.log(n)

        if (arrayNumbers.includes(n) === false){

            arrayNumbers.push(n)
        }
    }
    return  arrayNumbers
}








function getRandomIntInclusive (min, max) {
	min = Math.ceil(min)
	max = Math.floor(max)
	return Math.floor(Math.random() * (max - min + 1) + min)
 } // The maximum is inclusive and the minimum is inclusive