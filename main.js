let square = $('<div style="width: 340px; height: 180px; margin: 10px; background-color: green;"></div>');
document.body.prepend(square[0]);
square.addClass('first')

let square2 = $('<div style="width: 200px; height: 100px; margin: 10px; background-color: purple;"></div>');
document.body.prepend(square2[0]);
square2.addClass('second')

$('div.first').mouseover(function() {
    console.log(`Высота : ${square[0].clientWidth}px, Ширина : ${square[0].clientHeight}px`)
});
$('div.first').click(function() {
    alert('Зеленый');
});
$('div.second').mouseover(function() {
    console.log(`Высота : ${square2[0].clientWidth}px, Ширина : ${square2[0].clientHeight}px`)
});
$('div.second').click(function() {
    alert('Фиолетовый');
});