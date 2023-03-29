// start js 

// triangle btn click 
document.getElementById('rhombusBtn').addEventListener('click', function(){

     // input triangleB
     rhombusInputB = document.getElementById('rhombusInputB');
     rhombusInputBInner = rhombusInputB.innerText;
     rhombusInputBNumber = parseFloat(rhombusInputBInner);
 
     rhombusBText = document.getElementById('rombusBText')
     rhombusInputBInnerText = rhombusBText.innerText;
     rhombusInputBTextNumber = parseFloat(rhombusInputBInnerText);
     
     rhombusBText.innerText = rhombusInputBNumber;


    // input triangleH
    rombusInputH = document.getElementById('rombusInputH');
    rombusInputHInner = rombusInputH.innerText;
    rombusInputHNumber = parseFloat(rombusInputHInner);

    rombusHText = document.getElementById('rombusHText')
    rombusInputHInnerText = rombusHText.innerText;
    rombusInputHTextNumber = parseFloat(rombusInputHInnerText);
    
    rombusHText.innerText = rombusInputHNumber;


    // triangle Prev Text
    rombusPrevText = document.getElementById('rombusPrevText');
    rombusPrevTextInner = rombusPrevText.innerText;
    rombusPrevTextInnerNumber = parseFloat(rombusPrevTextInner);


    // result 
    const rombusResult = rhombusInputBNumber * rombusInputHNumber * rombusPrevTextInnerNumber;
    const resultToFixed = rombusResult.toFixed(2);

    // ResultArea
    rhombusResultArea = document.getElementById('rhombusResultArea');
    rhombusResultAreaInner = rhombusResultArea.innerText;
    rhombusResultAreaInnerNumber = parseFloat(rhombusResultAreaInner);

    rhombusResultArea.innerText = resultToFixed;

})