function log(message: string) {
    const enabled = true
    if(enabled) {
        console.log(message)
    }
}

export function calculate(inputString: string): number {
    log(`Calculating ${inputString}`)
    let inputArray = inputString.split(" ")

    while (true) {
        const multiplicationIndex = inputArray.indexOf("*")
        const divisionIndex = inputArray.indexOf("/")
        if (multiplicationIndex === -1 && divisionIndex === -1) {
            break
        }
        if ((multiplicationIndex < divisionIndex && multiplicationIndex !== -1) || (multiplicationIndex > -1 && divisionIndex === -1)) {
            inputArray = [
                ...inputArray.slice(0, multiplicationIndex - 1),
                multiplicationRule(inputArray[multiplicationIndex - 1], inputArray[multiplicationIndex + 1]),
                ...inputArray.slice(multiplicationIndex + 2)
            ]
        } else {
            inputArray = [
                ...inputArray.slice(0, divisionIndex - 1),
                divisionRule(inputArray[divisionIndex - 1], inputArray[divisionIndex + 1]),
                ...inputArray.slice(divisionIndex + 2)
            ]
        }
    }

    while (true) {
        const additionIndex = inputArray.indexOf("+")
        const substractionIndex = inputArray.indexOf("-")
        if(additionIndex === -1 && substractionIndex === -1) {
            break
        } 
        if ((additionIndex < substractionIndex && additionIndex !== -1) || (additionIndex > -1 && substractionIndex === -1)) {
            inputArray = [
                ...inputArray.slice(0, additionIndex - 1),
                additionRule(inputArray[additionIndex - 1], inputArray[additionIndex + 1]),
                ...inputArray.slice(additionIndex + 2)
            ]
        } else {
            inputArray = [
                ...inputArray.slice(0, substractionIndex - 1),
                substractionRule(inputArray[substractionIndex - 1], inputArray[substractionIndex + 1]),
                ...inputArray.slice(substractionIndex + 2)
            ]
        }
    }

    return parseFloat(inputArray[0])
}

function additionRule(firstNumber: string, secondNumber: string): string {
    const result = (parseFloat(firstNumber) + parseFloat(secondNumber)).toString()
    log(`${firstNumber} + ${secondNumber} = ${result}`)
    return result
}

function substractionRule(firstNumber: string, secondNumber: string): string {
    const result = (parseFloat(firstNumber) - parseFloat(secondNumber)).toString()
    log(`${firstNumber} - ${secondNumber} = ${result}`) 
    return result
}

function multiplicationRule(firstNumber: string, secondNumber: string): string {
    const result = (parseFloat(firstNumber) * parseFloat(secondNumber)).toString()
    log(`${firstNumber} * ${secondNumber} = ${result}`) 
    return result
}

function divisionRule(firstNumber: string, secondNumber: string): string {
    const result = (parseFloat(firstNumber) / parseFloat(secondNumber)).toString()
    log(`${firstNumber} / ${secondNumber} = ${result}`) 
    return result
}
