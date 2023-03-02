let array = [2, 2, 2];
let check = true;
for (let i = 0; i < array.length - 1; i++) {
  if(array[i] !== array[i+1]) {
    check = false;
    break;
  }
}
console.log(check);