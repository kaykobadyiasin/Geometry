// start js 

// rectangle btn click 
document.getElementById('parallelogramBtn').addEventListener('click', function(){

    // input rectangleB
    parallelogramInputB = document.getElementById('parallelogramInputB');
    parallelogramInputBInner = parallelogramInputB.innerText;
    parallelogramInputBNumber = parseFloat(parallelogramInputBInner);

    rectangleWText = document.getElementById('rectangleWText')
    parallelogramInputBInnerText = rectangleWText.innerText;
    parallelogramInputBTextNumber = parseFloat(parallelogramInputBInnerText);
    
    rectangleWText.innerText = parallelogramInputBNumber;


   // input rectangleI
   parallelogramInputH = document.getElementById('parallelogramInputH');
   parallelogramInputHInner = parallelogramInputH.innerText;
   parallelogramInputHNumber = parseFloat(parallelogramInputHInner);

   parallelogramIText = document.getElementById('parallelogramIText')
   parallelogramInputHInnerText = parallelogramIText.innerText;
   parallelogramInputHTextNumber = parseFloat(parallelogramInputHInnerText);
   
   parallelogramIText.innerText = parallelogramInputHNumber;



   // result 
   const parallelogramResult = parallelogramInputBNumber * parallelogramInputHNumber;
   const parallelogramResultToFixed = parallelogramResult.toFixed(2);

   // ResultArea
   parallelogramResultArea = document.getElementById('parallelogramResultArea');
   parallelogramResultAreaInner = parallelogramResultArea.innerText;
   parallelogramResultAreaInnerNumber = parseFloat(parallelogramResultAreaInner);

   parallelogramResultArea.innerText = parallelogramResultToFixed;

})