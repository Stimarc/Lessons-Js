const carArray = ['Bmw','Audi','Mitsubishi','Mersedec','Volvo']

function getcarArray (array){
    return `${array[0]}, ${array[array.length-1]}`
}
    
console.log(getcarArray(carArray))