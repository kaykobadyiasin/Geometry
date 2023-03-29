// start js 
// blog btn 
document.getElementById('blogBtn').addEventListener('click', function(){
    window.location.href = 'https://www.blogger.com/about/?bpli=1';
})
// blog btn 


// triangle btn click 
document.getElementById('triangleBtn').addEventListener('click', function(){

     // input triangleB
     triangleInputB = document.getElementById('triangleInputB');
     triangleInputBValue = triangleInputB.value;
     triangleInputBNumber = parseFloat(triangleInputBValue);
 
     triangleBText = document.getElementById('triangleBText')
     triangleInputBInnerText = triangleInputB.innerText;
     triangleInputBTextNumber = parseFloat(triangleInputBInnerText);
     
     triangleBText.innerText = triangleInputBNumber;
 
     triangleInputB.value = '';


    // input triangleH
    triangleInputH = document.getElementById('triangleInputH');
    triangleInputHValue = triangleInputH.value;
    triangleInputHNumber = parseFloat(triangleInputHValue);

    triangleHText = document.getElementById('triangleHText')
    triangleInputHInnerText = triangleHText.innerText;
    triangleInputHTextNumber = parseFloat(triangleInputHInnerText);
    
    triangleHText.innerText = triangleInputHNumber;

    triangleInputH.value = '';


    // triangle Prev Text
    trianglePrevText = document.getElementById('trianglePrevText');
    trianglePrevTextInner = trianglePrevText.innerText;
    trianglePrevTextInnerNumber = parseFloat(trianglePrevTextInner);


    // result 
    const result = triangleInputBNumber * triangleInputBNumber * trianglePrevTextInnerNumber;
    const resultToFixed = result.toFixed(2);

    // ResultArea
    triangleResultArea = document.getElementById('triangleResultArea');
    triangleResultAreaInner = triangleResultArea.innerText;
    triangleResultAreaInnerNumber = parseFloat(triangleResultAreaInner);

    triangleResultArea.innerText = resultToFixed;

})