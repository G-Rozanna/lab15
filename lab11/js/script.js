function task1_4(){
    let var1=prompt("Введите значение переменной 1", "0");
    let var2=prompt("Введите значение переменной 2", "123123123");
    let var3=prompt("Введите значение переменной 3", "true");
    let var4=prompt("Введите значение переменной 4", "text");

    document.getElementById("txt1").value = var1;
    document.getElementById("txt2").value = var2;
    document.getElementById("txt3").value = var3;
    document.getElementById("txt4").value = var4;

    var1 = Number(var1);
    var2 = BigInt(var2);
    var3 = Boolean(var3);
    var4 = String(var4);

    alert(
        `переменная var1 = ${var1}, тип = ${typeof(var1)}\n`+
        `переменная var2 = ${var2}, тип = ${typeof(var2)}\n`+
        `переменная var3 = ${var3}, тип = ${typeof(var3)}\n`+
        `переменная var4 = ${var4}, тип = ${typeof(var4)}\n`
    )

}
//task 5
function task5(){
    let a = prompt("Введите коэффициент A","1");
    let  b= prompt("Введите коэффициент B","1");
    let c = prompt("Введите коэффициент C","1");

    if(!isNaN(a)){
        a = Number(a);
        document.getElementById("txtA").value = a;
    }
    else{
        alert("Введите число");
        return;
    }
    
    if(!isNaN(b)){
        b = Number(b);
        document.getElementById("txtB").value = b;
    }
    else{
        alert("Введите число");
        return;
    }

    if(!isNaN(c)){
        c = Number(c);
        document.getElementById("txtC").value =c;
    }
    else{
        alert("Введите число");
        return;
    }
let d = Math.pow(b,2) - 4*a*c;
if (d<0){
    alert("Уравнение не имеет действительных корней");
}
 else{
    let x1 =(-b + Math.sqrt(d)) / (2*a);
    let x2 =(-b - Math.sqrt(d)) / (2*a);
    alert(
        `Корни квадратного уравнения равны: \n`+
        `x1 =${x1} \n`+
        `x2 =${x2}`
    )
 } 
}
 // Task 6
function task6(){
    document.getElementById("textFor").value = "";
    document.getElementById("textWhile").value = "";
    document.getElementById("textDoWhile").value = "";
    let loop = "";
    let radios = document.getElementsByClassName("loop");
    if(radios[0].checked){
        loop = "for";
    }
    else if(radios[1].checked){
        loop = "while";
    }
    else if(radios[2].checked){
        loop = "doWhile";
    }
    switch(loop){
        case "for":
            for(let count = 0; count < 10; count++){
                document.getElementById("textFor").value = document.getElementById("textFor").value + " " + count;
            }
            break;
        case "while":
            let countWhile = 0;
            while(countWhile < 10){
                document.getElementById("textWhile").value = document.getElementById("textWhile").value + " " + countWhile;
                countWhile++;
            }
            break;
        case "doWhile":
            let countDoWhile = 0;
            do{
                document.getElementById("textDoWhile").value = document.getElementById("textDoWhile").value + " " + countDoWhile;
                countDoWhile++;
            } while(countDoWhile < 10);
            break;
        default:
            alert("Выберите тип цикла!");
    }
}
// Task 7
function task7(){
    switch(document.getElementById("selectWeather").value){
        case "sunny":
            alert("Вам следует надеть кепку!");
            break;
        case "rainy":
            alert("Вам следует надеть дождевик!");
            break;
        case "snowy":
            alert("Вам следует надеть шубу!");
            break;
        case "windy":
            alert("Вам следует надеть ветровку!");
            break;
        default:
            alert("Выберите погоду!");
    }
}