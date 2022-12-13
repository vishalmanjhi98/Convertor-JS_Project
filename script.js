
const from = document.getElementById("from");
const to = document.getElementById("to");
const inputNumber = document.getElementById("input-number");
document.getElementById("convert").addEventListener("click",()=>{
    // check from
    let fromValue = from.value; 
    //check 
    let toValue = to.value;
    //check input number
    let inputValue = inputNumber.value;
    //convert input no;
    let result = convertBase(fromValue, toValue, inputValue);
    //show the result
    resultBox.innerText = result;
})

function convertBase(fromBase, toBase, num){
    let d = parseInt(num,fromBase); //number in to base
    let res = d.toString(toBase);//base 10 to required 
    return res;//result
}

document.getElementById("swap").addEventListener("click",()=>{
    let temp = from.value;
    from.value = to.value;
    to.value = temp;
})