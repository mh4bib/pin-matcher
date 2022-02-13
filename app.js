function pinGenerate(){
    document.getElementById('success-message').style.display = 'none'
    document.getElementById('error-message').style.display = 'none'
    const pinNum = Math.round(Math.random()*10000);
    const pin = pinNum + '';
    if(pin.length<4){
        pinGenerate();
    }
    else{
        document.getElementById('generate-form').value = pin;
    }
}

document.getElementById('calc-body').addEventListener('click', function(e){
    const pinNum = e.target.innerText;
    const calcForm = document.getElementById('calc-form');
    if(pinNum == 'C'){
        calcForm.value = '';
    }
    else if(pinNum == '<'){
        calcForm.value = calcForm.value.slice(0, -1);
    }
    else if(pinNum == 'Submit' || pinNum == '3 try left' || pinNum == ''){
        return
    }
    else{
        const previousCalc = calcForm.value;
        const newCalc = previousCalc + pinNum;
        calcForm.value = newCalc;
        console.log(typeof newCalc);
        return newCalc;
    }
})

function submit(){
    const generateForm = document.getElementById('generate-form').value;
    const calcForm = document.getElementById('calc-form').value;
    if(generateForm==calcForm){
        document.getElementById('success-message').style.display = 'block'
        document.getElementById('error-message').style.display = 'none'
        document.getElementById('generate-form').value = '';
        document.getElementById('calc-form').value = '';
    }
    else{
        document.getElementById('error-message').style.display = 'block'
        document.getElementById('success-message').style.display = 'none'
        document.getElementById('generate-form').value = '';
        document.getElementById('calc-form').value = '';
    }
}