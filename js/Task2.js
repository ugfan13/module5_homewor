// Задание 2
// Дана переменная x, которая может принимать любое значение. Написать программу, которая в зависимости от типа данных x выводит в консоль сообщение вида: «x — число».
// Опишите три случая: когда х = числу, строке или логическому типу. В других случаях выводите сообщение: «Тип x не определён».
// Примечание: в этом задании использовать promt не нужно.

let x = 2;
switch (typeof(x)) {
  case "number":
    console.log("Число");
    break;
  case "string":
    console.log("строка");
    break;
  case "boolean":
    console.log("bool");
    break;
  default:
    console.log("Тип данных не определён")
}