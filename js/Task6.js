// Исправил ошибку

let arrLast = [2, 2, 2, 3];

function unique(arr) {
  return Array.from(new Set(arr));
}

let arrNew6 = unique(arrLast);

if (arrNew6.length == 1) {
  console.log('true')
} else {
  console.log('false')
}
