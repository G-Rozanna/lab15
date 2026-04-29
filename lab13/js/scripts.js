//task 1
function showLocalVariable(){
    let message = "Привет!";
    alert(message);
}
//showLocalVariable();

//task 2
let userName="Иван";
function showMessage1(){
    let userName = "Губасарян";
    let message = "Привет" + userName;
    alert(message);
}
//showMessage1();
function showMessage2(){
    showMessage1();
    //alert(message);
    alert(userName);
}
//showMessage2();

//task 3
function showMessage3(from,text){
    alert(from + " : " + text);
}
//showMessage3('Иван','Привет');
//showMessage3('Розанна','Доброе утро');

//task 4
function showMessage4(){
    return ("Студент");
}
//showMessage3(showMessage4(), "Привет");

//task5 
function task5(){
    let sum =(a,b)=>a+b;
    alert ( "Сумма = " + sum(1,2));
}
//task5();

//task 6
function task6(){
    let sum =function(a,b){
        return a+b;
    }
    alert ( "Сумма = " + sum(2,5));
}
//task6();

//task 7
function task7(){
    let age =prompt("Сколько Вам лет?",20);
    let welcome = (age<18)? () => alert("Привет!"):
    () => alert("Здравствуйте!");
    welcome();
}
//task7();

//task 8
function task8(){
    setTimeout( ()=> document.body.style.background = "blue", 1000);
}
//task8();

//task 9
function task9(){
    alert(location.href);
}
//task9();

//task 10
function task10(){
    location.href="https:yandex.ru";
}
//task10();

//task11
function task11_1(){
    for (let i = 0; i<document.body.childNodes.length; i++){
        alert(document.body.childNodes[i]);
    }
}
//task11_1();

function task11_2(){
    for (let child of document.body.childNodes){
        alert(child);
    }
}
//task11_2();

//task 12
function task12(){
    let divEl = document.getElementById("div_elem");
    divEl.style.backgroundColor = "red";
}


//task 13
function handleClick(){
    alert("Кнопка нажата");
    
}
document.getElementById('clik-button').addEventListener('click', handleClick);

//task 14
function showInput(){
    let input = document.getElementById('user-input').value;
    document.getElementById('result').innerHTML = `Вы ввели: ${input}`;
}

//task 15
function creatElement15(){
    let newDiv = document.createElement('div');
    newDiv.innerHTML="Новый элемент";
    document.body.appendChild(newDiv);
}

function removeElement(){
    let divs = document.getElementsByTagName('div');
    if (divs.length > 1){
    divs[divs.length-1].remove();
    }
}
