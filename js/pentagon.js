// start js 

// triangle btn click 
document.getElementById('pentagonBtn').addEventListener('click', function(){

    // input triangleB
    pentagonInputP = document.getElementById('pentagonInputP');
    pentagonInputPInner = pentagonInputP.innerText;
    pentagonInputPNumber = parseFloat(pentagonInputPInner);

    pentagonPText = document.getElementById('rombusBText')
    pentagonInputPInnerText = pentagonPText.innerText;
    pentagonInputPTextNumber = parseFloat(pentagonInputPInnerText);
    
    pentagonPText.innerText = pentagonInputPNumber;


   // input triangleH
   pentagonInputB = document.getElementById('pentagonInputB');
   pentagonInputBInner = pentagonInputB.innerText;
   pentagonInputBNumber = parseFloat(pentagonInputBInner);

   pentagonPText = document.getElementById('pentagonPText')
   pentagonInputBInnerText = pentagonPText.innerText;
   pentagonInputBTextNumber = parseFloat(pentagonInputBInnerText);
   
   pentagonPText.innerText = pentagonInputBNumber;


   // triangle Prev Text
   pentagonPrevText = document.getElementById('pentagonPrevText');
   pentagonPrevTextInner = pentagonPrevText.innerText;
   pentagonPrevTextInnerNumber = parseFloat(pentagonPrevTextInner);


   // result 
   const pentagonResult = pentagonInputPNumber * pentagonInputBNumber * pentagonPrevTextInnerNumber;
   const resultToFixed = pentagonResult.toFixed(2);

   // ResultArea
   pentagonResultArea = document.getElementById('pentagonResultArea');
   pentagonResultAreaInner = pentagonResultArea.innerText;
   pentagonResultAreaInnerNumber = parseFloat(pentagonResultAreaInner);

   pentagonResultArea.innerText = resultToFixed;

})