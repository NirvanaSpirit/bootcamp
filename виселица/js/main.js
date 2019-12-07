const words = [
    'javascript',
    'object',
    'python',
    'task',
    'makers'
]

let word = words[Math.floor(Math.random()* words.length)]

let answerArr = word.split('').map(function(item){
    return ' _'
})
let remaningLeters = word.length;
let attempts = 0;
let trueAttempts = 0;

while(remaningLeters > 0){
    let guess = prompt('Псс..., Пацан Введи букву, \n' + answerArr.join('')).toLowerCase();
    console.log(guess);
    if (guess === '') continue;
    if(guess === null) break;
    if(guess.length !== 1){
        alert('ты Ебан?! написано было одну букву ввести');
        continue;
    }

    let isTrueGuess = false;
    word.split('').map(function(item, index){
       if(guess === item && answerArr[index] === ' _'){
           answerArr[index] = guess;
           remaningLeters--;

       }
    })
  if(isTrueGuess){
      trueAttempts++;
  }
    attempts++;

}
if(!remaningLeters){
alert('наконец-то, не прошло и года ебан! \n' + word)
alert('кол-во попыток' + attempts);
alert('общий счет: ' + Math.floor(100 / attempts * trueAttempts))
}
