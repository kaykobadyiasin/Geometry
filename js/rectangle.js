// start js 

// rectangle btn click 
document.getElementById('rectangleBtn').addEventListener('click', function(){

     // input rectangleB
     rectangleInputW = document.getElementById('rectangleInputW');
     rectangleInputWValue = rectangleInputW.value;
     rectangleInputWNumber = parseFloat(rectangleInputWValue);
 
     rectangleWText = document.getElementById('rectangleWText')
     rectangleInputWInnerText = rectangleWText.innerText;
     rectangleInputWTextNumber = parseFloat(rectangleInputWInnerText);
     
     rectangleWText.innerText = rectangleInputWNumber;
 
     rectangleInputW.value = '';


    // input rectangleI
    rectangleInputI = document.getElementById('rectangleInputI');
    rectangleInputIValue = rectangleInputI.value;
    rectangleInputINumber = parseFloat(rectangleInputIValue);

    rectangleIText = document.getElementById('rectangleIText')
    rectangleInputIInnerText = rectangleIText.innerText;
    rectangleInputITextNumber = parseFloat(rectangleInputIInnerText);
    
    rectangleIText.innerText = rectangleInputINumber;

    rectangleInputI.value = '';



    // result 
    const rectangleResult = rectangleInputWNumber * rectangleInputINumber;
    const rectangleResultToFixed = rectangleResult.toFixed(2);

    // ResultArea
    rectangleResultArea = document.getElementById('rectangleResultArea');
    rectangleResultAreaInner = rectangleResultArea.innerText;
    rectangleResultAreaInnerNumber = parseFloat(rectangleResultAreaInner);

    rectangleResultArea.innerText = rectangleResultToFixed;

})