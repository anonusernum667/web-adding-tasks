const Sub = document.getElementById('AddTask');

Sub.addEventListener('click', function(){
    
    const x = document.getElementById('inputext').value;
    const inputBox = document.getElementById('TaskContainer');
    
    const newDIV = document.createElement('div');
    const newDiv2 = document.createElement('div');
    const newButton = document.createElement(`button`);
    newButton.textContent = 'Delete';
    newDIV.textContent = x;
    
    
    // newDIV.appendChild(newButton);
    inputBox.appendChild(newDIV);
    inputBox.appendChild(newDiv2)
    newDiv2.appendChild(newButton);
    newButton.addEventListener('click', function() {
        newDIV.remove();
        newButton.remove();
    });
});
