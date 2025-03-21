const addition = document.querySelector("#addition");
addition.addEventListener('click', ()=>{
    const numOne = +document.querySelector("#inputFiledOne").value;
    const numTwo = +document.querySelector("#inputFiledTwo").value;
    alert(numOne+numTwo);
});

const substraction = document.querySelector("#substraction");
substraction.addEventListener('click', ()=>{
    const numOne = +document.querySelector("#inputFiledOne").value;
    const numTwo = +document.querySelector("#inputFiledTwo").value;
    alert(numOne-numTwo);
});

const multiplication = document.querySelector("#multiplication");
multiplication.addEventListener('click', ()=>{
    const numOne = +document.querySelector("#inputFiledOne").value;
    const numTwo = +document.querySelector("#inputFiledTwo").value;
    alert(numOne*numTwo);
});

const division = document.querySelector("#division");
division.addEventListener('click', ()=>{
    const numOne = +document.querySelector("#inputFiledOne").value;
    const numTwo = +document.querySelector("#inputFiledTwo").value;
    alert(numOne/numTwo);
    setTimeout(() => {
        alert("Hope you have got the calculations!");
    }, 500); 
});



