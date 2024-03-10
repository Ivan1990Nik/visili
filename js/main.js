/* var uzer = {};
uzer ["leng"] = 5;
uzer ["name"] = "ivan";
uzer ["femali"] = "pelevin";
console.log(uzer); */


/* var uzer = {
  name: "ivan",
  legs: 34,
  famili: "pelevin"
};
console.log(uzer.famili); */
/* 
var anna = { name: "Анна", age: 11, luckyNumbers: [2, 4, 8, 16] };
var dave = { name: "Дэйв", age: 5, luckyNumbers: [3, 9, 40,15,12] };
var kate = { name: "Кейт", age: 9, luckyNumbers: [1, 2, 3] };

var friends = [anna, dave, kate];
console.log(friends[1].luckyNumbers.length); */

/* var myCrazyObject = {
  "name": "Нелепый объект",
  "some array": [7, 9, { purpose: "путаница", number: 123 }, {name: "drug"}, 3.3],
  "random animal": "Банановая акула"
  };
  console.log(alert(myCrazyObject["some array"][2].number)); */
/* 
  var message = "Привет, мир!";
  console.log(alert(message)); */

/*   var scores = {
    ivan: 4,
    vova: 5,
    ruslan: 6
  };
scores ["ivan"] +=4
scores ["ivan"] +=4
scores ["vova"] +=3
scores ["ruslan"] +=3
scores ["vova"] +=3
scores ["ruslan"] +=5
scores ["vova"] +=3


  console.log(scores) */

/* 
  var name = "Ivan";
  console.log("добрый день ", name);
  if (name.length >= 5) {
    console.log("какое прекрасное имя!")
  }
  else {
    console.log("какое маленькое имя")
  } */

/*   var lemonChicken = false;
var beefWithBlackBean = false;
var sweetAndSourPork = false;
var ris = false;
if (lemonChicken) {
 console.log("Отлично! Я буду курицу с лимоном!");
} else if (beefWithBlackBean) {
 console.log("Заказываю говядину.");
} else if (sweetAndSourPork) {
 console.log("Ладно, закажу свинину.");
} else if (ris) {
 console.log("Что ж, остается рис с яйцом.");
} else {
console.log("принисите уже хоть что нибудь");
 } */
/* var condition1 = false;
var condition2 = "45";
var condition3 = false;
var condition4 = 1;

 if (condition1) {
  console.log("Сделай это, если условие 1 истинно");
 } else if (condition2) {
  console.log("Сделай это, если условие 2 истинно ");
 } else if (condition3) {
  console.log("Сделай это, если условие 3 истинно");
 } else if (condition4) {
  console.log("Иначе сделай это " + condition4);
 } */
/* 
 var lemonChicken = false;
var beefWithBlackBean = false;
var sweetAndSourPork = false;
if (lemonChicken) {
 console.log("Отлично! Я буду курицу с лимоном!");
} else if (beefWithBlackBean) {
 console.log("Заказываю говядину.");
} else if (sweetAndSourPork) {
 console.log("Ладно, закажу свинину.");
}  */


/* 

var name = "paha";

if (name === "andrei") {
console.log("привет мне! ");
}
else if (name === "ivan") {
console.log("привет мне! ");
}
else if (name === "olga") {
console.log("привет мне! ");
}
else {
  console.log("привет незнакомец");
} */

/* var sheepCounted = 0;
while (sheepCounted < 10) {
  console.log("Посчитано овец: " + sheepCounted + "!");
  sheepCounted++;
}
console.log("Хрррррррррр-псссс");
for (var sheepCounted = 0; sheepCounted < 10; sheepCounted++) {
console.log("Посчитано овец: " + sheepCounted + "!");
}
console.log("Хрррррррррр-псссс"); */

/* var animals = "ivan"; */
/* for (var i = 3; i < 10000; i = i * 3) {
  console.log(i);
}
 */


/* 
var animals = ["Кот", "Рыба", "Лемур", "Комодский варан"];

for (var i = 0; i < animals.length; i++) {
  animals[i] = animals[i] + " - прекрасное животное";
}

console.log(animals); 

var alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
var randomString = "";
while (randomString.length < 6) {
  var randomIndex = Math.floor(Math.random() * alphabet.length);
  randomString += alphabet[randomIndex]

}
console.log(randomString);

 */
/* var name = prompt("Как вас зовут?") ;
console.log("Привет, " + name) ; */

/* var likesCats = confirm("Тебе нравятся кошки?");
if (likesCats) {
 console.log("Ты классная кошка!");
} else {
 console.log("Что ж, не проблема. Все равно ты молодец!");
} */


/* var likesCats = confirm("Тебе нравятся кошки?");
if (likesCats) {
  console.log(alert("Ты классная кошка!"));
} else {
  console.log("Что ж, не проблема. Все равно ты молодец!");
} */


var words = [
  "программа",
  "макака",
  "прекрасный",
  "оладушек"
  ];
  // Выбираем случайное слово
  var word = words[Math.floor(Math.random() * words.length)];
  // Создаем итоговый массив
  var answerArray = [];
  for (var i = 0; i < word.length; i++) {
  answerArray[i] = "_";
  }
  var remainingLetters = word.length;
  var attempts = 15;
  // Игровой цикл
  while (remainingLetters > 0 && attempts > 0) {
  // Показываем состояние игры
  alert(answerArray.join(" "));
  // Запрашиваем вариант ответа
  var guess = prompt("Угадайте букву, или нажмите Отмена для выхода из игры.");
  if (guess === null) {
    alert("досвидание!!!")
  // Выходим из игрового цикла
  break;
  } else if (guess.length !== 1) {
  alert("Пожалуйста, введите одиночную букву.");

  } else { 
  // Обновляем состояние игры
  for (var j = 0; j < word.length; j++) {
  if (word[j] === guess.toLowerCase() && answerArray[j] === "_") {
  answerArray[j] = guess;
  remainingLetters--;
  }
}
 if (guess.toLowerCase()) {
  attempts--;
} 
  
}
}
  // Конец игрового цикла
  // // Отображаем ответ и поздравляем игрока
  if (remainingLetters === 0) {
  alert(answerArray.join("  "));
  alert("Отлично молодец!" );
  } else if (attempts === 0) {
    alert("вы повешаный!!!")
  }
