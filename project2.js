
// Calculator

const prompt=require("prompt-sync")()


function getnumber(numberstring){
  while(true){
    const number=parseFloat(prompt("Enter number " + numberstring + ": "))
    if(isNaN(number)){
      console.log("Invalid input")
    }
    else{
      return number
    }
  }
}


const number1=getnumber('One')
const number2=getnumber("Two")

const operator=prompt("Enter the operator: ")


let result;
let valid=true

switch(operator){
  case '+':
    result=number1+number2
    break
  case '-':
    result=number1-number2
    break
  case '*':
      result=number1*number2
      break
  case '/':
    if(number2===0){
      valid=false
      console.log("Zero division error")
    }
    result=number1/number2
    break
  default:
    console.log("Invalid")
    break
}
if(valid) console.log(number1, operator, number2, "=" , result)