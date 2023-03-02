let inputNum = +prompt('Введите число');
if ((typeof(inputNum) == 'number') && (!isNaN(inputNum))){
    if (inputNum % 2 === 0) {
        console.log('Число четное');
    } else {
        console.log('Число нечетное');
    }
} else {
    console.log('Упс, кажется, вы ошиблись');
}