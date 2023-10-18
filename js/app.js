

const ramdomNumbers = alert('cerca di memorizzare il maggior numero possibile di numeri ' + getArrayRandom(1,100,5))



























































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