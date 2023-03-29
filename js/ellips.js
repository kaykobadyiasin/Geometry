// start js 

// triangle btn click 
document.getElementById('ellipsBtn').addEventListener('click', function(){

    // input triangleB
    ellipsInputA = document.getElementById('ellipsInputA');
    ellipsInputAInner = ellipsInputA.innerText;
    ellipsInputANumber = parseFloat(ellipsInputAInner);

    ellipsAText = document.getElementById('ellipsAText')
    ellipsATextInnerText = ellipsAText.innerText;
    ellipsATextInnerNumber = parseFloat(ellipsATextInnerText);
    
    ellipsAText.innerText = ellipsATextInnerNumber;


   // input triangleH
   ellipsInputB = document.getElementById('ellipsInputB');
   ellipsInputBInner = ellipsInputB.innerText;
   ellipsInputBNumber = parseFloat(ellipsInputBInner);

   ellipsAText = document.getElementById('ellipsAText')
   ellipsATextBInnerText = ellipsAText.innerText;
   ellipsATextBTextNumber = parseFloat(ellipsATextBInnerText);
   
   ellipsAText.innerText = ellipsATextBTextNumber;


   // triangle Prev Text
   ellipsPrevText = document.getElementById('ellipsPrevText');
   ellipsPrevTextInner = ellipsPrevText.innerText;
   ellipsPrevTextInnerNumber = parseFloat(ellipsPrevTextInner);


   // result 
   const ellipsResult = ellipsInputANumber * ellipsInputBNumber * ellipsPrevTextInnerNumber;
   const resultToFixed = ellipsResult.toFixed(2);

   // ResultArea
   ellipsResultArea = document.getElementById('ellipsResultArea');
   ellipsResultAreaInner = ellipsResultArea.innerText;
   ellipsResultAreaInnerNumber = parseFloat(ellipsResultAreaInner);

   ellipsResultArea.innerText = resultToFixed;

})