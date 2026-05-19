const box=document.querySelector('form');

box.addEventListener('submit',function(e){
    e.preventDefault();

    const height=parseInt(document.querySelector('#height').value);
    const weight=parseInt(document.querySelector('#weight').value);

    const result=document.querySelector('.results');
    if(height===''||height<0||isNaN(height)){
        result.innerHTML='Please Enter a Valid Height';
    }else if(weight===''||weight<0||isNaN(weight)){
        result.innerHTML='Please Enter a Valid Weight'
    }else{
        const bmi=(weight/(height/100)**2).toFixed(2);
        
        if (bmi<18.5){
            result.innerHTML=`${bmi}—Underweight`;
        }else if(bmi < 24.9){
          result.innerHTML=`${bmi}—Healthy Weight`;
        }else if(bmi < 29.9){
          result.innerHTML=`${bmi}—Overweight`;
        }else{
            result.innerHTML=`${bmi}—Obese`;
        }
    }
})