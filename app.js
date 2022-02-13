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

document.getElementById('calc-body').addEventListener('click', function(){

})