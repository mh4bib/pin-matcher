function pinGenerate(){
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
    else{
        const previousCalc = calcForm.value;
        const newCalc = previousCalc + pinNum;
        calcForm.value = newCalc;
        console.log(typeof newCalc);
        return newCalc;
    }
    

})