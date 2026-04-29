function execute() {
    //1
    // let div_el = window.document.getElementById("body_div-changingColor");
    // div_el.style.border = "blue solid thick";
    
    //2
    // let elements = document.querySelectorAll('ul > li:last-child');
    // for (let elem of elements) {
    //     alert(elem.innerHTML);
    // }

    //3
    // for (let elem of document.body.children) {
    //     if (elem.matches('a[href$="zip"]')) {
    //         alert("Ссылка: " + elem.href);
    //     }
    // }

    //4
    //let chapter = document.querySelector('.chapter');
    //alert(chapter.closest('.book'));
    //alert(chapter.closest('.contents'));
    //alert(chapter.closest('h1'));

    //5
    //let inputs = table.getElementsByTagName('input');
//for (let input of inputs) {
    //alert(input.value);
//}

//6
//alert(document.body.innerHTML);
//document.body.innerHTML = 'Новый документ!';

//7
//document.body.innerHTML += 'Привет! Как дела?';

//8
//alert(document.body.outerHTML);

// 9
// let news = window.document.getElementById("news");
// alert(news.textContent);

// 10
// let text = document.body.firstChild;
// alert(text.data);
// let comment = text.nextSibling;
// alert(comment.data);

// 11
// let elem = window.document.getElementById("elem");
// elem.hidden = true;

// 12
// let elem = window.document.getElementById("elem");
// setInterval(() => elem.hidden = !elem.hidden, 500);

// 13
let elem = window.document.getElementById("body_input-pressing");
alert(elem.id);
alert(elem.value);
alert(elem.type);

}