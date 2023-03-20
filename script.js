var mes = document.querySelector('.mes');
var p = document.querySelector('#sorry');
p.style.top = '0';
p.style.left = '0';
var sor = ['Sorry', '抱歉', 'ごめん', 'désolé', '죄송합니다', 'Verzeihung', 'Lo siento', 'Scusa', 'क्षमा मांगना'];
var sor_count = 0;

setInterval(function () {
    var mtop = mes.offsetTop;
    var mleft = mes.offsetLeft;

    p.style.width = '100px';
    p.style.height = '40px';

    p.style.top = mtop + 10 + 'px';
    p.style.left = mleft + 15 + 'px';
}, 50);

setInterval(function () {
    p.innerHTML = sor[sor_count % 9];
    sor_count++;
}, 3000);