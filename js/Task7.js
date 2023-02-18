// Добавлено учёт число либо не число, и подсчёт нулей.
let arrNew7 = [1, 2, 0, 6, 3, 8, "xbckj"];
let numOdd = 0;
let numEven = 0;
let notANum = 0;
let numZero = 0;

for (let i = 0; i < arrNew7.length; i++) {
    if (arrNew7[i] === 0) {
      numZero++;
    } else {
       if (arrNew7[i] % 2 == 0){
        numOdd++;
        } else if (arrNew7[i] % 2 == 1) {
        numEven++;
        } else {
        notANum++;
        }
    }    
  }
console.log(`Количество четных ${numOdd}, количество нечётных ${numEven}, a нулей всего ${numZero}`)

