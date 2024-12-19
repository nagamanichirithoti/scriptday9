const element1 = document.getElementById('myElement');
const element2 = document.getElementById('myElement1');
const element = document.getElementById('myElement2');

element1.addEventListener('click', () => {
    element1.style.color = "white";
    element1.style.backgroundColor = "blue";
    element1.style.padding = "20px";
    element1.style.borderRadius = "10px";
    element1.style.boxShadow = "5px 5px 15px grey";
});


element2.addEventListener('dblclick', () => {
    element2.style.color = "white";
    element2.style.backgroundColor = "green";
    element2.style.padding = "25px";
    element2.style.borderRadius = "20px";
    element2.style.boxShadow = "5px 5px 20px darkgreen";
});


element.addEventListener('mouseover', () => {
    element.style.color = "white";
    element.style.backgroundColor = "red";
    element.style.padding = "30px";
    element.style.borderRadius = "30px";
    element.style.boxShadow = "5px 5px 25px darkred";
});

element.addEventListener('mouseout', () => {
    element.style.color = "";
    element.style.backgroundColor = "lightcoral";
    element.style.padding = "10px";
    element.style.borderRadius = "0px";
    element.style.boxShadow = "none";
});