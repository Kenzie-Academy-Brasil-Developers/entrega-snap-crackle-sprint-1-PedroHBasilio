function imparNumber(n){ 
    if(n % 2 !== 0){
        return true
    }
}
// console.log(imparNumber(20))

function multiploCinco(n){
    if(n % 5 === 0){
        return true
    }
}

function prime(n){
    if (n % 2 !== 0 && n % 3 !== 0 && n !== 1 || n === 2 || n === 3){
        return true
    }
}

function snapCrackle (maxValue){
    let snap = ""
    for(let i = 1; i <= maxValue; i++){

        if(imparNumber(i)){
            snap += "Snap"
        }
        if(multiploCinco(i)){
            snap += "Crackle"
        }
        if(prime(i)){
            snap +="Prime"
        }
        if(imparNumber(i) !== true && multiploCinco(i) !== true && prime(i) !== true) {
            snap += `${i}`
        }
        snap += ", "  
    }
    return snap 
    //console.log(snap.length - 1)
}

console.log(snapCrackle(20))