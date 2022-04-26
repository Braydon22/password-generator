randomNumber = (x)=>{
let result = "";
for(let i = 0; i < x; i++){
let randomNum = Math.floor((Math.random()*9) +1);
result = result.concat(randomNum);
}
return result;
}

randomLetterS = (x) =>{
    let result = "";
    let l = "abcdefghijklmnopqrstuvwxyz";
    for(let i = 0; i < x; i++){
        result = result.concat (l[Math.floor(Math.random()*l.length)]);
    }
    return result;
}

randomLetterU = (x) =>{
    let result = "";
    let l = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for(let i = 0; i < x; i++){
        result = result.concat (l[Math.floor(Math.random()*l.length)]);
        }
    return result;
}

randomChar = (x) =>{
    let result = "";
    let l = "!@#$%^&*?";
    for(let i = 0; i < x; i++){
        result = result.concat (l[Math.floor(Math.random()*l.length)]);
    }
    return result;
}

let generateBtn = document.getElementById('generateBtn');
let passwordDisplayBox = document.getElementById('passwordTextBox');
let NumberCheckBox = document.getElementById("Number");
let LetterSCheckBox = document.getElementById("alphabet-smallcase");
let LetterUCheckBox = document.getElementById("alphabet-uppercase");
let sCharCheckBox = document.getElementById ("special-characters");
generateBtn.onclick = () =>{
    let finalResult = "";
    let tickedCheckBox = 0;
    let pLength = document.getElementById('length-of-password').value;

    if(NumberCheckBox.checked){
      finalResult = finalResult.concat(randomNumber(8));
      tickedCheckBox++;
    }

    if(LetterSCheckBox.checked){
      finalResult = finalResult.concat(randomLetterS(8));
      tickedCheckBox++;
    }
    
    if(LetterUCheckBox.checked){
      finalResult = finalResult.concat(randomLetterU(8));
      tickedCheckBox++;
    }

    if(sCharCheckBox.checked){
      finalResult = finalResult.concat(randomChar(8));
      tickedCheckBox++;
    }

    let res = "";
    
    if(tickedCheckBox == 0){
        window.alert("Please choose type of your password");
    }else {
        for(let i = 0; i < pLength; i++){
            res = res.concat (finalResult[Math.floor(Math.random()*finalResult.length)]);
        }
    }
    passwordDisplayBox.value = res;
}